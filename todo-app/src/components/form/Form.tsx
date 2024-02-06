import './Form.css';

interface FormProps {
    id:string;
    formIcon: any;
    btnName:string;
    btnColor:string;
    modalTitle:string;
    onClick: () => void;
    children?: React.ReactNode;
}

const Form = ({id, formIcon, btnName, btnColor, modalTitle, onClick, children}:FormProps) => {
    return (
        <>
            <div className="modal fade" id={id} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form>
                            <div className="modal-body">
                                <div className='content'>
                                    <div className="d-flex align-items-center">
                                        <img src={formIcon} alt="Loading..." />
                                        <h5 className="modal-title ms-3">{modalTitle}</h5>
                                    </div>
                                    {children}
                                </div>
                            </div>
                            <div className="modal-footer border-0">
                                <button type="reset" className="btn btn-light border text-dark m-0" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className={"btn m-0 ms-3 text-light btn-" + btnColor} onClick={onClick}>{btnName}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form