import React from 'react';
import StyledInput from './input.styles';

type InputProps = {
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

const Input: React.FC<InputProps> = ({ type = "text", value, onChange, placeholder }) => {
    return (
        <StyledInput
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default Input;
