import React from "react";
import Header from "../../components/header";
import { MdEmail, MdLock } from "react-icons/md";
import {
  Container,
  Title,
  TitleLogin,
  SubTitleLogin,
  ForgotText,
  CreateText,
  Row,
  Column,
  Wrapper,
} from "./styles";
import Button from "../../components/button";
import Input from "../../components/input";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email('email não é valido').required(),
  password: yup.string().min(3, "no minimo 3 caracteres").required()
}).required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.senha}`
      );

      if (data.length && data[0].id) {
        navigate("/feed");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      // TODO: HANDLE ERROR
    }
  };

  const handleClickSignIn = () => {
    navigate('/feed')
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
                errorMessage={errors.email.message}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
                errorMessage={errors.password.message}
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button title="Entrar" variant="secondary" type="submit" onClick={()=> handleClickSignIn()}/>
            </form>
            <Row>
              <ForgotText>Esqueci a minha senha</ForgotText>
              <CreateText>Criar Conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
