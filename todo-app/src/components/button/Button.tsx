import './Button.css';

interface ButtonProps {
    btnclass?: string;
    targetModal?:string;
    dataBsToggle?:string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Button = ({ children, onClick, btnclass, targetModal, dataBsToggle }: ButtonProps) => {
    return (
        <div>
            <button type='button' 
                className={"default btn border-0 " + btnclass} 
                onClick={onClick}
                data-bs-toggle={dataBsToggle}
                data-bs-target={`#${targetModal}`}
            >
                {children}
            </button>
        </div>
    );
}

export default Button