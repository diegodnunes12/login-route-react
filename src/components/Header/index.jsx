import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from "./styles";
import { Button } from "../Button";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/dio.svg";

const Header = ({auth}) => {

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

    const handleClickNavigateFeed = () => {
        navigate('/feed')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    
                    { auth ? (
                        <>
                            <img src={logo} alt="Dio's logo" onClick={handleClickNavigateFeed} />

                            <BuscarInputContainer>
                            <Input placeholder="Search" />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : (
                        <>
                            <img src={logo} alt="Dio's logo" onClick={handleClickNavigateHome} />
                        </>
                    ) }
                </Row>
                <Row>
                    { auth ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/6638272" />
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