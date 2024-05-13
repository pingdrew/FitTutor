import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Make sure to import the CSS for styling

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="toggle-button" onClick={toggleNav}>
                <i className={`fas ${isOpen ? 'fa-compress' : 'fa-expand'}`}></i>
                <h1>FitTutor</h1>
            </div>
            <div className={`navbar ${isOpen ? 'open' : 'closed'}`}>
                <div className="nav-items">
                    <Link to="/home" className="nav-item">
                        <i className="fas fa-home"></i>
                        {isOpen && <span>Home</span>}
                    </Link>
                    <Link to="/explore" className="nav-item">
                        <i className="fas fa-compass"></i>
                        {isOpen && <span>Explore</span>}
                    </Link>
                    <Link to="/profile" className="nav-item">
                        <i className="fas fa-user"></i>
                        {isOpen && <span>Profile</span>}
                    </Link>
                    <Link to="/friends" className="nav-item">
                        <i className="fas fa-users"></i>
                        {isOpen && <span>Friends</span>}
                    </Link>
                    <Link to="/chat" className="nav-item">
                        <i className="fas fa-comments"></i>
                        {isOpen && <span>Chat</span>}
                    </Link>
                    <Link to="/saved" className="nav-item">
                        <i className="fas fa-bookmark"></i>
                        {isOpen && <span>Saved</span>}
                    </Link>
                    <Link id='exit' to="/" className="nav-item">
                        <i className="fas fa-bookmark"></i>
                        {isOpen && <span>Exit</span>}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
