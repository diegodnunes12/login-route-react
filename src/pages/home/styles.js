import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 420px;

    background: linear-gradient(99.06deg, rgb(0, 0, 0) 45.8%, rgba(0, 0, 0, 0) 90.54%) center center / cover no-repeat, url("https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png");
    background-position: center center;
    padding: 1rem 0;

    div {
        max-width: 80%;
        padding: 1rem;
        margin: 0 auto;
    }
`

/* export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: red;
    height: 300px;

    background-position: center center;
    padding: 1rem;
    linear-gradient(99.06deg, rgb(0, 0, 0) 45.8%, rgba(0, 0, 0, 0) 90.54%) center center / cover no-repeat, url("https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png")
` */

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`

export const TitleHighLight = styled.span`
    color: #e41050;
`

export const TextContent = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #fff;
`