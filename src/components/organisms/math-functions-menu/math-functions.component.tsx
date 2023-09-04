import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import BaseButton from '../../atoms/button/button.component';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MathFunctions: React.FC = () => {
    return (
            <Grid container spacing={3} sx={{ width: '80vw'}}>
                <Grid item xs={12} justifyContent="center" alignItems="center" display='flex'>
                    <Typography variant='h4' color="#F5FFFA">Funkcje matematyczne</Typography>
                </Grid>
                <Grid item xs={4}>
                    <BaseButton variant='square' component={Link} to="/" >
                        <ArrowBackIosIcon />
                    </BaseButton>
                </Grid>
                <Grid item xs={4}>
                    <BaseButton variant='square' component={Link} to="/math/addition" label='Dodawanie'/>
                </Grid>
                <Grid item xs={4}>
                    <BaseButton variant='square' component={Link} to="/math/subtraction" label='Odejmowanie'/>
                </Grid>
                <Grid item xs={4}>
                    <BaseButton variant='square' component={Link} to="/math/multiplication" label='Mnożenie'/>
                </Grid>
                <Grid item xs={4}>
                    <BaseButton variant='square' component={Link} to="/math/division" label='Dzielenie'/>
                </Grid>
                <Grid item xs={4}>
                    <BaseButton variant='square' component={Link} to="/math/prime-check" label="Czy liczba jest 'pierwszą'?"/>
                </Grid>
                <Grid item xs={4}>
                    <BaseButton variant='square' component={Link} to="/math/factorial" label='Silnia'/>
                </Grid>
                <Grid item xs={4}>
                    <BaseButton variant='square' component={Link} to="/math/fibonacci" label='Znajdź n-ty element ciągu Fibonacciego'/>
                </Grid>
                <Grid item xs={4}>
                    <BaseButton variant='square' component={Link} to="/math/vowel-count" label='Oblicz ilość samogłosek w wyrazie'/>
                </Grid>
            </Grid>
    );
}

export default MathFunctions;
