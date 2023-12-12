import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, Wrapper } from "./styles";
import { Button } from "../Button";
import { Link } from 'react-router-dom';
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
                    <Button title="Sign-in" variant="secondary"></Button>
                    <Button title="Create account"></Button>
                    <Link to="/login">Login</Link>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };