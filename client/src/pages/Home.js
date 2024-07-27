import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to FitTutor</h1>
      <nav>
        <Link to="/explore">Explore</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/create">Create</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
  );
};

export default Home;
