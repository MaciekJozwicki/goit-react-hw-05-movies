import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import SearchBar from 'components/SearchBar/SearchBar';
import useGetMovies from 'hooks/useGetMovies';
import Loader from 'components/Loader/Loader';
import MovieResults from 'components/MovieResults/MovieResults';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const { data, loading } = useGetMovies(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}`
  );
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <SearchBar setSearchValue={setSearchValue} />
      </div>
      {!data ? <Loader /> : <MovieResults data={data} fromSearchBar={true} />}
    </>
  );
};

export default SearchPage;
