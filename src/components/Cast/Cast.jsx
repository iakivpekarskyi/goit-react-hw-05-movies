import { PageContainer } from 'components/PageContainer/PageContainer.styled';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/TMDB_API';
import { ActorCard, List, Profile } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const ImageUrl = '//image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function asyncWrapper() {
      try {
        const cast = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log('Sorry something went wrong. Try again later.');
      }
    }
    asyncWrapper();
  }, [movieId]);

  return (
    <PageContainer>
      <List>
        {cast.map(({ id, name, profile_path }) => (
          <ActorCard key={id}>
            <div>
              <Profile
                src={
                  profile_path
                    ? ImageUrl + profile_path
                    : `https://fakeimg.pl/300x450?text=no+image+;(`
                }
                alt={name}
                width={100}
              />
              <p> {name}</p>
            </div>
          </ActorCard>
        ))}
      </List>
    </PageContainer>
  );
};

export default Cast;
