import React from 'react';
import './label.styles.scss';

type LabelProps = {
    text: string;
};

const Label: React.FC<LabelProps> = ({ text }) => {
    return <label>{text}</label>;
}

export default Label;
