import React from "react";

const StarRating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          className={`fa fa-star ${star <= rating ? "checked" : ""}`}
        ></span>
      ))}
    </div>
  );
};

export default StarRating;
