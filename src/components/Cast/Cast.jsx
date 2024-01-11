import Loader from 'components/Loader/Loader';
import CastItem from 'components/CastItem/CastItem';
import useGetMovies from 'hooks/useGetMovies';
import React from 'react';
import { useLocation } from 'react-router';

const Cast = () => {
  const location = useLocation();
  const movieId = location.state.movie.id;

  const { data, loading } = useGetMovies(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`
  );
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {data.cast.map(item => {
        return (
          <CastItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.profile_path}
          />
        );
      })}
    </div>
  );
};

export default Cast;
