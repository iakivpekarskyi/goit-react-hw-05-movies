import React from 'react';
import { FilmCardContainer, FilmImage } from './FilmCard.styled';

export const FilmCard = ({ filmDetails }) => {
  return (
    <FilmCardContainer>
      <FilmImage
        src={`https://image.tmdb.org/t/p/w300${filmDetails.poster_path}`}
        alt={filmDetails.title}
      />
      <p>{filmDetails.title}</p>
    </FilmCardContainer>
  );
};
