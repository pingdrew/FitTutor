import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_EXERCISES } from '../../utils/queries';

const Results = () => {
  const { loading, error, data } = useQuery(GET_ALL_EXERCISES);

  // Debugging information
  console.log('Loading:', loading);
  console.log('Error:', error);
  console.log('Data:', data);

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error('Error:', error);
    return <div>Error loading data</div>;
  }

  const exercises = data?.allExercises || [];

  return (
    <div className="results">
      {exercises.length === 0 ? (
        <div>No exercises found</div>
      ) : (
        exercises.map((exercise) => (
          <div key={exercise._id} className="result-card">
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <p>Type: {exercise.type?.name}</p>
            <p>Targeted Muscles: {exercise.targetedMuscles?.join(', ')}</p>
            <p>Equipment Needed: {exercise.equipmentNeeded}</p>
            <p>Difficulty Level: {exercise.difficultyLevel}</p>
            {exercise.photo && exercise.photo.map((photo, index) => (
              <img key={index} src={photo} alt={`Exercise ${exercise.name}`} />
            ))}
            {exercise.video && exercise.video.map((video, index) => (
              <video key={index} src={video} controls />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Results;
