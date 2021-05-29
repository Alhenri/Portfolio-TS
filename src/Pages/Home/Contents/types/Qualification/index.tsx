import React from "react";
import { Container, Card } from "./styles";
import data from "./data";

const Qualification: React.FC = () => {
  return (
    <Container className="Qualification">
      {data.map((value) => (
        <Card backGroundColor={value.backGroundColor}>
          <div className="image-container">
            <img src={value.img} alt="img" />
          </div>
          <div className="text-container">
            {value.lines.map((text) => (
              <p>{text}</p>
            ))}
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default Qualification;
