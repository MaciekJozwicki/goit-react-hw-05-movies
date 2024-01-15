import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import Loader from 'components/Loader/Loader';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import { fetchMovieReviews } from 'api/api';

const Reviews = () => {
  const location = useLocation();
  const movieId = location.state.movie.id;
  const [data, setData] = useState();

  useEffect(() => {
    console.log(movieId);
    const fetchData = async () => {
      try {
        const result = await fetchMovieReviews(movieId);
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
      {data.length === 0 && <p>We don't have any reviews for this movie</p>}
      {data.map(item => {
        return (
          <ReviewsItem
            key={item.id}
            id={item.id}
            author={item.author_details.name}
            image={item.author_details.avatar_path}
            content={item.content}
          />
        );
      })}
    </div>
  );
};

export default Reviews;
