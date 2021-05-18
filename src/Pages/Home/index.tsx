import React from 'react';
import { Container, GridContent, Menu, ContentArea, TitleArea, FooterArea } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Menu>Menu</Menu>
      <GridContent>
        <TitleArea>
          Titulo
        </TitleArea>
        <ContentArea>
          Conteudo
        </ContentArea>
        <FooterArea>
          footer
        </FooterArea>
      </GridContent>
    </Container>
  );
}

export default Home;
