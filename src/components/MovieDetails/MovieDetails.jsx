import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const location = useLocation();
  const { movie } = location.state;
  const movieId = location.state.movie.id;

  return (
    <>
      <h2>{movie.title}</h2>

      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <Link
        to={`/movies/${movieId}/cast`}
        state={{ movie: movie }}
        element={<Cast />}
      >
        Cast
      </Link>
      <Link
        to={`/movies/${movieId}/reviews`}
        state={{ movie: movie }}
        element={<Reviews />}
      >
        Reviews
      </Link>

      <Outlet />
    </>
  );
};

export default MovieDetails;
