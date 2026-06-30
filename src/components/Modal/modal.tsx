import { createPortal } from 'react-dom';

function Modal({children,title}:Modal.IModalProps){
    
    return createPortal(
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
            <div className="modal-window">
                <header className="modal-header">
                    <h2 id="modal-title">{title}</h2>
                    <button className="modal-close" aria-label="Закрыть">×</button>
                </header>
                <section id="modal-desc" className="modal-body">
                    {children} 
                </section>
            </div>
        </div>,
        document.getElementById("modal") as HTMLElement
    );
}


export default Modal;