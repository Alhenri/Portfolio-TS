import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 350px auto;
  border-radius: 25px;

  background-color: rgba(255, 255, 255, 0.1);
`;

export const TextArea = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 800px;
  }
`;

export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 300px;
  }
`;
