import React from "react";
import {
  Container,
  Row,
  Wrapper,
  SearchInputContainer,
  Menu,
  MenuRight,
  Input,
  UserPicture,
} from "./styles";
import Button from "../button";
import dioLogo from "../../assets/logo-dio.png";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={dioLogo} alt="logo da dio" />
          {autenticado ? (
            <>
              <SearchInputContainer>
                <Input placeholder="Buscar..." />
              </SearchInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
