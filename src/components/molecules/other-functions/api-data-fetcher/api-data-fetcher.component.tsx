import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';

import BaseButton from '../../../atoms/button/button.component';

import {StyledPre} from './api-data-fetcher.style.ts'

const ApiDataFetcher: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any>(null);
    const [url, setUrl] = useState('');
    const [url1, setUrl1] = useState('');
    const [url2, setUrl2] = useState('');
    const DEFAULT_URL = 'https://jsonplaceholder.typicode.com/posts/1';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fetchDataFromURL = async (inputUrl: string = DEFAULT_URL, shouldSetState: boolean = true): Promise<any | null> => {
        try {
            const response = await fetch(inputUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch from ${inputUrl}: ${response.statusText}`);
            }
            const jsonData = await response.json();
            if (shouldSetState) {
                setData(jsonData);
            }
            return jsonData;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        return null;
    }

    const fetchFirstReturned = async () => {
        const result = await Promise.race([
            fetchDataFromURL(url1),
            fetchDataFromURL(url2)
        ]);
        if (result) {
            setData(result);
        }
    }

    const fetchAndCombine = async () => {
        try {
            const [response1, response2] = await Promise.all([
                fetchDataFromURL(url1, false),
                fetchDataFromURL(url2, false)
            ]);

            const combinedData = { apiResponse1: response1, apiResponse2: response2 };
            if (response1 && response2) {
                setData(combinedData);
            } else {
                console.error("One of the datasets is missing");
            }
        } catch (error) {
            console.error("Error in fetchAndCombine:", error);
        }
    }

    const handleSampleUrlClick = () => {
        setUrl(DEFAULT_URL);
        fetchDataFromURL();
    }

return (
    <Paper elevation={3} sx={{ p: 4, width: '80vw', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#CFEDDB' }}>
        <BaseButton component={Link} to="/other">
            <ArrowBackIosIcon />
        </BaseButton>
        <Grid container spacing={12} sx={{ pt: 3 }}>
            <Grid item xs={6} container direction="column" spacing={3} alignItems='center'>
                <Typography variant="h6">Funkcje na pojedynczym API</Typography>
                <Typography variant="body2">Podaj adres API:</Typography>
                <TextField value={url} onChange={(e) => setUrl(e.target.value)} variant="outlined" fullWidth />
                <Box display="flex" justifyContent="space-around" mt={3} gap={2}>
                    <BaseButton onClick={handleSampleUrlClick} label='Przykładowe API*'/>
                    <BaseButton onClick={() => fetchDataFromURL(url)} label='Pobierz z API'/>
                </Box>
                <Typography variant="caption">*Wybierz, jeśli nie znasz adresu do pobrania danych</Typography>
            </Grid>
                
            <Grid item xs={6} container direction="column" spacing={3} alignItems='center'>
                <Typography variant="h6">Funkcje na dwóch API</Typography>
                <Typography variant="body2">Podaj pierwszy adres API:</Typography>
                <TextField value={url1} onChange={(e) => setUrl1(e.target.value)} variant="outlined" fullWidth />
                <Typography variant="body2">Podaj drugi adres API:</Typography>
                <TextField value={url2} onChange={(e) => setUrl2(e.target.value)} variant="outlined" fullWidth />
                <Box display="flex" justifyContent="space-around" mt={3} gap={2}>
                    <BaseButton onClick={fetchFirstReturned} label='Kto pierwszy, ten lepszy'/>
                    <BaseButton onClick={fetchAndCombine} label='Pobierz połączone dane'/>
                </Box>
            </Grid>
        </Grid>
        <Box mt={3} width="100%" border={1} borderColor="divider" p={2}>
            <StyledPre>
                {JSON.stringify(data, null, 2)}
            </StyledPre>
        </Box>
    </Paper>
);
}

export default ApiDataFetcher;
