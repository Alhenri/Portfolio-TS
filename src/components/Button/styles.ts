import styled, { css } from 'styled-components';
import {glitch} from '../../styles/animations';

interface ContainerProps {
  color?: string;
  bg?: string;
  selected?: boolean;
}

export const Container = styled.button<ContainerProps>`
  color: ${({ color }) => color};
  ${({ selected, bg }) =>
    !selected
      ? css`
          background-color: #ffffff1a;
        `
      : css`
          background-color: ${bg};
        `}
  border: none;
  border-radius: 15px;
  animation: ${glitch} 500ms infinite;
  transition: 0.2s;
  width: 100%;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;
