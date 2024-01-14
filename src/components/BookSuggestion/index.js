import React from "react";
import StarRating from "../StarRating";

const BookSuggestion = ({
  title,
  subtitle,
  description,
  image,
  alt,
  rating,
  url,
}) => {
  return (
    <div className="book-suggestion">
      <img src={image} alt={alt} />
      <h3 className="pt-4">{title}</h3>
      <h4>de {subtitle}</h4>
      <StarRating rating={rating} />
      <p className="mt-2">{description}</p>
      <a
        className="button button-secondary"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        Encomendar
      </a>
    </div>
  );
};

export default BookSuggestion;
