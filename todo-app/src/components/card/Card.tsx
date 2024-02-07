import './Card.css';

interface CardProps {
    isDone?: string;
    taskDesc: string;
    taskTitle: string;
    checkbox?: boolean;
    lineThrough?: string;
    children?: React.ReactNode;

    onChange: () => void;
}

const Card: React.FC<CardProps> = ({ taskTitle, taskDesc, checkbox, children, isDone, lineThrough, onChange }) => {
    
    return (
        <>
            <div className="col-12 p-4 pt-0">
            <div className={"card shadow rounded-2 " + isDone}>
                    <div className="card-body rounded-2 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            {checkbox && (
                                <div className="form-check m-0">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        onClick={onChange}
                                    />
                                </div>
                            )}
                            <div className="ms-3">
                                <h5 className="card-title fw-bold"><span className={lineThrough}>{taskTitle}</span></h5>
                                <p className="card-text text-justify"><span className={lineThrough}>{taskDesc}</span></p>
                            </div>
                        </div>
                        <div className="buttons d-md-flex justify-content-between">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card