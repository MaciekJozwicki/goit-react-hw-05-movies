import MovieItem from 'components/MovieItem/MovieItem';

const MovieResults = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.results.map(item => (
        <MovieItem movie={item} />
      ))}
    </>
  );
};

export default MovieResults;
