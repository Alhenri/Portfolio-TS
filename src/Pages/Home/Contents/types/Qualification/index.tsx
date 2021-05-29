import React, { useState, useEffect } from "react";
import { Container, Card } from "./styles";
import getData, { DataInterface } from "./data";

const Qualification: React.FC = () => {
  const [data, setData] = useState<DataInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const requestData = async () => {
      setLoading(true);
      const response = await getData();
      setLoading(false);
      setData(response);
    };

    requestData();
  }, []);

  if (loading) return <div>Loading</div>;

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
