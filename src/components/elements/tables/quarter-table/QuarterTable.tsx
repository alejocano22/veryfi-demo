import { useMemo } from 'react';
import { useTable, useGroupBy, useExpanded, useSortBy } from 'react-table';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { quarterCategoryI } from '@redux/money/types';
import { toLastQuarterTable } from '@components/utils';

export interface QuarterTableProps {
  lastQuarter: quarterCategoryI[];
  months: string[];
}

export const QuarterTable = ({ lastQuarter, months }: QuarterTableProps) => {
  const data = useMemo(() => [...toLastQuarterTable(lastQuarter)], []);
  const columns = useMemo(
    () => [
      {
        Header: 'Category',
        accessor: 'category',
        Footer: 'Total',
      },
      {
        Header: months[0],
        Footer: '',
        columns: [
          {
            Header: 'Budget',
            accessor: 'budgetMonth0',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.budgetMonth0 + sum,
                    0
                  ),
                [info.rows]
              );
              return `$ ${total}`;
            },
          },
          {
            Header: 'Spent',
            accessor: 'spentMonth0',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.spentMonth0 + sum,
                    0
                  ),
                [info.rows]
              );
              return `$ ${total}`;
            },
          },
          {
            Header: 'Balance',
            accessor: 'balanceMonth0',
            Footer: (info) => {
              const total = useMemo(
                () =>
                  info.rows.reduce(
                    (sum, row) => row.values.balanceMonth0 + sum,
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
        Header: months[1],
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
        Header: months[2],
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
    <table {...getTableProps()} className='table-fixed'>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={[
                  'p-1',
                  index === 0 ? '' : 'border border-gray-light',
                ].join(' ')}
              >
                <div className='flex items-center justify-center'>
                  <h3>{column.render('Header')}</h3>

                  <div className='h-3 w-3 ml-2'>
                    {column.canSort ? (
                      column.isSorted ? (
                        column.isSortedDesc ? (
                          <ChevronDownIcon height={'10px'} width={'10px'} />
                        ) : (
                          <ChevronUpIcon height={'10px'} width={'10px'} />
                        )
                      ) : (
                        <></>
                      )
                    ) : (
                      ''
                    )}
                  </div>
                </div>
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
                    className='py-1 px-1 border border-gray-light text-left'
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
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              );
            })}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default QuarterTable;
