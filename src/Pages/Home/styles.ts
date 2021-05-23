import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 200px auto;
`

export const Menu = styled.div`
  padding: 25px 10px;
  display: grid;
  grid-template-rows: 30px auto;
  background-color: rgba(255, 255, 255, 0.1);
`

export const TitleMenu = styled.div`
  text-align: center;
  font-size: 24px;
`

export const ListMenu = styled.div`
  padding: 25px 10px;
`

export const GridContent = styled.div`
  padding: 10px 25px;
  display: grid;
  grid-template-rows: 60px auto 30px;
`

export const TitleArea = styled.div`
  font-size: 32px;
`

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterArea = styled.div``
