import HomePage from '../pages/HomePage/HomePage';
import { Routes, Route } from 'react-router';
import Movies from '../components/Movies/Movies';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import ErrorPage from '../error-page';
import SearchPage from 'pages/SearchPage/SearchPage';

export const App = () => {
  return (
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
  );
};
