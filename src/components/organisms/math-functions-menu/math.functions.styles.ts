import styled from '@emotion/styled';
import StyledButton from '../../atoms/button/button.styles';

export const FunctionContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const FunctionButton = styled(StyledButton)`
    width: 180px;
    height: 180px;
    font-size: .9em;
`;