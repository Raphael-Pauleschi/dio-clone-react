import React from "react";
import {
  Container,
  Column,
  Row,
  Title,
  TitleRegister,
  SubTitleRegister,
  Wrapper,
} from "./styles";
import Header from "../../components/header";

const Register = () => {
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
            <TitleRegister>Comece agora gratís</TitleRegister>
            <SubTitleRegister>
              Crie sua conta e make the change_
            </SubTitleRegister>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Register;
