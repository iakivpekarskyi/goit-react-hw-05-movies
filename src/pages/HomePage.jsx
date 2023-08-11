import { PageContainer } from '../components/PageContainer/PageContainer.styled';

const HomePage = () => {
  return (
    <PageContainer>
      <div
        style={{
          width: '800px',
          height: '200px',
          background: 'pink',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      ></div>
    </PageContainer>
  );
};

export default HomePage;
