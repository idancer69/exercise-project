import React from 'react';
import Alert from '@mui/material/Alert';

type ResultDisplayProps = {
    result: string;
    severity?: 'error' | 'info' | 'success' | 'warning';
};

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, severity = 'info' }) => {
    return (
        <Alert severity={severity}>
            {result}
        </Alert>
    );
}

export default ResultDisplay;
