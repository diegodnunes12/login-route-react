import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    
    padding: 1rem 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    background-color: #2d2d37;
    width: 175px;
    height: 30px;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-style: normal;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-style: normal;
    line-height: 25px;
    color: #fff;
    text-decoration: none;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: solid 2px #fff;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #fff;
`

export const Span = styled.span`
    margin-left: 10px;
    cursor: pointer;
`