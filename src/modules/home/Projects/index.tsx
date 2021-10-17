import React from 'react';
import Slider from 'react-slick';
import AutoSizer from 'react-virtualized-auto-sizer';

import { useGetData } from '../../../hooks/home/useGetData';
import Loading from '../../../components/Loading';
import IconLink from '../../../components/IconLink';
import {
  Container,
  Content,
  ImageContainer,
  TextContainer,
  LinksContainer,
} from './styles';

const Projects: React.FC = () => {
  const { data, loading } = useGetData({ endpoint: 'projects' });

  if (loading) return <Loading />;

  if (!data) return <div>No data</div>;

  return (
    <Container>
      <AutoSizer>
        {({ height, width }) => (
          <div style={{ width, height }}>
            <Slider
              className='SliderContainer'
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {data.map((value: any, index: number) => (
                <Content
                  height={height}
                  width={width}
                  className='ContentCarousel'
                  key={index}
                >
                  <ImageContainer>
                    <img src={value.img} alt='alt' />
                  </ImageContainer>
                  <TextContainer>
                    <h2>{value.title}</h2>
                    {value.lines.map((value: any, index: number) => (
                      <p key={index}>{value}</p>
                    ))}
                  </TextContainer>
                  <LinksContainer>
                    {value.links?.map((value: any, index: number) => (
                      <IconLink key={index} {...value} />
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
