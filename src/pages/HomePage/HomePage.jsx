import SearchPage from 'pages/SearchPage/SearchPage';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Home } from '../../components/Home/Home';
import Button from 'components/Button/Button';

const HomePage = () => {
  const [page, setPage] = useState(false);
  const location = useLocation();
  console.log('location', location);
  const searchBar = location.state?.searchBar;

  useEffect(() => {
    console.log(searchBar);
    if (searchBar && searchBar === true) {
      setPage(true);
    }
  }, [searchBar]);

  return (
    <>
      <Button onClick={() => setPage(!page)}>Home</Button>
      <Button onClick={() => setPage(!page)}>Movies</Button>
      {!page ? <Home /> : <SearchPage />}
    </>
  );
};

export default HomePage;
