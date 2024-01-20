// components/Table.tsx
import React from 'react';
import type { Column } from 'react-table';
import { useTable } from 'react-table';

interface ITableProps<IUser extends object> {
  columns: Column<IUser>[];
  data: IUser[];
  isLoading: boolean;
}

export const Table = <T extends object>({
  columns,
  data,
  isLoading,
}: ITableProps<T>) => {
  // const [expandedRows, setExpandedRows] = useState([]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // page,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: data || [],
    },
    // usePagination
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, keyHeader) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={keyHeader}>
                {headerGroup.headers.map((column, keyHeaderColumn) => (
                  <th
                    {...column.getHeaderProps()}
                    className=" p-4 text-start"
                    key={keyHeaderColumn}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows?.map((row: any, keyBody: number) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={keyBody}
                  className={keyBody % 2 ? 'bg-neutral-10' : 'bg-white'}
                >
                  {row.cells.map((cell: any, keyCell: number) => (
                    <td
                      {...cell.getCellProps()}
                      className="border-y p-4"
                      key={keyCell}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
