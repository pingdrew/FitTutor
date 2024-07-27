import React from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_ITEMS } from '../utils/queries';
import ExerciseCard from './ExerciseCard';
import MealCard from './MealCard';
import IngredientCard from './IngredientCard';
import WorkoutCard from './WorkoutCard';

const SearchResults = ({ searchQuery }) => {
  const { loading, data } = useQuery(SEARCH_ITEMS, {
    variables: { searchQuery }
  });

  if (loading) return <p>Loading...</p>;

  const { exercises, meals, ingredients, workouts } = data.searchItems;

  return (
    <div>
      <h2>Search Results</h2>
      <div>
        <h3>Exercises</h3>
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise._id} exercise={exercise} />
        ))}
      </div>
      <div>
        <h3>Meals</h3>
        {meals.map((meal) => (
          <MealCard key={meal._id} meal={meal} />
        ))}
      </div>
      <div>
        <h3>Ingredients</h3>
        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient._id} ingredient={ingredient} />
        ))}
      </div>
      <div>
        <h3>Workouts</h3>
        {workouts.map((workout) => (
          <WorkoutCard key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
