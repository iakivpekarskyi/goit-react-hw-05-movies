import React from 'react';
import { FilmCardContainer, FilmImage, LinkStyled } from './FilmCard.styled';

export const FilmCard = ({ title, id, poster_path, location }) => {
  return (
    <FilmCardContainer>
      {}
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        <FilmImage
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        {title}
      </LinkStyled>
    </FilmCardContainer>
  );
};
