import SearchPage from 'pages/SearchPage/SearchPage';
import { useState } from 'react';
import { Home } from '../../components/Home/Home';
import Button from 'components/Button/Button';

const HomePage = () => {
  const [page, setPage] = useState(false);

  return (
    <>
      <Button onClick={() => setPage(!page)}>Home</Button>
      <Button onClick={() => setPage(!page)}>Movies</Button>
      {!page ? <Home /> : <SearchPage />}
    </>
  );
};

export default HomePage;
