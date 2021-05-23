import React from 'react';
import { ButtonProps } from './interfaces';
import { Container } from './styles';


const Button: React.FC<ButtonProps> = ({color, name, onClick, bg, style, selected}) =>{
  return (
  <Container
    className="Button"
    style={style}
    color={color}
    bg={bg} 
    selected={selected}
    {...(onClick?{ onClick: () => onClick() }:{})}
  >
    {name}
  </Container>
  )
}

export default Button;