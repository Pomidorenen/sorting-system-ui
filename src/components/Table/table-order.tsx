import Table from "./table"
import { useState, useMemo } from "react";
import { List } from "@components/List";
import { ProgresbarRing } from "@components/Progresbar";
import { ModalDesc, ModalOrderInfo } from "@components/Modal";
import { Button } from "@components/Button";

function TableOrdersRow({ priority, nameCompany, notes, compound, price, status }: Table.ITableOrderItem) {
  const [isOpen, setOpen] = useState(false);
  let statusValue = 0;
  switch (status) {
    case 'pending':
      statusValue = 10;
      break;
    case 'in_production':
      statusValue = 50;
      break;
    case 'sorting':
      statusValue = 80;
      break;
    case 'completed':
      statusValue = 100;
      break;
    case 'canceled':
      statusValue = 0;
      break;
  }

  return (
    <tr>
      <td>{String(priority)}</td>
      <td>{nameCompany}</td>
      <td>{notes}</td>
      <td>
        <Button onClick={() => setOpen(true)}>Подробнее</Button>
        <ModalDesc title="Состав" isOpen={isOpen} onClose={() => setOpen(false)}>
          <List items={compound.map(text => ({ text }))} />
        </ModalDesc>
      </td>
      <td>{String(price)} р</td>
      <td>
        <ModalOrderInfo />
      </td>
      <td>
        <ProgresbarRing strokeWidth={10} maxValue={100} value={statusValue} />
      </td>
    </tr>
  );
}
function TableOrders({ items, ...props }: Table.ITableOrderProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Table.ITableOrderItem;
    direction: 'asc' | 'desc';
  } | null>(null);

  const requestSort = (key: keyof Table.ITableOrderItem) => {
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

  const header = [
    { text: "Приоритет", sort: () => requestSort('priority') },
    { text: "Название организации", sort: () => requestSort('nameCompany') },
    { text: "Заметки", sort: () => requestSort('notes') },
    { text: "Состав" },
    { text: "Цена", sort: () => requestSort('price') },
    { text: "Действие" }, 
    { text: "Статус", sort: () => requestSort('status') },
  ];

  const headerWithDirection = header.map((col, index) => {
    if (col.sort && sortConfig && sortConfig.key === 'priority' && index === 0) {
      return { ...col, sortDirection: sortConfig.direction };
    }
    if (col.sort && sortConfig && sortConfig.key === 'nameCompany' && index === 1) {
      return { ...col, sortDirection: sortConfig.direction };
    }
    if (col.sort && sortConfig && sortConfig.key === 'notes' && index === 2) {
      return { ...col, sortDirection: sortConfig.direction };
    }
    if (col.sort && sortConfig && sortConfig.key === 'price' && index === 4) {
      return { ...col, sortDirection: sortConfig.direction };
    }
    if (col.sort && sortConfig && sortConfig.key === 'status' && index === 6) {
      return { ...col, sortDirection: sortConfig.direction };
    }
    return col;
  });

  return (
    <Table
      header={headerWithDirection}
      body={sortedItems.map((item, index) => (
        <TableOrdersRow key={index} {...item} />
      ))}
      {...props}
    />
  );
}

export default TableOrders;