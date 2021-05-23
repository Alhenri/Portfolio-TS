import React from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'

import {Container, TextArea, ImageArea} from './styles'
import data from './data/about_me.json'
import me_img from '../../../../../assets/me.png'

const AboutMe: React.FC = () => {
  return (
    <Container>
      <ImageArea>
        <img src={me_img} alt="me_img" />
      </ImageArea>
      <div style={{width: '100%', height: '100%'}}>
        <AutoSizer>
          {({height, width}) =>
            (
              <TextArea style={{width: width, height, overflow: 'hidden auto'}}>
                {data.map(text => <p>{text}</p>)}
              </TextArea>
            )
          }
        </AutoSizer>
      </div>
    </Container>
  )
}

export default AboutMe;