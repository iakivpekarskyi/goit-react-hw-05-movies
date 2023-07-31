import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { Movies } from '../../pages/MoviesPage';
import { TestPage } from '../../pages/TestPage';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies/" element={<Movies />} />
        <Route path="test/" element={<TestPage />} />
      </Route>
    </Routes>
  );
};
