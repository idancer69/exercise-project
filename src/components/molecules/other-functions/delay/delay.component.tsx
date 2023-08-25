import React, { useState } from 'react';
import Input from '../../../atoms/input/input.component';
import { Link } from 'react-router-dom';
import Button from '../../../atoms/button/button.component';

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
        <div className="fetch-container">
            <Link to="/other"><Button className='function-button' label="⬅" /></Link>
            <Input
                type="number"
                value={delay.toString()}
                onChange={handleInputChange}
                placeholder="Opóźnienie w ms (domyślnie 578ms)"
            />
            {error && <div className="error-message">{error}</div>}
            <button onClick={handleDelay}>Rozpocznij opóźnienie</button>
            <p>{message}</p>
        </div>
    );

}

export default DelayFunction;
