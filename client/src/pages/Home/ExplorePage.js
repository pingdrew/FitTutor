import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Nav from '../../components/Home/Nav';
import Results from '../../components/Home/Results';
import {
  GET_ALL_EXERCISES,
  GET_ALL_WORKOUTS,
  GET_ALL_INGREDIENTS,
  GET_ALL_MEALS
} from '../../utils/queries';

const ExplorePage = () => {
  const [activeType, setActiveType] = useState('exercise');
  const [navOpen, setNavOpen] = useState(false);

  const queries = {
    exercise: GET_ALL_EXERCISES,
    workout: GET_ALL_WORKOUTS,
    ingredient: GET_ALL_INGREDIENTS,
    meal: GET_ALL_MEALS
  };

  const { data, error, loading } = useQuery(queries[activeType]);

  const handleActiveTypeChange = (type) => {
    setActiveType(type);
  };

  return (
    <div className={`explore ${navOpen ? 'open' : 'closed'}`}>
      <Nav onToggle={() => setNavOpen(!navOpen)} />
      <div className="content">
        <div className="filter-buttons">
          <button onClick={() => handleActiveTypeChange('exercise')}>Exercises</button>
          <button onClick={() => handleActiveTypeChange('workout')}>Workouts</button>
          <button onClick={() => handleActiveTypeChange('ingredient')}>Ingredients</button>
          <button onClick={() => handleActiveTypeChange('meal')}>Meals</button>
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>Error loading data</div>}
        {data && <Results activeType={activeType} data={data} />}
      </div>
    </div>
  );
};

export default ExplorePage;
