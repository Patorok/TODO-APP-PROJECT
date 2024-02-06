import './Card.css';

interface CardProps {
    checkbox?: any;
    children?: React.ReactNode;
    taskDesc: string;
    taskTitle: string;
    isDone?: string;
    lineThrough?: string;
}

const Card = ({ taskTitle, taskDesc, checkbox, children, isDone, lineThrough }: CardProps) => {
    return (
        <>
            <div className="col-12 p-4 pt-0">
                <div className={"card shadow rounded-2 " + isDone}>
                    <div className="card-body rounded-2 d-flex align-items-center justify-content-between">
                        {checkbox}
                        <div>
                            <h5 className="card-title fw-bold"><span className={lineThrough}>{taskTitle}</span></h5>
                            <p className="card-text text-justify"><span className={lineThrough}>{taskDesc}</span></p>
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