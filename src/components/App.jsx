import { Routes, Route } from 'react-router';
import { Suspense } from 'react';
import ErrorPage from '../error-page';
import React from 'react';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const Movies = React.lazy(() => import('../components/Movies/Movies'));
const MovieDetails = React.lazy(() =>import('../components/MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('../components/Cast/Cast'));
const Reviews = React.lazy(() => import('../components/Reviews/Reviews'));
const SearchPage = React.lazy(() => import('pages/SearchPage/SearchPage'));

export const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} errorElement={ErrorPage} />
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
