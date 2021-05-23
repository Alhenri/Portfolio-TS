import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 80%;
  border-radius: 25px;
  align-self: center;
  background-color: rgba(255, 255, 255, 0.1);

  .SliderContainer, .slick-list, .slick-track{
    height: 95%;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: grid !important;
  grid-template-rows: 500px auto;
  grid-row-gap: 25px;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
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

  p, h2 { 
    margin: 15px;
  }
`