import React from 'react';
import { Container, Card } from './styles';
import Loading from '../../../components/Loading';
import { useGetData } from '../../../hooks/home/useGetData';

const Qualification: React.FC = () => {
  const { data, loading } = useGetData({ endpoint: 'qualification' });

  if (loading) return <Loading />;

  if (!data) return <div>No data</div>;

  return (
    <Container className='Qualification'>
      {data.map((value: any, index: any) => (
        <Card key={index} index={index} backGroundColor={value.backGroundColor}>
          <div className='image-container'>
            <img src={value.img} alt='img' />
          </div>
          <div className='text-container'>
            {value.lines.map((text: any, index: number) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default Qualification;
