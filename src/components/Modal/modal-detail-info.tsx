import { useState } from "react";
import Modal from "./modal";
import { IconTable } from '@tabler/icons-react';
import { Button } from "@components/Button";

function ModalDetailInfo(){
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={()=>setIsOpen(true)}>
            <IconTable />
        </Button>
        <Modal title="scan" isOpen={isOpen} onClose={()=>setIsOpen(false)}>
            modal
        </Modal>
    </>
}


export default ModalDetailInfo;