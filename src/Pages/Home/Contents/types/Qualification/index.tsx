import React from 'react';
import { Container, Card } from './styles';
import data from './data'

const Qualification: React.FC = () => {
  return (
    <Container>
      {data.map(value => (
        <Card backGroundColor={value.backGroundColor}>
          <div>
            <img src={value.img} alt="img" />
          </div>
          {value.lines.map(text => <p>{text}</p>)}
        </Card>
        )
      )}
    </Container>
  )
}

export default Qualification;