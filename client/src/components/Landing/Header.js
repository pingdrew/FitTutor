import React from 'react';

const Header = () => {
  // Inline style for the header container
  const headerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '100%', // Ensures the header is centered
    color: '#fff' // Adjust color based on your background
  };

  // Style for the main title
  const titleStyle = {
    fontFamily: 'Arial, sans-serif', // Arial is a common sans-serif font
    fontSize: '9vw',
    backgroundColor: '#fff', // Fallback color in case fill is not supported
    fontWeight: 'bold',
    color: 'gray', // Gray color for part of the title
    marginBottom: '0' // Remove default margin below h1
  };

  const highlightStyle = {
    color: '#ff69b4' // Pink color for part of the title
  };

  return (
    <div>
      <img src={require('../../assets/hero.png')} style={{ width: '100vw', height: '100vh', backgroundAttachment: 'fixed', objectFit: 'cover' }} />
      <header style={headerStyle}>
        <h1 style={titleStyle}>
          FIT<span style={highlightStyle}>TUTOR</span>
        </h1>
        <div>
          <a href="#About"><button>About</button></a>
          <a href="#Contact"><button>Contact</button></a>
          <a href="#"><button href="#">Join</button></a>
          <a href="#"><button href="#">Home</button></a>
        </div>
      </header>
    </div>
  );
};

export default Header;
