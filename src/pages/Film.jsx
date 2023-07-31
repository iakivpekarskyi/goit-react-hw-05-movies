import { useParams } from 'react-router-dom';

export const Film = () => {
  const { movieId } = useParams();
  return <div>Now showing Film with id - {movieId}</div>;
};
