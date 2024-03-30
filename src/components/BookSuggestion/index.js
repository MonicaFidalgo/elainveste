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
      <div className="card-img">
        <img src={image} alt={alt} width="100%" />
      </div>

      <div className="card-body">
        <h3 className="heading-secondary">{title}</h3>
        <h4>de {subtitle}</h4>
        <StarRating rating={rating} />
        <p className="mt-2">{description}</p>
        <a
          className="button button-primary"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Quero este livro
        </a>
      </div>
    </div>
  );
};

export default BookSuggestion;
