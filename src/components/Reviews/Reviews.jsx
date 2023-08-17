import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/TMDB_API';
import { Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function asyncWrapper() {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log('Sorry something went wrong. Try again later.');
      }
    }
    asyncWrapper();
  }, [movieId]);

  return (
    <section>
      {
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <Text>{content}</Text>
            </li>
          ))}
        </ul>
      }
    </section>
  );
};

export default Reviews;
