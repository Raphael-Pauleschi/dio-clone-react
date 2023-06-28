import React from "react";
import Header from "../../components/header";
import { Container, TextContent, Title, TitleHighLight } from "./styles";
import banner from "../../assets/banner.png";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

const home = () => {
  const navigate = useNavigate;

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={banner} alt="Imagem principal do site." />
        </div>
      </Container>
    </>
  );
};

export default home;
