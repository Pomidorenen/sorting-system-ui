import {Modal} from "@components/Modal";
import styles from "../modal.module.css";


function ModalInfo({action,body,sidebar,...props}:Modal.IModaInfoProps){
    return  (<Modal {...props}>
                <section className={styles["modal-info-content"]}>
                        <div  className={styles["modal-info-sidebar"]}>
                            {sidebar}
                        </div>
                        <div  className={styles["modal-info-body"]}>
                            <div className={styles["modal-info-body__desc"]}>
                                {body}
                            </div>
                            <div className={styles["modal-info-action"]}>
                                {action}
                            </div>
                        </div>
                </section>
        </Modal>);
}


export default ModalInfo;