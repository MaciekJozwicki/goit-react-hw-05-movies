import React from 'react';
import { useLocation } from 'react-router';
import useGetMovies from 'hooks/useGetMovies';
import Loader from 'components/Loader/Loader';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';

const Reviews = () => {
  const location = useLocation();
  const movieId = location.state.movie.id;

  const { data, loading } = useGetMovies(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`
  );
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {data.results.length === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}
      {data.results.map(item => {
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
