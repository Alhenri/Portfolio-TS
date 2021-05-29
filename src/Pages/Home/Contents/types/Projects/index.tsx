import React from "react";
import Slider from "react-slick";
import AutoSizer from "react-virtualized-auto-sizer";

import IconLink from "../../../../../components/IconLink";
import {
  Container,
  Content,
  ImageContainer,
  TextContainer,
  LinksContainer,
} from "./styles";
import data from "./data";

const Projects: React.FC = () => {
  return (
    <Container>
      <AutoSizer>
        {({ height, width }) => (
          <div style={{ width, height }}>
            <Slider
              className="SliderContainer"
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {data.map((value) => (
                <Content
                  height={height}
                  width={width}
                  className="ContentCarousel"
                >
                  <ImageContainer>
                    <img src={value.img} alt="alt" />
                  </ImageContainer>
                  <TextContainer>
                    <h2>{value.title}</h2>
                    {value.lines.map((value) => (
                      <p>{value}</p>
                    ))}
                  </TextContainer>
                  <LinksContainer>
                    {value.links?.map((value) => (
                      <IconLink {...value} />
                    ))}
                  </LinksContainer>
                </Content>
              ))}
            </Slider>
          </div>
        )}
      </AutoSizer>
    </Container>
  );
};

export default Projects;
