import Loader from 'components/Loader/Loader';
import CastItem from 'components/CastItem/CastItem';
import React, { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../api/api';

import { useLocation } from 'react-router';

const Cast = () => {
  const location = useLocation();
  const movieId = location.state.movie.id;
  const [data, setData] = useState();

 

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const result = await fetchMovieCast(movieId);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  if (!data) {
    return <Loader />;
  }

  return (
    <div>
      {data.map(item => {
        return (
          <CastItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.profile_path}
          />
        );
      })}
    </div>
  );
};

export default Cast;
