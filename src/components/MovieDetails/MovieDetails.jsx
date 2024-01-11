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
    <>
      <Link to={`/`} state={{ searchBar: redirectedTo }}>
        Go back
      </Link>
      <h2>{movie.title}</h2>

      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />

      <Link
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
    </>
  );
};

export default MovieDetails;
