import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/friends">Friends</Link></li>
        <li><Link to="/create">Create</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
