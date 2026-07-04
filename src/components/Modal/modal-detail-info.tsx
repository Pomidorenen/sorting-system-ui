import { useState } from "react";
import { IconTable } from '@tabler/icons-react';
import { Button } from "@components/Button";
import ModalInfo from "./modal-info";
function ModalDetailInfo(){
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={()=>setIsOpen(true)}>
            <IconTable />
        </Button>
        <ModalInfo  title="Detail" 
                    isOpen={isOpen} 
                    onClose={()=>setIsOpen(false)}
                    body={<div>asd</div>}
                    sidebar={<div>asda</div>}
                    action={<Button>Сохраннить</Button>}
                    />
    </>
}


export default ModalDetailInfo;