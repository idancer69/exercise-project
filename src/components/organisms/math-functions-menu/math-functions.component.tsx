import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/button/button.component';
import './math.functions.styles.scss';

const MathFunctions: React.FC = () => {
    return (
        <>
            <h2>Funkcje matematyczne</h2>
            <div className='functions-container'>
                <Link to="/"><Button className='function-button' label="⬅" /></Link>
                <Link to="/math/addition"><Button className='function-button' label="Dodawanie" /></Link>
                <Link to="/math/subtraction"><Button className='function-button' label="Odejmowanie" /></Link>
                <Link to="/math/multiplication"><Button className='function-button' label="Mnożenie" /></Link>
                <Link to="/math/division"><Button className='function-button' label="Dzielenie" /></Link>
                <Link to="/math/prime-check"><Button className='function-button' label="Czy liczba jest 'pierwszą'?" /></Link>
                <Link to="/math/factorial"><Button className='function-button' label="Silnia" /></Link>
                <Link to="/math/fibonacci"><Button className='function-button' label="Znajdź n-ty element ciągu Fibonacciego" /></Link>
                <Link to="/math/vowel-count"><Button className='function-button' label="Oblicz ilość samogłosek w wyrazie" /></Link>
            </div>
        </>
    );
}

export default MathFunctions;

