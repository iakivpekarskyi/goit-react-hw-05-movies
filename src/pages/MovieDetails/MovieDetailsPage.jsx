import { useEffect, useState, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/TMDB_API';
import {
  Data,
  LinkContainer,
  LinkList,
  LinkStyled,
  Meta,
  MovieCard,
  Picture,
  Section,
  StyledLink,
  Title,
} from './MovieDetailsPage.styled';
import { Loader } from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;
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
      } finally {
        setLoading(true);
      }
    }
    getMovieDetails();
  }, [movieId]);
  return (
    <>
      <StyledLink to={backLinkHref.current}>Go back</StyledLink>
      {loading && <Loader />}

      <Section>
        <MovieCard>
          <Picture
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : `https://fakeimg.pl/300x500?text=no+image+;(`
            }
            alt={`${title}`}
          />
          <Data>
            <Title>{`${title}`} </Title>

            <Meta>
              <p>User Score: {`${Math.round(vote_average * 10)}`}%</p>
              <h4>{release_date}</h4>
              <h4>Overview</h4>
              <p>{`${overview}`}</p>
              <h4>Genres</h4>
              {genres && <p>{genres.map(({ name }) => name).join(' ')}</p>}
            </Meta>
          </Data>
        </MovieCard>
      </Section>
      <Section>
        <LinkContainer>
          <LinkList>
            <li>
              <LinkStyled to="cast">Cast</LinkStyled>
            </li>
            <li>
              <LinkStyled to="reviews">Reviews</LinkStyled>
            </li>
          </LinkList>
        </LinkContainer>
      </Section>
      <Suspense fallback={<Loader />}>
        <Section>
          <Outlet />
        </Section>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
