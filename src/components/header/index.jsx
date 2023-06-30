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
import { useNavigate } from "react-router-dom";

const Header = ({ autenticado }) => {
  const navigate = useNavigate()
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
            <UserPicture src="https://avatars.githubusercontent.com/u/84625141" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" onClick={() => navigate("/login")}/>
              <Button title="Cadastrar" onClick={() => navigate("/register")}/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
