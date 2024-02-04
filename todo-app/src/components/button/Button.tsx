import './Button.css';

interface ButtonProps {
    btnclass: string;
    onClick: () => void;
    children: React.ReactNode;
}

const Button = ({ children, onClick, btnclass }: ButtonProps) => {
    return (
        <button type='button' className={"default btn border-0 " + btnclass} onClick={onClick}>{children}</button>
    );
}

export default Button