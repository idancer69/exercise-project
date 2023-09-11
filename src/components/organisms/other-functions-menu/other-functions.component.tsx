import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import BaseButton from '../../atoms/button/button.component';


const OtherFunctions: React.FC = () => {
    return (
        <Grid container spacing={2} sx={{ width: '80vw' }}>
            <Grid item xs={12} justifyContent="center" alignItems="center" display='flex'>
                <Typography variant='h4' color="#F5FFFA">Funkcje asynchroniczne</Typography>
            </Grid>
            <Grid item xs={6}>
                <BaseButton component={Link} to="/" customvariant='square' >
                    <ArrowBackIosIcon />
                </BaseButton>
            </Grid>
            <Grid item xs={6}>
                <BaseButton component={Link} to="/other/csv-loader" customvariant='square' label='Czytnik pliku CSV' />
            </Grid>
            <Grid item xs={6}>
                <BaseButton component={Link} to="/other/api-data-fetcher" customvariant='square' label='API Fetcher' />
            </Grid>
            <Grid item xs={6}>
                <BaseButton component={Link} to="/other/delay" customvariant='square' label='Delay' />
            </Grid>
        </Grid>
    );
}

export default OtherFunctions;
