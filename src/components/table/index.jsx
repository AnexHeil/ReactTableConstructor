import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

const Table = ({ rows, columns }) => {
  const [sort, setSort] = useState({ sortField: 'name', sortDirection: 1 });

  const sortedRows = rows.sort((a, b) => a[sort.sortField] > b[sort.sortField] ? sort.sortDirection : -sort.sortDirection);

  const icon = sort.sortDirection === 1 ? faSortUp : faSortDown;

  return (
    <table className='table-common'>
      <tr>
        {columns.map(col => {
          return col.sortable ? <th name={col.key} className='column-sortable' key={col.key} onClick={() => {
            const isCurrentField = sort.sortField === col.key;
            setSort(isCurrentField ? { ...sort, sortDirection: -sort.sortDirection } : { sortField: col.key, sortDirection: 1 });
          }}>
            {col.name} {sort.sortField === col.key ? <FontAwesomeIcon icon={icon} /> : ''}
          </th> : <th key={col.key}>{col.name}</th>
        })}
      </tr>
      <tbody>
        {sortedRows.map(row => <tr>
          {columns.map(col => <td>
            {col.formatter ? col.formatter({ key: col.key, row }) : row[col.key]}
          </td>)}
        </tr>)}
      </tbody>
    </table>
  )
};

export default Table;