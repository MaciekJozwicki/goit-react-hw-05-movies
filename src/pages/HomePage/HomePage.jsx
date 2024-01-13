import { Home } from '../../components/Home/Home';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
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
