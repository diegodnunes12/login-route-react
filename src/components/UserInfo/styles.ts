import styled from "styled-components";
import { IUserInfoStyled } from "./types";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    margin-top: 20px;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #fff;
    margin-right: 12px;
`

export const NameText = styled.section`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
    margin-bottom: 10px;
`

export const Progress = styled.section<IUserInfoStyled>`
    width: 180px;
    height: 6px;
    background-color: #fff;
    border-radius: 3px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percent}) => percent}%;
        height: 6px;
        border-radius: 3px;
        background-color: #7f28b5;
    }
`