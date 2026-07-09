import styles from "../modal.module.css";
import {Modal} from "@components/Modal";

function ModalDesc({children,isOpen,onClose,className,title="Описание"}:Modal.IModalProps){

    return <Modal className={[styles["modal-desc"],className].join(" ")} title={title} isOpen={isOpen} onClose={onClose}>
        <div className={styles["modal-desc-body"]}>
            {children}
        </div>
    </Modal>;
}

export default ModalDesc;