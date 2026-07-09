import { useState } from "react";
import { IconPencil,
         IconFileTypography,
        IconDialpad,
        IconCube,
        IconProgressHelp,
        IconUserFilled,
        IconClock,
        IconTruckLoading,
        IconArrowsTransferUpDown   
} from '@tabler/icons-react';
import { Button } from "@components/Button";
import ModalInfo from "./modal-info";
import { List } from "../../List";
import { Select } from "@components/Select";

const listSidebar:Array<List.IListItem> = [
    {text:"Тип",icon:<IconFileTypography/>},
    {text:"Серийный номер",icon:<IconDialpad/>},
    {text:"Номер партии", icon:<IconCube/>},
    {text:"Статус",icon:<IconProgressHelp/>},
    {text:"Отсортирован",icon:<IconUserFilled/>},
    {text:"Склад",icon:<IconTruckLoading/>},
    {text:"Дата производства",icon:<IconClock/>},
    {text:"Распределен в ",icon:<IconArrowsTransferUpDown/>}
];

function BodyDetailInfo(){
    return <>
            <List   style={{width:"80%"}} 
                    items={new Array(7).fill({text:"1".repeat(100)})}/>
            <Select style={{width:"50%"}} 
                    options={[{name:"не выбран",value:"не выбран"}]}/>
            </>
}
function ModalDetailInfo(){
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={()=>setIsOpen(true)}>
            <IconPencil  />
        </Button>
        <ModalInfo  title="Информация о детали" 
                    isOpen={isOpen} 
                    onClose={()=>setIsOpen(false)}
                    sidebar={<List isIcon items={listSidebar}/>}
                    body={<BodyDetailInfo/>}
                    action={<Button>Сохраннить</Button>}
                    />
    </>
}


export default ModalDetailInfo;