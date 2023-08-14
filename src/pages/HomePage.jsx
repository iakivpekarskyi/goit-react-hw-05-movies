import HomePageList from 'components/HomePageList/HomePageList';
import {
  PageContainer,
  CenteredHeading,
} from '../components/PageContainer/PageContainer.styled';
import { useEffect, useState } from 'react';
import { getTrending } from '../services/TMDB_API';

const HomePage = () => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    async function asyncWrapper() {
      try {
        const filmList = await getTrending();
        setFilmList(filmList);
      } catch (error) {
        console.log('error');
      }
    }
    asyncWrapper();

    return () => {};
  }, []);

  return (
    <PageContainer>
      <CenteredHeading>Trending today</CenteredHeading>
      <HomePageList filmList={filmList} linkTo="movies/" />
    </PageContainer>
  );
};

export default HomePage;
