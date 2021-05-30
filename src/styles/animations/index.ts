import { keyframes, css } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  };
  25% {
    transform: scale(0.9);
  };
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const arrive = (direction?: string) => keyframes`
  from {
    transform: ${
      direction === 'left' ? css`translateX(-100%)` : css`translateX(100%)`
    } ;
  }
  to {
    transform: translateX(0%);
  }
`;

export const backgroundAnimation = keyframes`
  0%{
    background-position: 0% 0%;
  };
  25% {
    background-position: 0% 100%;
  };
  50% {
    background-position: 100% 0%;
  };
  75%{
    background-position: 100% 100%;
  };
  100% {
    background-position: 0% 0%;
  };

`;
