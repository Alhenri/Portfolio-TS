import React from 'react';
import { ButtonProps } from './interfaces';
import { Container } from './styles';


const Button: React.FC<ButtonProps> = ({color, name, onClick}) =>{
  return (
  <Container 
    color={color} 
    {...(onClick?{ onClick: () => onClick() }:{})}
  >
    {name}
  </Container>)
}

export default Button;