import React from 'react';
import StyledButton from './button.styles';

type ButtonProps = {
    label?: string;
    onClick?: () => void;
    className?: string;
    variant?: "default" | "square";
};

const BaseButton: React.FC<ButtonProps> = ({ label, onClick, className, variant = "default", children, ...props }) => {
    return (
        <StyledButton variant={variant} className={className} onClick={onClick} {...props}>
             {label ? label : children}
        </StyledButton>
    )
}


export default BaseButton;
