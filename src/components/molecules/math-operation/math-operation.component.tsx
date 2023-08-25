import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Label from '../../atoms/label/label.component';
import Input from '../../atoms/input/input.component';
import Button from '../../atoms/button/button.component';
import ResultDisplay from '../../atoms/result-display/result-display.component';
import ErrorMessage from '../../atoms/error-message/error-message.component';
import './math-operation.styles.scss'

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
        <div className="math-operation-container">
            {/* Nawigacja */}
            <div className="navigation">
                <Link to="/math">
                    <Button label="⬅" />
                </Link>

                {operation && <Label text={operationNames[operation]} />}
            </div>

            {/* Pola wejściowe */}
            <div className="input-fields">
                {inputs.map((input, index) => (
                    <Input
                        key={index}
                        value={input}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        placeholder={inputPlaceholders ? inputPlaceholders[index] : `Liczba ${index + 1}`}
                    />
                ))}
            </div>

            {/* Akcja */}
            <div className="action-button">
                <Button label={operationLabel} onClick={handleOperation} />
            </div>

            {/* Wynik i błędy */}
            <div className="feedback">
                {result && <ResultDisplay result={result} />}
                {errorMessage && <ErrorMessage message={errorMessage} />}
            </div>
        </div>

    );
};

export default MathOperationComponent;