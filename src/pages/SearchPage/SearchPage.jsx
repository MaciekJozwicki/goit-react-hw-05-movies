import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchMovieDetails } from '../../api/api';
import SearchBar from 'components/SearchBar/SearchBar';
import Loader from 'components/Loader/Loader';
import MovieResults from 'components/MovieResults/MovieResults';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMovieDetails(searchValue);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchValue]);

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <Link className="button" to="/">
          Home
        </Link>
        <SearchBar setSearchValue={setSearchValue} />
      </div>
      {!data ? <Loader /> : <MovieResults data={data} fromSearchBar={true} />}
    </>
  );
};

export default SearchPage;
