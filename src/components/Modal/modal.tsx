import styles from "./modal.module.css"
import { useState, useEffect } from "react";
import { createPortal } from 'react-dom';
import { IconXFilled, IconInfoCircleFilled } from '@tabler/icons-react';

function Modal({children,iconTitle,title,isOpen,onClose}:Modal.IModalProps){
    const [isClosing, setIsClosing] = useState(false);

    const onCloseHandler = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false); 
        }, 300);
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onCloseHandler();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onCloseHandler]);

    if (!isOpen) return null;
    return createPortal(
        <div  
                className={`${styles['modal-overlay']} ${isClosing ? styles["modal-overlay--closing"] : ''}`} 
                role="dialog" 
                aria-modal="true" 
                aria-labelledby="modal-title" 
                aria-describedby="modal-desc"
                onClick={onCloseHandler}
                >
            <div    className={styles['modal-window']} 
                    onClick={(e)=>e.stopPropagation()}>
                <header className={styles["modal-header"]}>
                        <div className={styles["modal-title"]}>
                            {iconTitle?iconTitle:<IconInfoCircleFilled  size={48} />}
                            <h2>
                                {title}
                            </h2>
                        </div>
                        <IconXFilled    className={styles["modal-cross"]} 
                                        aria-label="Close" 
                                        size={24}
                                        onClick={onCloseHandler} />
         
                </header>
                <section id="modal-desc" className={styles["modal-body"]}>
                    {children} 
                </section>
            </div>
        </div>,
        document.getElementById("modal") as HTMLElement
    );
}


export default Modal;