import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Nav from '../../components/Home/Nav';
import Results from '../../components/Home/Results';
import { GET_ME } from '../../utils/queries';

const ProfilePage = () => {
  const [activeType, setActiveType] = useState('profile'); // Matching key with queries object

  const queries = {
    profile: GET_ME,
  };

  const { data, error, loading } = useQuery(queries[activeType]);

  if (loading) return <div>Loading...</div>;

  if (error) {
    console.log(error);
    return <div>Error loading profile</div>;
  }

  return (
    <div class = 'profile'>
      <Nav />
      <Results activeType="person" data={data} />
    </div>
  );
};

export default ProfilePage;
