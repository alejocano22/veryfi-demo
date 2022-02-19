import { useMemo } from 'react';
import { useTable, useGroupBy, useExpanded, useSortBy } from 'react-table';
import { toLastQuarterTable } from 'src/utils/categories';

export interface TableProps {
  lastQuarter: QuarterCategoryI[];
}

export const Table = ({ lastQuarter }: TableProps) => {
  console.log('from redux', lastQuarter);
  const d = toLastQuarterTable(lastQuarter);
  console.log('new data', d);
  const data = useMemo(
    () => [
      ...d,
      // {
      //   category: 'A',
      //   budgetMonth1: 1,
      //   spentMonth1: 2,
      //   balanceMonth1: 64,
      //   budgetMonth2: 1,
      //   spentMonth2: 3,
      //   balanceMonth2: 64,
      //   budgetMonth3: 2,
      //   spentMonth3: 28,
      //   balanceMonth3: 64,
      // },
      // {
      //   category: 'B',
      //   budgetMonth1: 2,
      //   spentMonth1: 28,
      //   balanceMonth1: 64,
      //   budgetMonth2: 2,
      //   spentMonth2: 28,
      //   balanceMonth2: 64,
      //   budgetMonth3: 2,
      //   spentMonth3: 28,
      //   balanceMonth3: 64,
      // },
      // {
      //   category: 'C',
      //   budgetMonth1: 3,
      //   spentMonth1: 28,
      //   balanceMonth1: 64,
      //   budgetMonth2: 2,
      //   spentMonth2: 28,
      //   balanceMonth2: 64,
      //   budgetMonth3: 2,
      //   spentMonth3: 28,
      //   balanceMonth3: 64,
      // },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Category',
        accessor: 'category',
        Footer: 'Total',
      },
      {
        Header: 'OCTOBER 2021',
        Footer: '',
        columns: [
          {
            Header: 'Budget',
            accessor: 'budgetMonth1',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.budgetMonth1 + sum,
                    0
                  ),
                [info.rows]
              );
              return `$ ${total}`;
            },
          },
          {
            Header: 'Spent',
            accessor: 'spentMonth1',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.spentMonth1 + sum,
                    0
                  ),
                [info.rows]
              );
              return `$ ${total}`;
            },
          },
          {
            Header: 'Balance',
            accessor: 'balanceMonth1',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.balanceMonth1 + sum,
                    0
                  ),
                [info.rows]
              );
              return `$ ${total}`;
            },
          },
        ],
      },
      {
        Header: 'NOVEMBER 2021',
        Footer: '',
        columns: [
          {
            Header: 'Budget',
            accessor: 'budgetMonth2',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.budgetMonth2 + sum,
                    0
                  ),
                [info.rows]
              );
              return `$ ${total}`;
            },
          },
          {
            Header: 'Spent',
            accessor: 'spentMonth2',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.spentMonth2 + sum,
                    0
                  ),
                [info.rows]
              );
              return `$ ${total}`;
            },
          },
          {
            Header: 'Balance',
            accessor: 'balanceMonth2',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.balanceMonth2 + sum,
                    0
                  ),
                [info.rows]
              );
              return `$ ${total}`;
            },
          },
        ],
      },
      {
        Header: 'DECEMBER 2021',
        Footer: '',
        columns: [
          {
            Header: 'Budget',
            accessor: 'budgetMonth3',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.budgetMonth3 + sum,
                    0
                  ),
                [info.rows]
              );
              return `$ ${total}`;
            },
          },
          {
            Header: 'Spent',
            accessor: 'spentMonth3',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.spentMonth3 + sum,
                    0
                  ),
                [info.rows]
              );
              return `$ ${total}`;
            },
          },
          {
            Header: 'Balance',
            accessor: 'balanceMonth3',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.balanceMonth3 + sum,
                    0
                  ),
                [info.rows]
              );
              return `$ ${total}`;
            },
          },
        ],
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable(
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
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={[
                    'p-2',
                    index === 0 ? '' : 'border-2 border-gray-light',
                  ].join(' ')}
                >
                  {column.render('Header')}

                  <span>
                    {column.canSort
                      ? column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ' ⏺'
                      : ''}
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
                      className='py-2 px-4 border-2 border-gray-light text-left'
                    >
                      $ {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((group) => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map((column) => {
                return (
                  <td {...column.getFooterProps()}>
                    {column.render('Footer')}
                  </td>
                );
              })}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
