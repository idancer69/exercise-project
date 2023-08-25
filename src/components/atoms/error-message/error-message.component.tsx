import React from 'react';
import './error-message.styles.scss';

type ErrorMessageProps = {
    message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return <div className="error-message">{message}</div>;
}

export default ErrorMessage;
