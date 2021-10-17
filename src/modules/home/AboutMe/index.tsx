import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';

import { useGetData } from '../../../hooks/home/useGetData';
import Loading from '../../../components/Loading';
import { Container, TextArea, ImageArea } from './styles';

const AboutMe: React.FC = () => {
  const { data, loading } = useGetData({ endpoint: 'about_me' });

  if (loading) return <Loading />;

  if (!data) return <div>No data</div>;

  return (
    <Container>
      <ImageArea>
        <img src='https://i.imgur.com/2ZsmIpr.png' alt='me_img' />
      </ImageArea>
      <div style={{ width: '100%', height: '100%' }}>
        <AutoSizer>
          {({ height, width }) => (
            <TextArea style={{ width: width, height, overflow: 'hidden auto' }}>
              {data.map((text: any, index: any) => (
                <p key={index}>{text}</p>
              ))}
            </TextArea>
          )}
        </AutoSizer>
      </div>
    </Container>
  );
};

export default AboutMe;
