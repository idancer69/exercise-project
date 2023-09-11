import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import BaseButton from '../../atoms/button/button.component';
import ResultDisplay from '../../atoms/result-display/result-display.component';


type OperationFunction = (
    inputs: string[],
    setResult: React.Dispatch<React.SetStateAction<string | null>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
) => void;

type MathOperationProps = {
    operationLabel: string;
    onOperationClick: OperationFunction;
    numberOfInputs: number;
    inputPlaceholders?: string[];
    operation: string;
};

type OperationNamesType = {
    [key: string]: string;
    addition: string;
    subtraction: string;
    division: string;
    factorial: string;
    fibonacci: string;
    multiplication: string;
    'prime-check': string;
    'vowel-count': string;
};

const operationNames: OperationNamesType = {
    addition: "Dodawanie",
    subtraction: "Odejmowanie",
    division: "Dzielenie",
    factorial: "Silnia",
    fibonacci: "Znajdź n-ty element ciągu Fibonacciego",
    multiplication: "Mnożenie",
    'prime-check': "Czy liczba jest 'pierwszą'?",
    'vowel-count': "Oblicz ilość samogłosek w wyrazie",
};

const MathOperationComponent: React.FC<MathOperationProps> = ({ operationLabel, onOperationClick, numberOfInputs, inputPlaceholders, operation }) => {
    const [inputs, setInputs] = useState<string[]>(Array(numberOfInputs).fill(''));
    const [result, setResult] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);


    const handleInputChange = (index: number, value: string) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };

    const handleOperation = () => {
        onOperationClick(inputs, setResult, setErrorMessage);
    };

    return (
        <Paper elevation={3} sx={{
            p: 4,
            width: '60vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#CFEDDB'
        }}>
            {/* Navigation */}
            <IconButton component={Link} to="/math">
                <ArrowBackIosIcon />
            </IconButton>

            {operation &&
                <Typography variant="h4" sx={{ textAlign: 'center', width: '100%', pt: 3 }}>
                    {operationNames[operation]}
                </Typography>
            }

            {/* Body */}
            <Grid container spacing={8} sx={{ pt: 3 }}>
                {inputs.map((input, index) => (
                    <Grid item xs={6} container direction="column" spacing={3} key={index}>
                        <Typography variant="body2">{inputPlaceholders ? inputPlaceholders[index] : `Liczba ${index + 1}`}</Typography>
                        <TextField
                            value={input}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                ))}
            </Grid>

            <Box display="flex" justifyContent="center" mt={3}>
                <BaseButton label={operationLabel} onClick={handleOperation} />
            </Box>

            {/* Results and Errors */}
            <Box mt={3} width="100%" border={1} borderColor="divider" p={2}>
                {result && <ResultDisplay result={result} severity="info" />}
                {errorMessage && <ResultDisplay result={errorMessage} severity="error" />}
            </Box>
        </Paper>
    );
};

export default MathOperationComponent;