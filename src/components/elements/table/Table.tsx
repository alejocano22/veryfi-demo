import { useMemo } from 'react';
import { useTable } from 'react-table';

export interface TableProps {
  lastQuarter: QuarterCategoryI[];
}

export const Table = ({ lastQuarter }: TableProps) => {
  const data = useMemo(
    () => [
      {
        col1: '',
        col2: 'Spent (USD)',
        // spent: 'Spent (USD)',
        col3: 'Spent (USD)',
        col4: 'Spent (USD)',
      },
      {
        col1: lastQuarter[0].name,
        col2: `$ ${lastQuarter[0].periods[0].spent}`,
        col3: `$ ${lastQuarter[0].periods[1].spent}`,
        col4: `$ ${lastQuarter[0].periods[2].spent}`,
      },
      {
        col1: lastQuarter[1].name,
        col2: `$ ${lastQuarter[1].periods[0].spent}`,
        col3: `$ ${lastQuarter[1].periods[1].spent}`,
        col4: `$ ${lastQuarter[1].periods[2].spent}`,
      },
      {
        col1: lastQuarter[2].name,
        col2: `$ ${lastQuarter[2].periods[0].spent}`,
        col3: `$ ${lastQuarter[2].periods[1].spent}`,
        col4: `$ ${lastQuarter[2].periods[2].spent}`,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Categories',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'October 2021',
        accessor: 'col2',
        // column: [
        //   {
        //     Header: 'Budget',
        //     accessor: 'budget',
        //     aggregate: 'average',
        //     Aggregated: ({ value }) => `${Math.round(value * 100) / 100} (avg)`,
        //   },
        //   {
        //     Header: 'Spent',
        //     accessor: 'spent',
        //     aggregate: 'average',
        //     Aggregated: ({ value }) => `${Math.round(value * 100) / 100} (avg)`,
        //   },
        // ],
      },
      {
        Header: 'November 2021',
        accessor: 'col3',
      },
      {
        Header: 'December 2021',
        accessor: 'col4',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  const firstPageRows = rows.slice(0, 100);
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
                <th
                  {...column.getHeaderProps()}
                  className='text-left pr-6 text-purple-dark'
                >
                  {column.canGroupBy ? (
                    // If the column can be grouped, let's add a toggle
                    <span {...column.getGroupByToggleProps()}>
                      {column.isGrouped ? '🛑 ' : '👊 '}
                    </span>
                  ) : null}
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className='px-4 border-2 border-gray-light rounded-md '
                    >
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
