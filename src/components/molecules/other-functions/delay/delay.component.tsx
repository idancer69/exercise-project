import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Paper, TextField, Typography} from '@mui/material';

import BaseButton from '../../../atoms/button/button.component';
import ResultDisplay from '../../../atoms/result-display/result-display.component';

const DelayFunction: React.FC = () => {
    const [delay, setDelay] = useState<number>(0);
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const isValidNumber = (value: string) => /^[0-9]+$/.test(value);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (isValidNumber(value) || value === '') {
            setError(null);
            setDelay(Number(value));
        } else {
            setError('Wprowadź prawidłową liczbę całkowitą.');
        }
    };

    const handleDelay = async () => {
        setMessage(`Oczekiwanie...`);
        await new Promise(resolve => setTimeout(resolve, Number(delay) || 578));
        setMessage(`Opóźnienie wynosi: ${delay || 578} ms`);
    };

return (
    <Paper elevation={3} sx={{ p: 4, width: '80vw', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: '10px', backgroundColor: '#CFEDDB' }}>
        <BaseButton component={Link} to="/other">
            <ArrowBackIosIcon />
        </BaseButton>
        <TextField 
            type="number"
            value={delay.toString()}
            onChange={handleInputChange}
            placeholder="Opóźnienie w ms (domyślnie 578ms)"
            fullWidth
            variant="outlined"
            sx={{ mt: 3 }} 
        />
        {error && <ResultDisplay result={error} severity="error" />}
        <BaseButton onClick={handleDelay} label='Rozpocznij opóźnienie' sx={{ mt: 3 }} />
        <Typography variant='body1' sx={{ mt: 3 }}>
            {message}
        </Typography>
    </Paper>
);
}

export default DelayFunction;
