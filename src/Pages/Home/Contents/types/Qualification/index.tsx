import React, { useState, useEffect } from "react";
import { Container, Card } from "./styles";
import getData, { DataInterface } from "./data";
import Loading from "../../../../../components/Loading";

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

  if (loading) return <Loading />;

  return (
    <Container className="Qualification">
      {data.map((value, index) => (
        <Card key={index} index={index} backGroundColor={value.backGroundColor}>
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
