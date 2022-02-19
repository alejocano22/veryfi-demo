import { useMemo } from 'react';
import { useTable, useGroupBy, useExpanded, useSortBy } from 'react-table';

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

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable(
  //     {
  //       columns,
  //       data,
  //     },
  //     useGroupBy,
  //     useExpanded // useGroupBy would be pretty useless without useExpanded ;)
  //   );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useGroupBy,

      useSortBy,
      useExpanded
    );

  return (
    <div className='sm:px-6 border-2 rounded-md border-gray-lighter bg-gray-lighter pb-4'>
      <h1 className='text-xl text-center text-purple-dark my-4'>
        {'Activity for Quarter'}
      </h1>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className='p-2 border-2 border-gray-light'
                >
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ' ⏺'}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className='p-2 border-2 border-gray-light text-center'
                    >
                      $ {cell.render('Cell')}
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
