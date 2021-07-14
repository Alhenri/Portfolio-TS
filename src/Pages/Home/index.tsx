import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import getContent from './Contents'

import { Container, GridContent, Menu, ContentArea, TitleArea, FooterArea, TitleMenu, ListMenu } from './styles';

const Home: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState('about_me');
  const [content, setContent] = useState<React.ReactElement>()
  const [currTitle, setCurrTitle] = useState('')

  useEffect(() => {
    const {title, content} = getContent(selectedContent)
    setContent(content)
    setCurrTitle(title)
  }, [selectedContent])

  return (
    <Container>
      <Menu>
        <TitleMenu>Menu</TitleMenu>
        <ListMenu>
          <Button 
            name="Sobre mim"
            color="#ffffff" 
            bg="#1d7bd37d"
            selected={selectedContent === 'about_me'}
            onClick={()=> setSelectedContent('about_me')}
            style={{margin: '5px 0'}}
          />
          <Button 
            name="Projetos"
            color="#fff" 
            bg="#1d7bd3"
            selected={selectedContent === 'projects'} 
            onClick={()=> setSelectedContent('projects')}
            style={{margin: '5px 0'}}
          />
          <Button 
            name="Qualificação"
            color="#fff" 
            bg="#1d7bd3"
            selected={selectedContent === 'qualification'}
            onClick={()=> setSelectedContent('qualification')}
            style={{margin: '5px 0'}}
          />
        </ListMenu>
      </Menu>
      <GridContent>
        <TitleArea>
          {currTitle}
        </TitleArea>
        <ContentArea>
          {content}
        </ContentArea>
        <FooterArea>
          <Footer />
        </FooterArea>
      </GridContent>
    </Container>
  );
}

export default Home;
