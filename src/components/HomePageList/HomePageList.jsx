import { FilmList } from './HomePageList.styled';
import { FilmCard } from 'components/FilmCard/FilmCard';

const HomePageList = ({ filmList }) => {
  return (
    <FilmList>
      {filmList &&
        filmList.map(({ title, id }) => <FilmCard key={id} {...filmList} />)}
    </FilmList>
  );
};

export default HomePageList;
