import './Modal.css';

interface ModalProps {
    id:string;
    btnName:string;
    btnColor:string;
    modalMsg:string;
    modalTitle:string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Modal = ({id, children, modalTitle, modalMsg, onClick, btnName, btnColor}: ModalProps) => {
    return (
        <>
            <div className="modal fade" id={id} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className='content d-flex'>
                                {children}
                                <div className="ms-3">
                                    <h5 className="modal-title">{modalTitle}</h5>
                                    <p className="mt-2 mb-0">{modalMsg}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-light border text-dark m-0" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className={"btn m-0 ms-3 text-light btn-" + btnColor} onClick={onClick}>{btnName}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal