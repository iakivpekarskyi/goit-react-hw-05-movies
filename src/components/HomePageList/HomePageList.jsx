import { FilmList } from './HomePageList.styled';
import { FilmCard } from 'components/FilmCard/FilmCard';

const HomePageList = ({ filmList }) => {
  return (
    <FilmList>
      {filmList &&
        filmList.map(({ title, id, poster_path }) => (
          <FilmCard title={title} key={id} poster_path={poster_path} />
        ))}
    </FilmList>
  );
};

export default HomePageList;
