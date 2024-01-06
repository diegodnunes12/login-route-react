import { Header } from "../../components/Header";

import { Container, Title, TitleHighLight } from "./styles";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
    return (
        <>
            <Header auth={true} />
            <Container>
               <section className="content feed">
                    <Title>FEED</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
               </section>
               <section className="content">
                    <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                    <UserInfo percent={35} name="Diego Nunes" image="https://avatars.githubusercontent.com/u/6638272" />
                    <UserInfo percent={25} name="Diego Nunes" image="https://avatars.githubusercontent.com/u/6638272" />
                    <UserInfo percent={78} name="Diego Nunes" image="https://avatars.githubusercontent.com/u/6638272" />
                    <UserInfo percent={71} name="Diego Nunes" image="https://avatars.githubusercontent.com/u/6638272" />
                    <UserInfo percent={64} name="Diego Nunes" image="https://avatars.githubusercontent.com/u/6638272" />
               </section>
            </Container>
        </>
    )
}

export { Feed };