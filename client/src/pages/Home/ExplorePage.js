import React, { useState } from 'react';
import Nav from '../../components/Home/Nav';
import Results from '../../components/Home/Results';

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [activeType, setActiveType] = useState('exercise');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleActiveTypeChange = (type) => {
    setActiveType(type);
  };

  return (
    <div className="explore">
      <Nav />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="filter-buttons">
          <button onClick={() => handleActiveTypeChange('exercise')}>Exercises</button>
          <button onClick={() => handleActiveTypeChange('workout')}>Workouts</button>
          <button onClick={() => handleActiveTypeChange('ingredient')}>Ingredients</button>
          <button onClick={() => handleActiveTypeChange('meal')}>Meals</button>
        </div>
        <div className="filter-type">
          <select onChange={handleFilterTypeChange} value={filterType}>
            <option value="all">All</option>
            <option value="muscle">Muscle Specific</option>
            <option value="difficulty">Difficulty Level</option>
          </select>
        </div>
      </div>
      <Results searchTerm={searchTerm} filterType={filterType} activeType={activeType} />
    </div>
  );
};

export default ExplorePage;
