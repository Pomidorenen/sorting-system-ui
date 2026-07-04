import { useState } from "react";
import { IconClipboard } from '@tabler/icons-react';
import { Button } from "@components/Button";
import ModalInfo from "./modal-info";



function ModalOrderInfo(){
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={()=>setIsOpen(true)}>
            <IconClipboard/>
        </Button>
        <ModalInfo  title="order" 
                    isOpen={isOpen} 
                    onClose={()=>setIsOpen(false)}
                    body={<div>asd</div>}
                    sidebar={<div>asda</div>}
                    action={<Button>Сохраннить</Button>}
                    />
    </>
}


export default ModalOrderInfo;