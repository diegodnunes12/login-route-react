import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, TitleLogin, SubtileLogin, Title, ContainerLinks } from "./styles";
import { EmailSVGIcon, LockSVGIcon } from '@react-md/material-icons';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { IFormData } from "./types";

const schema = yup
  .object({
    email: yup.string().email("Email invalid").required("Required field"),
    password: yup.string().min(6, "Min 6 caracters").required("Required field"),
}).required();

const Login = () => {

    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode:  "onChange",
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const handleClickNavigateSignup = () => {
        navigate('/sign-up')
    }

    const sendSubmitForm = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&password=${formData.password}`);
            if(data.length === 1) {
                navigate('/feed');
            } else {
                alert("User not found");
            }
        } catch (error) {
            alert("Error");
        }
    };

    return (
        <>
            <Header auth={false} />
            <Container>
                <section>
                    <div className="content">
                        <Title>
                            The platform for you to learn from experts, master the main technologies and enter the most desired companies faster.
                        </Title>
                    </div>
                    <div className="content">
                        <TitleLogin>Are you registered yet?</TitleLogin>
                        <SubtileLogin>Log in and make the change</SubtileLogin>
                        <form onSubmit={handleSubmit(sendSubmitForm)}>
                            <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="Email" type="email" leftIcon={<EmailSVGIcon color="#ffffff" />} />
                            <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Password" type="password" leftIcon={<LockSVGIcon color="#ffffff" />} />
                            <Button title="SING IN" type="submit" />
                            <ContainerLinks>
                                <a href="#" className="pass">Forgot my password</a>
                                <a href="#" className="create" onClick={handleClickNavigateSignup}>Create an account</a>
                            </ContainerLinks>
                        </form>
                    </div>
                </section>
            </Container>            
        </>
    )
}

export { Login };