import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await axios.get('/api/users/profile');
      setUser(response.data);
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      <img src={user.profilePicture} alt={user.username} />
      <h2>Email: {user.email}</h2>
      <h2>Posts:</h2>
      {/* Render user's posts here */}
    </div>
  );
};

export default Profile;
