import { Home } from '../../components/Home/Home';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Link className="button" to="/search">
        Search
      </Link>

      {<Home />}
    </>
  );
};

export default HomePage;
