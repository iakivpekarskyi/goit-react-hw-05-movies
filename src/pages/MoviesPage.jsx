import MovieDetailsPage from './MovieDetailsPage';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <div
        style={{
          width: '800px',
          height: '200px',
          background: 'tomato',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      ></div>
      <MovieDetailsPage />
    </div>
  );
};

export default Movies;
