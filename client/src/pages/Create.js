import React from 'react';
import { Link } from 'react-router-dom';

const Create = () => {
  return (
    <div>
      <h1>Create</h1>
      <nav>
        <Link to="/create/exercise">Create Exercise</Link>
        <Link to="/create/workout">Create Workout</Link>
        <Link to="/create/ingredient">Create Ingredient</Link>
        <Link to="/create/meal">Create Meal</Link>
      </nav>
    </div>
  );
};

export default Create;
