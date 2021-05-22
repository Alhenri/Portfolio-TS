import React from 'react'
import {Container, TextArea, ImageArea} from './styles'
import data from './data/about_me.json'

const AboutMe: React.FC = () => {
  return (
    <Container>
      <ImageArea>
        <img src="" alt="" />
      </ImageArea>
      <TextArea>
        {data.map(text => <p>{text}</p>)}
      </TextArea>
    </Container>
  )
}

export default AboutMe;