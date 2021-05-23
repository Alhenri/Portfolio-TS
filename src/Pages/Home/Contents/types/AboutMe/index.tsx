import React from 'react'
import {Container, TextArea, ImageArea} from './styles'
import data from './data/about_me.json'
import me_img from '../../../../../assets/me.png'

const AboutMe: React.FC = () => {
  return (
    <Container>
      <ImageArea>
        <img src={me_img} alt="me_img" />
      </ImageArea>
      <TextArea>
        {data.map(text => <p>{text}</p>)}
      </TextArea>
    </Container>
  )
}

export default AboutMe;