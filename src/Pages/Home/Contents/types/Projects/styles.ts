import styled from 'styled-components';

interface ContentProps {
  width: number;
  height: number;
}

export const Container = styled.div`
  height: 100%;
  width: 80%;
  border-radius: 25px;
  align-self: center;
  background-color: rgba(255, 255, 255, 0.1);

  .SliderContainer,
  .slick-list,
  .slick-track {
    height: 95%;
    width: 100%;
  }
`;

export const Content = styled.div<ContentProps>`
  display: grid !important;
  grid-template-rows: 500px min-content;
  grid-row-gap: 10px;
  justify-content: center;

  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;

  overflow: auto;

  @media (max-width: 650px) {
    grid-template-rows: 250px auto;
  }

  img {
    width: 80%;
    max-width: 100%;
    max-height: 80%;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 800px;

  p,
  h2 {
    margin: 15px;
  }
`;
