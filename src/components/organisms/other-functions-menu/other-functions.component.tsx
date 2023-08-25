import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/button/button.component';


const OtherFunctions: React.FC = () => {
    return (
        <>
            <h2>Funkcje asynchroniczne</h2>
            <div className='functions-container'>
                <Link to="/"><Button className='function-button' label="⬅" /></Link>
                <Link to="/other/csv-loader"><Button className='function-button' label="Czytnik pliku CSV" /></Link>
                <Link to="/other/api-data-fetcher"><Button className='function-button' label="API Fetcher" /></Link>
                <Link to="/other/delay"><Button className='function-button' label="Delay" /></Link>
            </div>
        </>
    );
}

export default OtherFunctions;
