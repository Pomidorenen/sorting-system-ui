import { useState } from "react";
import Modal from "./modal";
import styles from "./modal.module.css";
import { IconTag,IconNut,IconClipboard } from '@tabler/icons-react';
import { Button } from "@components/Button";

// const SidebarItems = [{
//     title: "Детали",
//     icon: <IconNut stroke={2} />,
// },{
//     title:"Заказы",
//     icon: <IconTag stroke={2} />,
// }];

function ModalOrderInfo(){
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={()=>setIsOpen(true)}>
            <IconClipboard/>
        </Button>
        <Modal title="scan" isOpen={isOpen} onClose={()=>setIsOpen(false)}>
            <div className={styles["modal-info-container"]}>
                <section className={styles["modal-info-body"]}>
                     <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                        <div  className={styles["modal-info-body__sidebar"]}>
                            пп
                        </div>
                        <div  className={styles["modal-info-content"]}>
                            content
                        </div>
                    </div>
                    <div className={styles["modal-info-action"]}>
                        <Button>Сохранить</Button>
                    </div>
                </section>
            </div>
        </Modal>
    </>
}


export default ModalOrderInfo;