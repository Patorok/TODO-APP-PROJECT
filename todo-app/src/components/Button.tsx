interface ButtonProps {
    children: string;
    color?: string;
    onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button type='button' className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button