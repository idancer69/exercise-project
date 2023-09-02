import React from 'react';
import StyledLabel from './label.styles';

type LabelProps = {
    text: string;
};

const Label: React.FC<LabelProps> = ({ text }) => {
    return <StyledLabel>{text}</StyledLabel>;
}

export default Label;
