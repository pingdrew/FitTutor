import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_EXERCISES, GET_ALL_WORKOUTS, GET_ALL_MEALS, GET_ALL_PERSONS } from '../utils/queries';

const Explore = () => {
  const { loading: exercisesLoading, error: exercisesError, data: exercisesData } = useQuery(GET_ALL_EXERCISES);
  const { loading: workoutsLoading, error: workoutsError, data: workoutsData } = useQuery(GET_ALL_WORKOUTS);
  const { loading: mealsLoading, error: mealsError, data: mealsData } = useQuery(GET_ALL_MEALS);
  const { loading: professionalsLoading, error: professionalsError, data: professionalsData } = useQuery(GET_ALL_PERSONS);
  console.log(exercisesData);
  console.log(workoutsData);
  console.log(mealsData);
  console.log(professionalsData);
  console.log(exercisesError);
  console.log(workoutsError);
  console.log(mealsError);
  console.log(professionalsError);
  if (exercisesLoading || workoutsLoading || mealsLoading || professionalsLoading) return <p>Loading...</p>;
  if (exercisesError || workoutsError || mealsError || professionalsError) return <p>Error: </p>;

  return (
    <div>
      <h1>Explore</h1>
      <h2>Exercises</h2>

      <h2>Workouts</h2>

      <h2>Meals</h2>

      <h2>Professionals</h2>

    </div>
  );
};

export default Explore;
