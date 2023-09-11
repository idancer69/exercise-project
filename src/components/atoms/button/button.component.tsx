import React from 'react';

import StyledButton from './button.styles';

type ButtonProps = {
    label?: string;
    onClick?: () => void;
    className?: string;
    customvariant?: "default" | "square";
    children?: React.ReactNode;
    component?: React.ElementType;
    to?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sx?: any;
};

const BaseButton: React.FC<ButtonProps> = ({ label, onClick, className, customvariant = "default", children, ...props }) => {
    return (
        <StyledButton customvariant={customvariant} className={className} onClick={onClick} {...props}>
            {label ? label : children}
        </StyledButton>
    )
}


export default BaseButton;
