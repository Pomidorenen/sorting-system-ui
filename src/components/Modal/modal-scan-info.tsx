import { useState } from "react";
import { IconScan } from '@tabler/icons-react';
import { Button } from "@components/Button";
import ModalInfo from "./modal-info";
import { List } from "@components/List";


const listSidebar:Array<List.IListItem> = [
    {text:"Тип"},
    {text:"Серийный номер"},
    {text:"Номер партии"},
    {text:"Статус"},
    {text:"Отсортирован"},
    {text:"Склад"},
    {text:"Дата производства"},
    {text:"Распределен в "}
];

function ModalScanInfo(){
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={()=>setIsOpen(true)}>
            <IconScan />
        </Button>
        <ModalInfo  title="Scan" 
                    isOpen={isOpen} 
                    onClose={()=>setIsOpen(false)}
                    sidebar={<List isIcon items={listSidebar}/>}
                    body={<List style={{width:"100%"}} items={new Array(8).fill({text:"1".repeat(100),
                    })}/>}
                    action={<><Button>Отменить</Button><Button>Сохраннить</Button></>}
                    />
    </>
}


export default ModalScanInfo;