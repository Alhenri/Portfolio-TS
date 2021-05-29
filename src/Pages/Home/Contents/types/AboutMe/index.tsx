import React, { useEffect, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";

import { Container, TextArea, ImageArea } from "./styles";
import getData, { DataType } from "./data";

const AboutMe: React.FC = () => {
  const [data, setData] = useState<DataType>([]);
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
    <Container>
      <ImageArea>
        <img src="https://i.imgur.com/2ZsmIpr.png" alt="me_img" />
      </ImageArea>
      <div style={{ width: "100%", height: "100%" }}>
        <AutoSizer>
          {({ height, width }) => (
            <TextArea style={{ width: width, height, overflow: "hidden auto" }}>
              {data.map((text) => (
                <p>{text}</p>
              ))}
            </TextArea>
          )}
        </AutoSizer>
      </div>
    </Container>
  );
};

export default AboutMe;
