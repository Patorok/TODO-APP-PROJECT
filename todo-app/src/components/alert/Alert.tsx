import './Alert.css'

interface AlertProps {
    text: string;
    color: string;
    visible: boolean;
}

const Alert = ({ text, color, visible }: AlertProps) => {
    let icon;
    
    switch (color) {
        case 'success':
            icon = 'bi bi-check2-circle fs-5 text-success';
            break;
        case 'danger':
            icon = 'bi bi-x-circle fs-5 text-danger';
            break;
        case 'warning':
            icon = 'bi bi-exclamation-circle fs-5 text-warning';
            break;
        case 'primary':
            icon = 'bi bi-info-circle fs-5 text-info';
            break;
        case 'secondary':
            icon = 'bi bi-x-octagon';
            break;
        default:
            icon = '';
    }

    return (
        <>
            <div className={`alert-toast d-flex align-items-center ${color} ${visible ? 'visible' : ''}`} role="alert">
                <i className={icon}></i>
                <span className="ms-2">{text}</span>
            </div>
        </>
    );
}

export default Alert