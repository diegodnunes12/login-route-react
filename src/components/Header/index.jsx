import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, Wrapper } from "./styles";
import { Button } from "../Button";
import logo from "../../assets/dio.svg";

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Dio's logo" />
                    <BuscarInputContainer>
                        <Input placeholder="Search" />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight>Home</MenuRight>
                    <Button title="Login"></Button>
                    <Button title="Logon"></Button>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };