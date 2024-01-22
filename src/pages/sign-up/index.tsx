import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { A, H1, H2, Main, P, Form, Section } from './styles';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AccountBoxSVGIcon, EmailSVGIcon, LockSVGIcon } from '@react-md/material-icons';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

const schema = yup
  .object({
    fullName: yup.string().min(5, "Min caracter is 5").required("This field is required"),
    email: yup.string().min(10, "Min caracter is 10").email("Email invalid").required("This field is required"),
    password: yup.string().min(6, "Min caracter is 6").required("This field is required"),
  })
  .required();


const Signup = () => {
  const navigate = useNavigate();

  const {handleSubmit, control, formState: { errors, isValid }} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    }
  });
  
  const handleSubmitForm = async (form: any) => {
    try {
      if(isValid) {
        const { data } = await api.post(`/users`, form);

        if(data?.id) {
          navigate("/feed");
        }
      }
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <>
      <Header />
      <Main>
        <Section>
          <H1>
            The platform for you to learn from experts, master the main technologies and enter the most desired companies faster.
          </H1>
        </Section>
        <Section>
          <H2>Start now free</H2>
          <P>Create your account and make the change.</P>
          <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <Input type="text" name="fullName" placeholder="Full Name" control={control} leftIcon={<AccountBoxSVGIcon />} errorMessage={errors?.fullName?.message} />
            <Input type="email" name="email" placeholder="E-mail" control={control} leftIcon={<EmailSVGIcon />} errorMessage={errors?.email?.message} />
            <Input type="password" name="password" placeholder="Password" control={control} leftIcon={<LockSVGIcon />} errorMessage={errors?.password?.message} />
            <Button title="Create my free account" type="submit" />
          </Form>
          <P>already have an account <A href="/login">Log in</A>.</P>
        </Section>
      </Main>
    </>
  )
}

export { Signup };
