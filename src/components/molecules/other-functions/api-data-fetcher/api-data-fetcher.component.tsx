import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../atoms/button/button.component';
import './api-data-fetcher.style.scss';

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
            const [data1, data2] = await Promise.all([
                fetchDataFromURL(url1, false),
                fetchDataFromURL(url2, false)
            ]);
            if (data1 && data2) {
                setData({ ...data1, ...data2 });
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


    // const fetchContinuously = () => {
    //     const intervalId = setInterval(async () => {
    //         const fetchedData = await fetchDataFromURL(url1);
    //         setData(fetchedData);
    //     }, 10000);
    //     // Czyszczenie interwału przy odmontowywaniu komponentu
    //     return () => clearInterval(intervalId);
    // }


    // useEffect(() => {
    //     fetchContinuously();
    // }, []);

    return (
        <div className='fetch-container'>
            <Link to="/other"><Button className='function-button' label="⬅" /></Link>
            <div className="upper-container">
                <div className="single-api">
                    <h2>Funkcje na pojedynczym API</h2>
                    <p>Podaj adres API:</p>
                    <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                    <div className='button-container'>
                        <button onClick={handleSampleUrlClick}>Przykładowe API*</button>
                        <button onClick={() => fetchDataFromURL(url)}>Pobierz z API</button>
                    </div>
                    <span>*Wybierz, jeśli nie znasz adresu do pobrania danych</span>
                </div>
                <div className="double-api">
                    <h2>Funkcje na dwóch API</h2>
                    <p>Podaj pierwszy adres API</p>
                    <input type="text" value={url1} onChange={(e) => setUrl1(e.target.value)} />
                    <p>Podaj drugi adres API</p>
                    <input type="text" value={url2} onChange={(e) => setUrl2(e.target.value)} />
                    <div className='button-container'>
                        <button onClick={fetchFirstReturned}>Kto pierwszy, ten lepszy</button>
                        <button onClick={fetchAndCombine}>Pobierz połączone dane</button>
                    </div>
                </div>
            </div>
            <div className="results-container">
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    );
}

export default ApiDataFetcher;
