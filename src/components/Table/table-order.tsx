import Table from "./table"
import { List } from "../List";
import { ProgresbarRing } from "../Progresbar";
import { ModalOrderInfo } from "../Modal";

function TableOrdersRow({priorety,nameCompany,notes,compound,price,status}:Table.ITableOrderItem){
    return [
        String(priorety),
        nameCompany,
        notes,
        <List items={compound.map(text=>({text}))}/>,
        String(price)+"р",
        <ModalOrderInfo/>,
        <ProgresbarRing strokeWidth={10} maxValue={100} value={status}/>
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