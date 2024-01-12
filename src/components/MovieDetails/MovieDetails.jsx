import { React, lazy, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const CastLazy = lazy(() => import('components/Cast/Cast'));
const ReviewsLazy = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const location = useLocation();
  const { movie } = location.state;

  const movieId = location.state.movie.id;
  const redirectedTo = location.state.fromSearchBar ? true : false;
  return (
    <div className="movie-details">
      <Link className="button" to={`/`} state={{ searchBar: redirectedTo }}>
        Go back
      </Link>
      <div className="movie-info">
        <h2>TITLE: {movie.name}</h2>
        <h3>Air Date: {movie.first_air_date}</h3>
        <h3>Origin Country: {movie.origin_country}</h3>
        <h3>Overwiev: {movie.overview}</h3>
        <h3>Popularity: - {movie.popularity} - points</h3>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <Link
        className="button"
        to={`/movies/${movieId}/cast`}
        state={{ movie: movie }}
        element={
          <Suspense>
            <CastLazy />
          </Suspense>
        }
      >
        Cast
      </Link>

      <Link
        className="button"
        to={`/movies/${movieId}/reviews`}
        state={{ movie: movie }}
        element={
          <Suspense>
            <ReviewsLazy />
          </Suspense>
        }
      >
        Reviews
      </Link>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
