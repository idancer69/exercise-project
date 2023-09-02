import styled from '@emotion/styled';

export const FetchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
`;

export const UpperContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 20px;

    & > div:first-of-type {
        margin-right: 10px;
    }

    & > div:last-of-type {
        margin-left: 10px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
`;

export const ApiSection = styled.div`
    flex: 1;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
`;

export const ResultsContainer = styled.div`
    flex: 2;
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    margin: 20px;
    overflow-wrap: break-word;

    pre {
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow-x: auto;
        max-width: 100%;
        margin: 0;
        padding: 10px 20px;
    }
`;
