import styles from "./table.module.css";
function Table({ header, body, className , ...props }: Table.ITableProps) {
  return (
    <table className={`${styles.table} ${className}`.trim()} {...props}>
      <thead className={styles["table-head"]}>
        <tr>
          {header.map(({ text,sort, sortDirection }, index) => (
          <th key={index} onClick={sort} style={{ cursor: sort ? 'pointer' : 'default' }}>
              <span>{text}  {sortDirection && (sortDirection === 'asc' ? '▲' : '▼')}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles["table-body"]}>{body}</tbody>
    </table>
  );
}

export default Table;