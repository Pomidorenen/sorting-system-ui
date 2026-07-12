import Table from "./table"
import { ModalDetailInfo } from "@components/Modal";
import { IconClock } from "@tabler/icons-react";
import {formatDateToYYMMDDHHMM} from "@utils/formatDate";

function TableDetailRow({status,date,serialNumber,partia,typeDetail,recovery,camera}:Table.ITableDetailItem){
    let colorStatus = "green";
    if(status<=33){
        colorStatus ="red"; 
    }else if(status<= 66){
        colorStatus = "yellow";
    }
    return (
        <tr>
            <td><IconClock color={colorStatus} /></td>
            <td>{formatDateToYYMMDDHHMM(date)}</td>
            <td>{serialNumber}</td>
            <td>{partia}</td>
            <td>{typeDetail}</td>
            <td>{recovery}</td>
            <td>{camera}</td>
            <td><ModalDetailInfo/></td>
        </tr>
    );
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
            body={items.map((item, key)=><TableDetailRow key={key} {...item}/>)}
            {...props}/>
}


export default TableDetails;