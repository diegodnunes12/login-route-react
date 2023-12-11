import { css, styled } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #7f28b5;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #7f28b5;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: solid 1px #7f28b5;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`