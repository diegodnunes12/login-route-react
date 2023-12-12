import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHighLight } from "./styles";
import { Button } from "../../components/Button";

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighLight>Code</TitleHighLight> your global future now!
                    </Title>
                    <TextContent>
                        Rule the technologies used by the most innovative companies in the world and face your new professional challenge, evolving in community with the best experts.
                    </TextContent>
                    <Button title="Start now" variant="primary" onClick={() => null} />
                </div>
            </Container>
        </>
    )
}

export { Home };