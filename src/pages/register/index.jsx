import React from "react";
import { MdEmail, MdLock, MdOutlinePermIdentity } from "react-icons/md";
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
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/input";
import Button from "../../components/button";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("email não é valido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "no minimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();



const Register = () => {
const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

const onSubmit = async (formData) =>{
  try{
    const {data} = await api.post("users",formData
    );
    if (data) {
      navigate("/login");
      return;
    }

    alert("Dados inválidos");
    
  }catch(e){
    alert("Houve um erro tente novamente")
  }
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
            <TitleRegister>Comece agora gratís</TitleRegister>
            <SubTitleRegister>
              Crie sua conta e make the change_
            </SubTitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
              placeholder="Nome completo"
              leftIcon={<MdOutlinePermIdentity/>}
              name="name"
              control={control}
              errorMessage={errors?.name?.message}
              />

              <Input
              placeholder="E-mail"
              leftIcon={<MdEmail/>}
              name="email"
              control={control}
              errorMessage={errors?.email?.message}
              />

             <Input
             type="password"
             placeholder="Senha"
             leftIcon={<MdLock/>}
             name="password"
             control={control}
             errorMessage={errors?.password?.message}
             />
              <Button title="Cadastrar" variant="secondary" type="submit"/>
            </form>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Register;
