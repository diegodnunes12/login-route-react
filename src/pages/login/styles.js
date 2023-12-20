import styled from "styled-components";

export const Container = styled.main`
    max-width: 80%;
    margin: 0 auto;
    padding: 3rem;

    section {
        display: flex;         
        justify-content: space-between;

        .content {
            width: 40%;
        }
    }
`

export const Title = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    color: #fff;
    margin-top: 30px;
`

export const TitleLogin = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    line-height: 2.5em;
    color: #fff;
    margin-top: 20px;
`

export const SubtileLogin = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 610px;
    margin-bottom: 20px;
    line-height: 22px;
    margin: 0.6em 0px;

    color: #fff;
`

export const ContainerLinks = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 610px;
    margin-bottom: 20px;
    line-height: 22px;
    margin: 0.6em 0px;
    color: #fff;

    display: flex;
    gap: 15px;

    a.pass {
        color: #e6ce32;
    }

    a.create {
        color: #d73ce6;
    }
`