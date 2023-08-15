import SearchBar from 'components/SearchBar/SearchBar';
import HomePageList from 'components/HomePageList/HomePageList';
import { useEffect, useState } from 'react';
import { getMovieByName } from 'services/TMDB_API';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [filmList, setFilmList] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();

  useEffect(() => {
    const query = searchQuery.get('query') ?? '';
    async function fetchMovieByName() {
      try {
        const filmsByName = await getMovieByName(query);
        setFilmList(filmsByName);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchMovieByName();
  }, [searchQuery]);

  const handleSearch = query => {
    setSearchQuery({ query });
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <HomePageList filmList={filmList} />
    </div>
  );
};

export default MoviesPage;
