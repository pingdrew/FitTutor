import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_EXERCISE_BY_ID } from '../utils/queries';
import ExerciseCard from '../components/ExerciseCard';
import ReviewForm from '../components/ReviewForm';

const ExerciseDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EXERCISE_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const exercise = data.exerciseById;

  return (
    <div>
      <h1>Exercise Detail</h1>
      <ExerciseCard exercise={exercise} />
      <ReviewForm itemId={exercise._id} itemType="Exercise" />
    </div>
  );
};

export default ExerciseDetail;
