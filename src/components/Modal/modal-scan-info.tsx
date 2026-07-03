import { useState } from "react";
import Modal from "./modal";
import { IconScan } from '@tabler/icons-react';
import { Button } from "@components/Button";

function ModalScanInfo(){
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={()=>setIsOpen(true)}>
            <IconScan />
        </Button>
        <Modal title="scan" isOpen={isOpen} onClose={()=>setIsOpen(false)}>
            modal
        </Modal>
    </>
}


export default ModalScanInfo;