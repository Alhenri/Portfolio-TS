import styled, { css } from 'styled-components';

interface CardProps {
  backGroundColor?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 80%;
  align-self: center;
`;

export const Card = styled.div<CardProps>`
  width: 100%;
  display: grid;
  grid-template-rows: 200px auto;
  grid-row-gap: 10px;
  max-width: 800px;
  margin: 15px 0;
  padding: 10px 15px;
  color: #333333;
  background-color: ${({ backGroundColor }) =>
    backGroundColor || css`rgba(255, 255,255, 0.1)`};
  border-radius: 25px;

  img{
    max-height: 100%;
    max-width: 100%;
  }
`;
