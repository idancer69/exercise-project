import React from 'react';
import ErrorMessageStyle from './error-message.styles';

type ErrorMessageProps = {
    message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return <ErrorMessageStyle className="error-message">{message}</ErrorMessageStyle>;
}

export default ErrorMessage;
