import React from 'react';
import { FilmCardContainer, FilmImage } from './FilmCard.styled';

export const FilmCard = ({ filmDetails }) => {
  return (
    <FilmCardContainer>
      <FilmImage
        src={
          filmDetails.poster_path
            ? `https://image.tmdb.org/t/p/w300${filmDetails.poster_path}`
            : `https://fakeimg.pl/300x500?text=no+image+;(`
        }
        alt={filmDetails.title}
      />
      <p>{filmDetails.title}</p>
    </FilmCardContainer>
  );
};
