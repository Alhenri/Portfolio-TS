import styled from 'styled-components';

interface ContainerProps {
  color?: string;
}

export const Container = styled.button<ContainerProps>`
  color: ${({color}) => color}
`;
