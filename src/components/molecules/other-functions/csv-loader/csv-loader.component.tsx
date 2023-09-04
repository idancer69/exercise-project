import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseButton from '../../../atoms/button/button.component';
import { TextField, Paper, Typography, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CsvDisplay from './csv-display.component';
import ResultDisplay from '../../../atoms/result-display/result-display.component';
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
        <Paper elevation={3} sx={{ p: 4, width: '80vw', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: '10px', backgroundColor: '#CFEDDB'}}>
            <BaseButton component={Link} to="/other">
                <ArrowBackIosIcon />
            </BaseButton>
            <Typography variant="h6" sx={{ mt: 2 }}>
                Wczytaj plik CSV
            </Typography>
            <TextField type="file" onChange={handleFileChange} accept=".csv" sx={{ mt: 2 }} fullWidth />
            <BaseButton onClick={loadSampleFile} label='Wczytaj przykładowy plik CSV' sx={{ mt: 2 }}/>
            <Box mt={3} width="100%" border={1} borderColor="divider" p={2}>
                {errorMessage && <ResultDisplay result={errorMessage} severity="error" />}
                <CsvDisplay data={data} />
            </Box>
        </Paper>
    );
}

export default CsvLoader;
