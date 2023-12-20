import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, TitleLogin, SubtileLogin, Title, ContainerLinks } from "./styles";
import { EmailSVGIcon, LockSVGIcon } from '@react-md/material-icons'

const Login = () => {

    const navigate = useNavigate();

    const handleClickNavigateFeed = () => {
        navigate('/feed')
    }

    return (
        <>
            <Header />
            <Container>
                <section>
                    <div class="content">
                        <Title>
                            The platform for you to learn from experts, master the main technologies and enter the most desired companies faster.
                        </Title>
                    </div>
                    <div class="content">
                        <TitleLogin>Are you registered yet?</TitleLogin>
                        <SubtileLogin>Log in and make the change</SubtileLogin>
                        <form>
                            <Input placeholder="Email" type="email" leftIcon={<EmailSVGIcon color="#ffffff" />} />
                            <Input placeholder="Password" type="password" leftIcon={<LockSVGIcon color="#ffffff" />} />
                            <Button title="SING IN" onClick={handleClickNavigateFeed} />
                            <ContainerLinks>
                                <a href="#" class="pass">Forgot my password</a>
                                <a href="#" class="create">Create an account</a>
                            </ContainerLinks>
                        </form>
                    </div>
                </section>
            </Container>            
        </>
    )
}

export { Login };