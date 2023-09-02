import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StyledButton from '../../../atoms/button/button.styles';
import { FetchContainer, UpperContainer, ButtonContainer, ApiSection, ResultsContainer } from './api-data-fetcher.style';
import StyledInput from '../../../atoms/input/input.styles';

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

            const combinedData = {
                apiResponse1: response1,
                apiResponse2: response2
            };



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
        <FetchContainer>
            <Link to="/other"><StyledButton className='function-button'>⬅ </StyledButton></Link>
            <UpperContainer>
                <ApiSection>
                    <h2>Funkcje na pojedynczym API</h2>
                    <p>Podaj adres API:</p>
                    <StyledInput type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                    <ButtonContainer>
                        <StyledButton onClick={handleSampleUrlClick}>Przykładowe API*</StyledButton>
                        <StyledButton onClick={() => fetchDataFromURL(url)}>Pobierz z API</StyledButton>
                    </ButtonContainer>
                    <span>*Wybierz, jeśli nie znasz adresu do pobrania danych</span>
                </ApiSection>
                <ApiSection>
                    <h2>Funkcje na dwóch API</h2>
                    <p>Podaj pierwszy adres API</p>
                    <StyledInput type="text" value={url1} onChange={(e) => setUrl1(e.target.value)} />
                    <p>Podaj drugi adres API</p>
                    <StyledInput type="text" value={url2} onChange={(e) => setUrl2(e.target.value)} />
                    <ButtonContainer>
                        <StyledButton onClick={fetchFirstReturned}>Kto pierwszy, ten lepszy</StyledButton>
                        <StyledButton onClick={fetchAndCombine}>Pobierz połączone dane</StyledButton>
                    </ButtonContainer>
                </ApiSection>
            </UpperContainer>
            <ResultsContainer>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </ResultsContainer>
        </FetchContainer>

    );
}

export default ApiDataFetcher;
