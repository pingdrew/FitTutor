import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PERSONS } from '../utils/queries';

const Friends = () => {
  const { loading, error, data } = useQuery(GET_ALL_PERSONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Friends</h1>
      {data.allPersons.map(person => (
        <div key={person._id}>
          <h3>{person.username}</h3>
          <button>Unfollow</button>
        </div>
      ))}
    </div>
  );
};

export default Friends;
