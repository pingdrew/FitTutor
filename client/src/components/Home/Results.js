import React from 'react';
import './Results.css';

const Results = ({ activeType, data }) => {
  const results = (() => {
    switch (activeType) {
      case 'exercise':
        return data?.allExercises || [];
      case 'workout':
        return data?.allWorkouts || [];
      case 'ingredient':
        return data?.allIngredients || [];
      case 'meal':
        return data?.allMeals || [];
      case 'profile':
        return data?.me ? [data.me] : []; // Wrap in an array to handle it similarly
      default:
        return [];
    }
  })();

  return (
    <div className="results">
      {results.length === 0 ? (
        <div>No results found</div>
      ) : (
        results.map((result) => (
          <div key={result._id} className="result-card">
            {activeType === 'exercise' && (
              <>
                <img src={result.photo && result.photo[0]} alt={`Exercise ${result.name}`} />
                <h3>{result.name}</h3>
                <p>{result.description}</p>
                <p>Type: {result.type?.name}</p>
                <p>Targeted Muscles: {result.targetedMuscles?.join(', ')}</p>
                <p>Equipment Needed: {result.equipmentNeeded}</p>
                <p>Difficulty Level: {result.difficultyLevel}</p>
                {result.video && result.video.map((video, index) => (
                  <video key={index} src={video} controls />
                ))}
              </>
            )}
            {activeType === 'workout' && (
              <>
                <img src={result.photo && result.photo[0]} alt={`Workout ${result.name}`} />
                <h3>{result.name}</h3>
                <p>{result.description}</p>
                <p>Duration: {result.duration} minutes</p>
                <p>Intensity Level: {result.intensityLevel}</p>
                <p>Target Audience: {result.targetAudience}</p>
                <p>Workout Type: {result.workoutType?.name}</p>
                <p>Exercises: {result.exercises?.map((exercise) => exercise.name).join(', ')}</p>
                {result.video && result.video.map((video, index) => (
                  <video key={index} src={video} controls />
                ))}
              </>
            )}
            {activeType === 'ingredient' && (
              <>
                <h3>{result.ingredientName}</h3>
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
                <img src={result.photo && result.photo[0]} alt={`Meal ${result.name}`} />
                <h3>{result.name}</h3>
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
            {activeType === 'profile' && (
              <>
                <h3>{result.username}'s Profile</h3>
                <p><strong>Email:</strong> {result.email}</p>
                <p><strong>Phone:</strong> {result.phone}</p>
                <p><strong>Age:</strong> {result.age}</p>
                <p><strong>About:</strong> {result.about}</p>
                <p><strong>Role:</strong> {result.role}</p>
                <p><strong>Specializations:</strong> {result.specializations?.join(', ')}</p>
                <p><strong>Certifications:</strong> {result.certifications?.join(', ')}</p>
                <div className="friends-section">
                  <h2>Friends</h2>
                  <ul>
                    {result.friends.map((friend) => (
                      <li key={friend._id}>{friend.username} ({friend.email})</li>
                    ))}
                  </ul>
                </div>
                <div className="reviews-section">
                  <h2>Reviews</h2>
                  <ul>
                    {result.reviews.map((review) => (
                      <li key={review._id}>
                        <p><strong>Rating:</strong> {review.rating}</p>
                        <p>{review.messageContent}</p>
                        <p><em>{new Date(review.timeStamp).toLocaleDateString()}</em></p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Results;
