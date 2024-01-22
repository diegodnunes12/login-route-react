import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, Span, UserPicture, Wrapper } from "./styles";
import { Button } from "../Button";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/dio.svg";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {

    const { user, handleLogout } = useAuth();

    const navigate = useNavigate();

    const handleClickNavigateLogin = () => {
        navigate('/login')
    }

    const handleClickNavigateSignup = () => {
        navigate('/sign-up')
    }

    const handleClickNavigateHome = () => {
        navigate('/')
    }

    const handleLogoutNavigate = () => {
        handleLogout();
        navigate('/');
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Dio's logo" onClick={handleClickNavigateHome} />
                    { user.id ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder="Search" />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null }
                </Row>
                <Row>
                    { user.id ? (
                        <>
                            <UserPicture src="https://avatars.githubusercontent.com/u/6638272" />
                            <Span onClick={handleLogoutNavigate}>Logout</Span>
                        </>
                    ) : (
                        <>
                            <MenuRight onClick={handleClickNavigateHome} href="#">Home</MenuRight>
                            <Button title="Sign-in" variant="secondary" onClick={handleClickNavigateLogin}></Button>
                            <Button title="Create account" onClick={handleClickNavigateSignup}></Button>
                        </>
                    ) }                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };