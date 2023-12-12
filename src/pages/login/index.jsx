import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, TitleLogin, SubtileLogin, Title } from "./styles";
import { EmailSVGIcon, LockSVGIcon } from '@react-md/material-icons'

const Login = () => {
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
                            <Input placeholder="Email" type="email" leftIcon={<EmailSVGIcon />} />
                            <Input placeholder="Password" type="password" leftIcon={<LockSVGIcon />} />
                        </form>
                    </div>
                </section>
            </Container>            
        </>
    )
}

export { Login };