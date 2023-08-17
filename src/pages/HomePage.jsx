import { PageContainer } from '../components/PageContainer/PageContainer.styled';
import { useEffect, useState } from 'react';
import { getTrending } from '../services/TMDB_API';
import FilmList from 'components/FilmList/FilmList';

const HomePage = () => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    async function asyncWrapper() {
      try {
        const filmList = await getTrending();
        setFilmList(filmList);
      } catch (error) {
        console.log('Sorry something went wrong. Try again later.');
      }
    }
    asyncWrapper();
  }, []);

  return (
    <PageContainer>
      <div>
        <FilmList filmList={filmList} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
