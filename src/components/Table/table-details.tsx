import Table from "./table"
import { ModalDetailInfo } from "@components/Modal";
import { IconClock } from "@tabler/icons-react";

function TableDetailRow({status,date,serialNumber,partia,typeDetail,recovery,camera}:Table.ITableDetailItem){
    let colorStatus = "green";
    if(status<=33){
        colorStatus ="red"; 
    }else if(status<= 66){
        colorStatus = "yellow";
    }
    const dt =  new Date(date)
    const yy = String(dt.getFullYear()).slice(-2);    
    const mm = String(dt.getMonth() + 1).padStart(2, '0'); 
    const dd = String(dt.getDate()).padStart(2, '0');     
    return [
        <IconClock color={colorStatus}/>,
       `${yy}.${mm}.${dd}`,
        serialNumber,
        partia,
        typeDetail,
        recovery,
        camera,
        <ModalDetailInfo/>
    ];
}
function TableDetails({items,...props}:Table.ITableDetailProps){

    return  <Table header={[
                {text:"Статус"},
                {text:"Дата"},
                {text:"Серийный номер"},
                {text:"Партия"},
                {text:"Тип"},
                {text:"Востановление"},
                {text:"Камера"},
                {text:"Действие"}
            ]} 
            body={items.map(item=>TableDetailRow(item))}
            {...props}/>
}


export default TableDetails;