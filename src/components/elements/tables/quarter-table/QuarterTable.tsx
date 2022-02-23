import { useMemo } from 'react';
import { useTable, useGroupBy, useExpanded, useSortBy } from 'react-table';
import Trend from 'react-trend';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { quarterCategoryI } from '@redux/money/types';
import { toLastQuarterTable } from '@components/utils';

export interface QuarterTableProps {
  lastQuarter: quarterCategoryI[];
  months: string[];
  budgetLabel: string;
  spentLabel: string;
  balanceLabel: string;
  categoryLabel: string;
  trendLabel: string;
}

export const QuarterTable = ({
  lastQuarter,
  months,
  budgetLabel,
  spentLabel,
  balanceLabel,
  categoryLabel,
  trendLabel,
}: QuarterTableProps) => {
  const data = useMemo(() => [...toLastQuarterTable(lastQuarter)], []);
  const columns = useMemo(
    () => [
      {
        Header: categoryLabel,
        accessor: 'category',
        Footer: 'Total',
      },
      {
        Header: trendLabel,
        accessor: (info) => {
          const { spentMonth0, spentMonth1, spentMonth2 } = info;
          return (
            <Trend
              data={[spentMonth0, spentMonth1, spentMonth2]}
              stroke='purple'
              strokeWidth={3}
              className='w-16'
            />
          );
        },
        Footer: '',
      },
      {
        Header: months[0],
        Footer: '',
        columns: [
          {
            Header: budgetLabel,
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
            Header: spentLabel,
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
            Header: balanceLabel,
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
            Header: budgetLabel,
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
            Header: spentLabel,
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
            Header: balanceLabel,
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
            Header: budgetLabel,
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
            Header: spentLabel,
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
            Header: balanceLabel,
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
    [months, budgetLabel, spentLabel, balanceLabel, categoryLabel, trendLabel]
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
    <table {...getTableProps()} className='table-fixed block'>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={[
                  'p-1',
                  index <= 1 ? '' : 'border border-gray-light',
                ].join(' ')}
              >
                <div className='flex items-center justify-center'>
                  <h3 className='text-purple-darker'>
                    {column.render('Header')}
                  </h3>

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
              {row.cells.map((cell, i) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className='py-1 px-1 border border-gray-light text-left'
                  >
                    {i >= 2 ? '$' : ''} {cell.render('Cell')}
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
