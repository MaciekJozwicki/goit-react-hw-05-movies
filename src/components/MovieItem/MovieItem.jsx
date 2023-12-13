// import MovieDetails from 'components/MovieDetails/MovieDetails';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`} state={{ movie: movie }}>
        <h2>{movie.title}</h2>

        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
    </li>
  );
};

export default MovieItem;
