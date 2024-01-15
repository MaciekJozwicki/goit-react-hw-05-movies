import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import MovieResults from 'components/MovieResults/MovieResults';
import { fetchMovies } from 'api/api';

export const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMovies();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <>{!data ? <Loader /> : <MovieResults data={data} />}</>;
};
