import MovieItem from 'components/MovieItem/MovieItem';

const MovieResults = ({ data, fromSearchBar }) => {
  return (
    <>
      {data.map(item => (
        <MovieItem key={item.id} movie={item} fromSearchBar={fromSearchBar} />
      ))}
    </>
  );
};

export default MovieResults;
