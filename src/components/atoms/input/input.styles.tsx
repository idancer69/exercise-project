import styled from '@emotion/styled';

const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
    font-size: 14px;
    width: 80%;
    margin: 20px;

    &:focus {
        border-color: #C06C84;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    }
`;

export default StyledInput;
