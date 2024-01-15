// import MovieDetails from 'components/MovieDetails/MovieDetails';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie, fromSearchBar }) => {
  return (
    <p key={movie.id} className="movie-link">
      <Link
        to={`/movies/${movie.id}`}
        state={{ movie: movie, fromSearchBar: fromSearchBar }}
      >
        {movie.title}
      </Link>
    </p>
  );
};

export default MovieItem;
