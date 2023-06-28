import React from "react";
import Header from "../../components/header";
import {MdEmail, MdLock} from "react-icons/md";
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

const login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas{" "}
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça o seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail/>} />
              <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button title="Entrar" variant="secondary" />
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

export default login;
