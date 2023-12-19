import React, { useState } from 'react';
import Button from 'components/Button/Button';
import SearchBar from 'components/SearchBar/SearchBar';
import useGetMovies from 'hooks/useGetMovies';
import Loader from 'components/Loader/Loader';
import MovieResults from 'components/MovieResults/MovieResults';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const { data, loading } = useGetMovies(
    `https://api.themoviedb.org/3/search/movie?query=${finalValue}`
  );
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <SearchBar setSearchValue={setSearchValue} />
        <Button onClick={() => setFinalValue(searchValue)}>Search</Button>
      </div>
      {!data ? <Loader /> : <MovieResults data={data} />}
    </>
  );
};

export default SearchPage;
