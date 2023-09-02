import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StyledButton from '../../../atoms/button/button.styles';
import StyledInput from '../../../atoms/input/input.styles';
import CsvDisplay from './csv-display.component';
import ErrorMessage from '../../../atoms/error-message/error-message.component';
import useCsvFileHandler from './useCsvFileHandler';

const CsvLoader: React.FC = () => {
    const [data, setData] = useState<string[]>([]);
    const { handleFileChange, errorMessage } = useCsvFileHandler({
        onData: setData,
    });

    const loadSampleFile = async () => {
        try {
            const response = await fetch("../../../src/assets/Catalog_v2.csv");
            const text = await response.text();
            setData(text.split('\n'));
        } catch (error) {
            console.error("Błąd podczas wczytywania pliku:", error);
        }
    }

    return (
        <div className="fetch-container">
            <Link to="/other"><StyledButton className='function-button'>⬅ </StyledButton></Link>
            <StyledInput type="file" onChange={handleFileChange} accept=".csv" />
            <StyledButton onClick={loadSampleFile}>Wczytaj przykładowy plik CSV</StyledButton>
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <CsvDisplay data={data} />
        </div>
    );
}

export default CsvLoader;
