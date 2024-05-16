import React from 'react';
import Header from '../../components/Landing/Header';
import Footer from '../../components/Landing/Footer';
import Contact from '../../components/Landing/Contact';
import About from '../../components/Landing/About';

const Landing = () => {
  return (
    <div className="landing">
      <Header/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Landing;