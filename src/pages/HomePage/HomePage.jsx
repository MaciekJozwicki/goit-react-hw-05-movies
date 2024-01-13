import SearchPage from 'pages/SearchPage/SearchPage';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Home } from '../../components/Home/Home';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // const location = useLocation();

  // const searchBar = location.state?.searchBar;

  // useEffect(() => {
  //   if (searchBar && searchBar === true) {
  //     setPage(true);
  //   }
  // }, [searchBar]);

  return (
    <>
      <Link to="/search">
        <Button>Search</Button>
      </Link>

      {<Home />}
    </>
  );
};

export default HomePage;
