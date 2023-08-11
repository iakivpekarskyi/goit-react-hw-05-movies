import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieDetailsPage = () => {
  return (
    <div>
      <h2>MovieDetailsPage</h2>

      <ul>
        <li>
          <Link to="cast"> Cast</Link>
        </li>
        <li>
          <Link to="reviews"> Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
