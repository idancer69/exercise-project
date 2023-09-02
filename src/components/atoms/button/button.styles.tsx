// Button.tsx
import styled from '@emotion/styled';

interface StyledButtonProps {
    label?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
    padding: 0.6em 1.2em;
    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    border-radius: 8px;
    background: linear-gradient(45deg, #6C5B7B, #C06C84, #F67280);
    color: white;
    border: 1px solid transparent;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    width: 30vh;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 20px;

    &:hover {
        box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
        background: linear-gradient(90deg, #6C5B7B, #C06C84, #F67280);
        border-color: #646cff;
    }

    &:focus, &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`;

export default StyledButton;
