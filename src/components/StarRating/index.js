import React from "react";

const StarRating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <span key={star}>⭐️</span>
      ))}
    </div>
  );
};

export default StarRating;
