import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../utils/mutations';

const ReviewForm = ({ itemId, itemType }) => {
  const [review, setReview] = useState({
    messageContent: '',
    rating: '',
    reviewedItem_Id: itemId,
    onModel: itemType,
  });

  const [addReview] = useMutation(ADD_REVIEW);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReview({ variables: { ...review } });
      alert('Review added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add review.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="messageContent" value={review.messageContent} onChange={handleChange} placeholder="Write your review" required />
      <input name="rating" value={review.rating} onChange={handleChange} placeholder="Rating" required />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
