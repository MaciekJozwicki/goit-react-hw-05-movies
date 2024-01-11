import React from 'react';

const CastItem = ({ id, name, image }) => {
  return (
    <li key={id}>
      {image && (
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={name} />
      )}

      <h2>{name}</h2>
    </li>
  );
};
export default CastItem;
