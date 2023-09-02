import styled from '@emotion/styled';

export const MathOperationContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    position: relative;
`;

export const Navigation = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    position: relative;

    button {
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        font-size: .7em;
    }

    label {
        padding: 20px;
        text-align: center;
        width: 100%;
    }
`;

export const InputFields = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`;

export const Feedback = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    > div {
        padding: 10px;
        border-radius: 4px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
    }
`;
