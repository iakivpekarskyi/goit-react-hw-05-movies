import { FilmLink, FilmList } from './HomePageList.styled';

const HomePageList = ({ filmList }) => {
  return (
    <FilmList>
      {filmList &&
        filmList.map(({ title, id }) => (
          <li key={id}>
            <FilmLink>{title}</FilmLink>
          </li>
        ))}
    </FilmList>
  );
};

export default HomePageList;
