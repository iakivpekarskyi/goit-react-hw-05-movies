import { PageContainer } from 'components/PageContainer/PageContainer.styled';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/TMDB_API';
import { MovieCard, Picture, Section } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { poster_path, title } = movie;

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await getMovieById(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <PageContainer>
      <Section>
        <MovieCard>
          <Picture src={poster_path} alt={title} width={480} />
          <h3>{title}</h3>
        </MovieCard>
      </Section>
      <Section>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Section>
      <Section>
        <Outlet />
      </Section>
    </PageContainer>
  );
};

export default MovieDetailsPage;
