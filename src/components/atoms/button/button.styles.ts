import { Button, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledButtonProps {
    label?: string;
    customvariant?: "default" | "square";
}

const StyledButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'variant' }) <StyledButtonProps & MuiButtonProps>` 
    // background: linear-gradient(45deg, #6C5B7B, #C06C84, #F67280);
    background: #4682AA;
    color: white;
    border: 1px solid transparent;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    /* transition: all 0.3s ease;*/
    letter-spacing: 4px;
    display: flex;
    justify-content: center;
    text-align: center; 

    /* default variant styles */
    // padding: 0.6em 1.2em;

    /* square variant styles */
    ${({ customvariant }) => customvariant === 'square' && `
        min-height: 100%;
        font-size: .9em;
    `}

    &:hover {
        box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
        background: #4682AA;
        opacity:0.9;
        border-color: #646cff;
    }

    &:focus, &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`;

export default StyledButton;
