import React from 'react';
import StyledResultDisplay from './result-display.styles';

type ResultDisplayProps = {
    result: string;
};

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
    return <StyledResultDisplay className="result-display">{result}</StyledResultDisplay>;
}

export default ResultDisplay;
