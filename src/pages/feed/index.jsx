import React from "react";
import Card from "../../components/card";
import UserInfo from "../../components/userInfo";
import Header from "../../components/header";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          <UserInfo
            nome="Raphael Ferraiolo"
            image="https://avatars.githubusercontent.com/u/84625141"
            percentual={25}
          />
          <UserInfo
            nome="Raphael Ferraiolo"
            image="https://avatars.githubusercontent.com/u/84625141"
            percentual={65}
          />
          <UserInfo
            nome="Raphael Ferraiolo"
            image="https://avatars.githubusercontent.com/u/84625141"
            percentual={45}
          />
          <UserInfo
            nome="Raphael Ferraiolo"
            image="https://avatars.githubusercontent.com/u/84625141"
            percentual={72}
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
