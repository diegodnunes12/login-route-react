import React from 'react'
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'
import { InsertEmoticonSVGIcon } from '@react-md/material-icons'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://thejs.dev/static/c093da9bf79387ab6e1f1db2f9a3a8c2/dd13c/hero.jpg"></ImageBackground>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/6638272" />
                <div>
                    <h4>Diego Nunes</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto de React</h4>
                <p>Projeto feito para o curso de react na DIO... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#react #javascript</h4>
                <p>
                    <InsertEmoticonSVGIcon /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };
