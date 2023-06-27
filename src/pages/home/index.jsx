import React from "react";
import Header from "../../components/header";
import { Container, TextContent, Title, TitleHighLight } from "./styles";
import banner from "../../assets/banner.png";
import Button from "../../components/button";

const home = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>Implemente</TitleHighLight> <br />o seu futuro
            global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começa agora"
            variant="secondary"
            onClick={() => null}
          />
        </div>
        <div>
          <img src={banner} alt="principal" />
        </div>
      </Container>
    </>
  );
};

export default home;
