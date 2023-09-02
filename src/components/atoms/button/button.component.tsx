import React from 'react';
import StyledButton from './button.styles';

type ButtonProps = {
    label: string;
    onClick?: () => void;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
    return (
        <StyledButton className={className} onClick={onClick}>
            {label}
        </StyledButton>
    );
}

export default Button;
