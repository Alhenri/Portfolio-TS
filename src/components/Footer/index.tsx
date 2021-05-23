import React from 'react';
import {AiFillGithub} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im';

import { Content } from './styles';

const Footer: React.FC = () => {
  return (
    <Content>
      Created by @Alehenri
      <AiFillGithub
        onClick={() => window.open('https://github.com/Alhenri')}
        style={{marginLeft: 15, fontSize: 24, cursor: 'pointer'}}
      />
      <FaInstagram
        onClick={() => window.open('https://www.instagram.com/alhenri_soares/')}
        style={{marginLeft: 15, fontSize: 24, cursor: 'pointer'}}
      />
      <ImLinkedin
        onClick={() => window.open('https://www.linkedin.com/in/alexandre-soares-a4b0081aa/')}
        style={{marginLeft: 15, fontSize: 24, cursor: 'pointer'}}
      />
    </Content>
  )
}

export default Footer;