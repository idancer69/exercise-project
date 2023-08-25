import React from 'react';
import './result-display.styles.scss';

type ResultDisplayProps = {
    result: string;
};

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
    return <div className="result-display">{result}</div>;
}

export default ResultDisplay;
