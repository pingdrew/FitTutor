import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_EXERCISES, GET_ALL_WORKOUTS, GET_ALL_INGREDIENTS, GET_ALL_MEALS } from '../../utils/queries';

const Results = ({ searchTerm, filterType, activeType }) => {
  const { loading: loadingExercises, data: exerciseData, error: exerciseError } = useQuery(GET_ALL_EXERCISES, { skip: activeType !== 'exercise' });
  const { loading: loadingWorkouts, data: workoutData, error: workoutError } = useQuery(GET_ALL_WORKOUTS, { skip: activeType !== 'workout' });
  const { loading: loadingIngredients, data: ingredientData, error: ingredientError } = useQuery(GET_ALL_INGREDIENTS, { skip: activeType !== 'ingredient' });
  const { loading: loadingMeals, data: mealData, error: mealError } = useQuery(GET_ALL_MEALS, { skip: activeType !== 'meal' });

  if (loadingExercises || loadingWorkouts || loadingIngredients || loadingMeals) {
    return <div>Loading...</div>;
  }

  if (exerciseError || workoutError || ingredientError || mealError) {
    console.error('Exercise Error:', exerciseError);
    console.error('Workout Error:', workoutError);
    console.error('Ingredient Error:', ingredientError);
    console.error('Meal Error:', mealError);
    return <div>Error loading data</div>;
  }

  console.log('Exercise Data:', exerciseData);
  console.log('Workout Data:', workoutData);
  console.log('Ingredient Data:', ingredientData);
  console.log('Meal Data:', mealData);

  const filterResults = (results) => {
    if (!results) return [];
    if (filterType === 'muscle') {
      return results.filter(result => result.targetedMuscles && result.targetedMuscles.some(muscle => muscle.toLowerCase().includes(searchTerm)));
    }
    if (filterType === 'difficulty') {
      return results.filter(result => result.difficultyLevel && result.difficultyLevel.toLowerCase().includes(searchTerm));
    }
    return results.filter(result => result.name.toLowerCase().includes(searchTerm));
  };

  const results = (() => {
    if (activeType === 'exercise') {
      return filterResults(exerciseData?.allExercises);
    }
    if (activeType === 'workout') {
      return filterResults(workoutData?.allWorkouts);
    }
    if (activeType === 'ingredient') {
      return filterResults(ingredientData?.allIngredients);
    }
    if (activeType === 'meal') {
      return filterResults(mealData?.allMeals);
    }
    return [];
  })();

  return (
    <div className="results">
      {results.length === 0 ? (
        <div>No results found</div>
      ) : (
        results.map((result) => (
          <div key={result._id} className="result-card">
            <h3>{result.name}</h3>
            {activeType === 'exercise' && (
              <>
                <p>{result.description}</p>
                <p>Type: {result.type?.name}</p>
                <p>Targeted Muscles: {result.targetedMuscles?.join(', ')}</p>
                <p>Equipment Needed: {result.equipmentNeeded}</p>
                <p>Difficulty Level: {result.difficultyLevel}</p>
                {result.photo && result.photo.map((photo, index) => <img key={index} src={photo} alt={`Exercise ${result.name}`} />)}
                {result.video && result.video.map((video, index) => <video key={index} src={video} controls />)}
              </>
            )}
            {activeType === 'workout' && (
              <>
                <p>{result.description}</p>
                <p>Duration: {result.duration} minutes</p>
                <p>Intensity Level: {result.intensityLevel}</p>
                <p>Target Audience: {result.targetAudience}</p>
                <p>Workout Type: {result.workoutType?.name}</p>
                <p>Exercises: {result.exercises?.map((exercise) => exercise.name).join(', ')}</p>
                {result.photo && result.photo.map((photo, index) => <img key={index} src={photo} alt={`Workout ${result.name}`} />)}
                {result.video && result.video.map((video, index) => <video key={index} src={video} controls />)}
              </>
            )}
            {activeType === 'ingredient' && (
              <>
                <p>Quantity: {result.quantity} {result.unit}</p>
                <p>Calories: {result.calories}</p>
                <p>Proteins: {result.proteins}</p>
                <p>Carbohydrates: {result.carbohydrates}</p>
                <p>Fats: {result.fats}</p>
                <p>Fibers: {result.fibers}</p>
                <p>Sugars: {result.sugars}</p>
                <p>Vitamins: {result.vitamins?.join(', ')}</p>
                <p>Minerals: {result.minerals?.join(', ')}</p>
              </>
            )}
            {activeType === 'meal' && (
              <>
                <p>{result.description}</p>
                <p>Calories: {result.calories}</p>
                <p>Proteins: {result.proteins}</p>
                <p>Carbohydrates: {result.carbohydrates}</p>
                <p>Fats: {result.fats}</p>
                <p>Fibers: {result.fibers}</p>
                <p>Sugars: {result.sugars}</p>
                <p>Ingredients: {result.ingredients?.map((ingredient) => ingredient.ingredientName).join(', ')}</p>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Results;
