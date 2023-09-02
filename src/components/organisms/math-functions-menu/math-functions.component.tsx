import React from 'react';
import { Link } from 'react-router-dom';
import { FunctionButton, FunctionContainer } from './math.functions.styles';

const MathFunctions: React.FC = () => {
    return (
        <>
            <h2>Funkcje matematyczne</h2>
            <FunctionContainer>
                <Link to="/"><FunctionButton className='function-button'>⬅</FunctionButton></Link>
                <Link to="/math/addition"><FunctionButton className='function-button'>Dodawanie</FunctionButton></Link>
                <Link to="/math/subtraction"><FunctionButton className='function-button'>Odejmowanie</FunctionButton></Link>
                <Link to="/math/multiplication"><FunctionButton className='function-button'>Mnożenie</FunctionButton></Link>
                <Link to="/math/division"><FunctionButton className='function-button'>Dzielenie</FunctionButton></Link>
                <Link to="/math/prime-check"><FunctionButton className='function-button'>Czy liczba jest 'pierwszą'?</FunctionButton></Link>
                <Link to="/math/factorial"><FunctionButton className='function-button'>Silnia</FunctionButton></Link>
                <Link to="/math/fibonacci"><FunctionButton className='function-button'>Znajdź n-ty element ciągu Fibonacciego</FunctionButton></Link>
                <Link to="/math/vowel-count"><FunctionButton className='function-button'>Oblicz ilość samogłosek w wyrazie</FunctionButton></Link>
            </FunctionContainer>

        </>
    );
}

export default MathFunctions;

