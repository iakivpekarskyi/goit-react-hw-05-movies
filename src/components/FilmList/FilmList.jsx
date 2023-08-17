import { FilmCard } from 'components/FilmCard/FilmCard';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FilmLink, FilmListStyled } from './FilmList.styled';

const FilmList = ({ filmList }) => {
  const location = useLocation();

  return (
    <FilmListStyled>
      {filmList?.map(movieItem => {
        return (
          <li key={movieItem.id}>
            <FilmLink state={{ from: location }} to={`/movies/${movieItem.id}`}>
              <FilmCard filmDetails={movieItem} />
            </FilmLink>
          </li>
        );
      })}
    </FilmListStyled>
  );
};

export default FilmList;
