import styled, { css } from 'styled-components';

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
          background-color: #e3e3e3e3;
        `
      : css`
          background-color: ${bg};
        `}
  border: none;
  border-radius: 15px;
  transition: 0.2s;
  width: 100%;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;
