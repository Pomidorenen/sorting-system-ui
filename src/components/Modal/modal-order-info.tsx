import styles from "./modal.module.css";
import { useState } from "react";
import { IconClipboard,
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
import { List } from "@components/List";
import { Select } from "@components/Select";
import { ProgresbarRing } from "@components/Progresbar";

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

function BodyOrderInfo(){
    return <div className={styles["modal-detail-info-body"]}>
            <div style={{width:"50%"}}>
                <List
                        items={new Array(7).fill({text:"1".repeat(100)})}/>
                <Select 
                        options={[{name:"не выбран",value:"не выбран"}]}/>
            </div>
            <div className={styles["modal-detail-info-body__bar-container"]}>
                <ProgresbarRing strokeWidth={10} value={41} maxValue={50} />
                <span>41 из 50</span>
            </div>
        </div>
}

function ModalOrderInfo(){
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={()=>setIsOpen(true)}>
            <IconClipboard/>
        </Button>
        <ModalInfo  title="Информация о Заказе" 
                    isOpen={isOpen} 
                    onClose={()=>setIsOpen(false)}
                                        sidebar={<List isIcon items={listSidebar}/>}
                    body={ <BodyOrderInfo/>}

                    action={<Button>Отменить</Button>}
                    />
    </>
}


export default ModalOrderInfo;