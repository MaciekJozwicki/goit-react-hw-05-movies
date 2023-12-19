import useGetMovies from 'hooks/useGetMovies';
import Loader from 'components/Loader/Loader';
import MovieResults from 'components/MovieResults/MovieResults';

export const Home = () => {
  const { data, loading } = useGetMovies(
    'https://api.themoviedb.org/3/trending/all/day'
  );
  console.log(data);
  return <>{!data ? <Loader /> : <MovieResults data={data} />}</>;
};
