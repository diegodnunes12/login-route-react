import styled from "styled-components";

export const Container = styled.main`
    width: 80%;
    height: 420px;
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
    margin: 0 auto;

    section.content {
        display: flex;
        flex-direction: column;

        &.feed {
            width: 90%;
        }
    }
`

export const Title = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    margin-top: 30px;
    color: #fff;
`

export const TitleHighLight = styled.span`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    margin-top: 30px;
    color: #9c9a9a;
`

export const TextContent = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 610px;
    margin-bottom: 20px;
    line-height: 22px;
    margin: 0.6em 0px 3em 0;

    color: #fff;
`