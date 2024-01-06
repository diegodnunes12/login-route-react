import { css, styled } from 'styled-components';
import { IButtonStyled } from './types';

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #7f28b5;
    border-radius: 8px;
    border: solid 1px #7f28b5;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.1) 0px 5px 6px;    
    padding: 6px 16px;
    margin-left: 12px;

    &:hover {
        cursor: pointer;
        background: #932ed1;
        border: 1px solid #932ed1;
    }

    ${({variant}) => variant !== "primary" && css`
        background: transparent;
        border: solid 1px #ffffff;
    `}
`