import useGetMovies from 'hooks/useGetMovies';
import MovieItem from './MovieItem/MovieItem';

export const App = () => {
  const { data, loading } = useGetMovies(
    'https://api.themoviedb.org/3/trending/all/day'
  );
  if (loading) {
    return 'loading';
  }
  return (
    <>
      {data.results.map(item => (
        <MovieItem movie={item} />
      ))}
    </>
  );
};
