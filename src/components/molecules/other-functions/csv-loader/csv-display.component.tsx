import React from 'react';

interface Props {
    data: string[];
}

const CsvDisplay: React.FC<Props> = ({ data }) => {
    return (
        <ul>
            {data.map((row, index) => <li key={index}>{row}</li>)}
        </ul>
    );
}

export default CsvDisplay;