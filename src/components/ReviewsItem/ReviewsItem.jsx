import React from 'react';

const ReviewsItem = ({ id, author, image, content }) => {
  return (
    <li key={id}>
      <div>
        <h2>Author: {author}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={author} />
      </div>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;
