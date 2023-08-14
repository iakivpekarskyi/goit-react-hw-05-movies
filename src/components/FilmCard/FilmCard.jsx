import React from 'react';

export const FilmCard = ({ poster_path, title }) => {
  return (
    <li>
      <div>
        <img src={poster_path} alt={title} />
        <div>
          <h2>{title}</h2>
        </div>
      </div>
    </li>
  );
};
