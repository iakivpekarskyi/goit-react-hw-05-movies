import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import Movies from '../../pages/MoviesPage';
import NotFound from '../../pages/NotFound';
import Layout from 'components/Layout/Layout';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies/" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
