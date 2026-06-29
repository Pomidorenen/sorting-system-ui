
import { createPortal } from 'react-dom';
function Modal({children}:Modal.IModalProps){
    
    return createPortal(
        <>{children}</>,
        document.getElementById("modal") as HTMLElement
    );
}


export default Modal;