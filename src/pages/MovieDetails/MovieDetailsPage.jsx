import { PageContainer } from '../../components/PageContainer/PageContainer.styled';
import { useEffect, useState, Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/TMDB_API';
import {
  MovieCard,
  Picture,
  Section,
  StyledLink,
} from './MovieDetailsPage.styled';
import { Loader } from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { title, poster_path } = movie;
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movieDetails = await getMovieById(movieId);
        setMovie(movieDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details SORRY:(', error);
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);
  return (
    <>
      <StyledLink to={backLinkHref.current}>Go back</StyledLink>
      <PageContainer>
        <Section>
          <MovieCard>
            {loading ? <p>Loading...</p> : title && <h3>{title}</h3>}
            <Picture
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                  : `https://fakeimg.pl/300x500?text=no+image+;(`
              }
              alt={`${title}`}
            />
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
        <Suspense fallback={<Loader />}>
          <Section>
            <Outlet />
          </Section>
        </Suspense>
      </PageContainer>
    </>
  );
};

export default MovieDetailsPage;
