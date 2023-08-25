import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../atoms/button/button.component';

const CsvLoader: React.FC = () => {
    const [data, setData] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (evt) {
            const result = (evt.target as FileReader).result as string;
            setData(result.split('\n'));
        };
        reader.readAsText(file);
    }

    const loadSampleFile = async () => {
        try {
            const response = await fetch("../../../src/assets/Catalog_v2.csv");
            const text = await response.text();
            setData(text.split('\n'));
        } catch (error) {
            console.error("Błąd podczas wczytywania pliku:", error);
        }
    }

    return (
        <div className="fetch-container">
            <Link to="/other"><Button className='function-button' label="⬅" /></Link>
            <input type="file" onChange={handleFileChange} />
            <Button onClick={loadSampleFile} label="Wczytaj przykładowy plik CSV" />
            <ul>
                {data.map((row, index) => <li key={index}>{row}</li>)}
            </ul>
        </div>
    );
}

export default CsvLoader;
