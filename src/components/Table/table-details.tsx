import Table from "./table";
import { ModalDetailInfo } from "@components/Modal";
import { IconClock } from "@tabler/icons-react";
import { useState, useMemo } from "react";

function TableDetailRow({ status, date, serialNumber, partia, typeDetail, recovery, camera }: Table.ITableDetailItem) {
  let colorStatus = "green";
  if (status <= 33) {
    colorStatus = "red";
  } else if (status <= 66) {
    colorStatus = "yellow";
  }
  return (
    <tr>
      <td><IconClock color={colorStatus} /></td>
      <td>{date}</td>
      <td>{serialNumber}</td>
      <td>{partia}</td>
      <td>{typeDetail}</td>
      <td>{recovery}</td>
      <td>{camera}</td>
      <td><ModalDetailInfo /></td>
    </tr>
  );
}

function TableDetails({ items, ...props }: Table.ITableDetailProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Table.ITableDetailItem;
    direction: 'asc' | 'desc';
  } | null>(null);

  const requestSort = (key: keyof Table.ITableDetailItem) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedItems = useMemo(() => {
    if (!sortConfig) return items;
    const sorted = [...items];
    const { key, direction } = sortConfig;
    sorted.sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];
      if (aValue < bValue) return direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [items, sortConfig]);

  const headerConfig = [
    { text: "Статус", sortKey: "status" },
    { text: "Дата", sortKey: "date" },
    { text: "Серийный номер", sortKey: "serialNumber" },
    { text: "Партия", sortKey: "partia" },
    { text: "Тип", sortKey: "typeDetail" },
    { text: "Восстановление", sortKey: "recovery" },
    { text: "Камера", sortKey: "camera" },
    { text: "Действие" }, 
  ];

  const header = headerConfig.map((col) => {
    if (col.sortKey) {
      const isActive = sortConfig && sortConfig.key === col.sortKey;
      return {
        text: col.text,
        sort: () => requestSort(col.sortKey as keyof Table.ITableDetailItem),
        sortDirection: isActive ? sortConfig.direction : undefined,
      };
    }
    return { text: col.text };
  });

  return (
    <Table
      header={header}
      body={sortedItems.map((item, key) => (
        <TableDetailRow key={key} {...item} />
      ))}
      {...props}
    />
  );
}

export default TableDetails;