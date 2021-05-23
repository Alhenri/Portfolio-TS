import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 200px auto;

  @media (max-width: 650px) {
    grid-template-columns: auto;
    grid-template-rows: 100px auto;
  }
`;

export const Menu = styled.div`
  padding: 25px 10px;
  display: grid;
  grid-template-rows: 30px auto;
  background-color: rgba(255, 255, 255, 0.1);

  @media (max-width: 650px) {
    grid-template-rows: auto;
    grid-template-columns: 120px auto;
    padding: 0;
  }
`;

export const TitleMenu = styled.div`
  text-align: center;
  font-size: 24px;
  @media (max-width: 650px){
    line-height: 100px;
  }
`;

export const ListMenu = styled.div`
  padding: 25px 10px;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;

    .Button {
      height: 20px;
      margin: 0 10px;
      width: 120px;
    }
  }
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-rows: 60px auto 30px;
`;

export const TitleArea = styled.div`
  font-size: 32px;
  padding-left: 15px;
  line-height: 60px;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterArea = styled.div``;
