import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 80%;
  display: grid;
  grid-template-rows: 300px auto;
  border-radius: 25px;
  align-self: center;
  background-color: rgba(255, 255, 255, 0.1);

  @media (max-width: 500px){
    grid-template-rows: 200px auto;  
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 800px;
    margin: 15px;
  }
`;

export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-height: 80%;
    max-width: 80%;
  }
`;
