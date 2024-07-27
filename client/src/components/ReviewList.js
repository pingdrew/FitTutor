import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map(review => (
        <div key={review._id}>
          <p>{review.messageContent}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
