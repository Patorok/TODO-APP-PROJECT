import './Button.css';

interface ButtonProps {
    btnclass?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    targetModal?:string;
    dataBsToggle?:string;
}

const Button = ({ children, onClick, btnclass, targetModal, dataBsToggle }: ButtonProps) => {
    return (
        <>
            <button type='button' 
                className={"default btn border-0 " + btnclass} 
                onClick={onClick}
                data-bs-toggle={dataBsToggle}
                data-bs-target={`#${targetModal}`}
            >
                {children}
            </button>
        </>
    );
}

export default Button