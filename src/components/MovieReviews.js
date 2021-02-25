// src/BookList.js
import React from "react";

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review) => (
      <div className="review">
        <a href={review.link}>{review.headline}</a>
      </div>
    ))}
  </div>
);

export default MovieReviews;
