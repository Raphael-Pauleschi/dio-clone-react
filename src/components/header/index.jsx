import React from "react";
import {
  Container,
  Row,
  Wrapper,
  SearchInputContainer,
  Menu,
  MenuRight,
  Input,
} from "./styles";
import Button from "../button";
import {dioLogo} from '../../assets/logo-dio.png'

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={dioLogo} alt="logo da dio"/>
          <SearchInputContainer>
          <Input placeholder="Buscar..."/>
          </SearchInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar"/>
          <Button title="Cadastrar"/>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
