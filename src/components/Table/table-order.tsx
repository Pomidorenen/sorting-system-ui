import Table from "./table"
import { useState } from "react";
import { List } from "@components/List";
import { ProgresbarRing } from "@components/Progresbar";
import { ModalDesc, ModalOrderInfo } from "@components/Modal";
import { Button } from "@components/Button";

function TableOrdersRow({priorety,nameCompany,notes,compound,price,status}:Table.ITableOrderItem){
    var statusValue = 0;
    switch (status){
        case 'pending': 
            statusValue = 10; 
            break;
        case 'in_production':
            statusValue = 50; 
            break;
        case 'sorting': 
            statusValue = 100; 
            break;
        case 'completed':
            statusValue = 100; 
            break;
        case 'canceled':
            statusValue = 0;
            break;
    }
    const [isOpen, setOpen] = useState(false);
    return [
        String(priorety),
        nameCompany,
        notes,
        <>
            <Button onClick={()=>setOpen(true)}>Подробнее</Button>
            <ModalDesc title="Состав" isOpen={isOpen} onClose={()=>setOpen(false)}>
                <List items={compound.map(text=>({text}))}/>
            </ModalDesc>
        </>,
        String(price)+"р",
        <ModalOrderInfo/>,
        <ProgresbarRing strokeWidth={10} maxValue={100} value={statusValue}/>
    ];
}

function TableOrders({items,...props}:Table.ITableOrderProps){

    return  <Table header={[
                {text:"Приориеит"},
                {text:"Название огранизации"},
                {text:"Заметки"},
                {text:"Состав"},
                {text:"Цена"},
                {text:"Действие"},
                {text:"статус"}
            ]} 
            body={items.map(item=>TableOrdersRow(item))}
            {...props}/>
}
export default TableOrders;