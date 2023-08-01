import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import Movies from '../../pages/MoviesPage';
import NotFound from '../../pages/NotFound';
import Layout from 'components/Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies/" element={<Movies />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
