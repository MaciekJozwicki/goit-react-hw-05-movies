import React from 'react';
import { useLocation } from 'react-router';

const MovieDetails = () => {
  const location = useLocation();
  const { movie } = location.state;
  console.log(movie);
  return (
    <>
      <li key={movie.id}>
        <h2>{movie.title}</h2>

        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </li>
    </>
  );
};

export default MovieDetails;
