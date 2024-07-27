import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

const Profile = () => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { me } = data;

  return (
    <div>
      <h1>Profile</h1>
      <h2>{me.username}</h2>
      <p>Email: {me.email}</p>
      <p>Phone: {me.phone}</p>
      <p>Age: {me.age}</p>
      <p>About: {me.about}</p>
      <p>Role: {me.role}</p>
      <p>Specializations: {me.specializations.join(', ')}</p>
      <p>Certifications: {me.certifications.join(', ')}</p>
      <p>Friends:</p>
      {me.friends.map(friend => (
        <div key={friend._id}>
          <p>{friend.username}</p>
        </div>
      ))}
      <p>Reviews:</p>
      {me.reviews.map(review => (
        <div key={review._id}>
          <p>{review.messageContent}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
