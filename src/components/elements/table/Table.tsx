import { useMemo } from 'react';
import { useTable, useGroupBy, useExpanded } from 'react-table';

export interface TableProps {
  lastQuarter: QuarterCategoryI[];
}

export const Table = ({ lastQuarter }: TableProps) => {
  const data = useMemo(
    () => [
      {
        category: 'A',
        budget1: 1,
        spent1: 28,
        balance1: 64,
        budget2: 1,
        spent2: 28,
        balance2: 64,
        budget3: 2,
        spent3: 28,
        balance3: 64,
      },
      {
        category: 'B',
        budget1: 2,
        spent1: 28,
        balance1: 64,
        budget2: 2,
        spent2: 28,
        balance2: 64,
        budget3: 2,
        spent3: 28,
        balance3: 64,
      },
      {
        category: 'C',
        budget1: 3,
        spent1: 28,
        balance1: 64,
        budget2: 2,
        spent2: 28,
        balance2: 64,
        budget3: 2,
        spent3: 28,
        balance3: 64,
      },
      {
        category: 'Total',
        budget1: 3,
        spent1: 28,
        balance1: 64,
        budget2: 2,
        spent2: 28,
        balance2: 64,
        budget3: 2,
        spent3: 28,
        balance3: 64,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'OCTOBER 2021',
        columns: [
          {
            Header: 'Budget',
            accessor: 'budget1',
          },
          {
            Header: 'Spent',
            accessor: 'spent1',
          },
          {
            Header: 'Balance',
            accessor: 'balance1',
          },
        ],
      },
      {
        Header: 'NOVEMBER 2021',

        columns: [
          {
            Header: 'Budget',
            accessor: 'budget2',
          },
          {
            Header: 'Spent',
            accessor: 'spent2',
          },
          {
            Header: 'Balance',
            accessor: 'balance2',
          },
        ],
      },
      {
        Header: 'DECEMBER 2021',
        columns: [
          {
            Header: 'Budget',
            accessor: 'budget3',
          },
          {
            Header: 'Spent',
            accessor: 'spent3',
          },
          {
            Header: 'Balance',
            accessor: 'balance3',
          },
        ],
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useGroupBy,
      useExpanded // useGroupBy would be pretty useless without useExpanded ;)
    );

  return (
    <div className='sm:px-6 border-2 rounded-md border-gray-lighter bg-gray-lighter pb-4'>
      <h1 className='text-xl text-center text-purple-dark my-4'>
        {'Activity for Quarter'}
      </h1>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className='rounded-md'>
              {headerGroup.headers.map((column, index) =>
                index > 0 ? (
                  <th
                    {...column.getHeaderProps()}
                    className='border-x-2 border-t-2 border-gray-light p-2 rounded-md'
                  >
                    {column.render('Header')}
                  </th>
                ) : (
                  <th {...column.getHeaderProps()} className='p-2'>
                    {column.render('Header')}
                  </th>
                )
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className=''>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return index > 0 ? (
                    <td
                      {...cell.getCellProps()}
                      className='border-2 border-gray-light text-center rounded-md'
                    >
                      $ {cell.render('Cell')}
                    </td>
                  ) : (
                    <td {...cell.getCellProps()} className='text-center'>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
