import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Movies } from '../../pages/Movies';
import { NotFound } from '../../pages/NotFound';
import { Film } from '../../pages/Film';
import { SharedLayout } from '../../components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Film />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
