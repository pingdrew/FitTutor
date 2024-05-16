import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Typography, Grid } from '@mui/material';
import badass from "../../assets/badass.jpg";
import React, { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imgRef = useRef(null);
  useEffect(() => {
    const imgElement = imgRef.current;
    // Add your gsap animation code here
  }, []);

  return (
    <div style={{ marginTop: "50px" }} id="About">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img ref={imgRef} className="img-intro" src={badass} width='100%' height='auto' alt="Workout Equipment" />
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ paddingTop: "2px", textAlign: "left" }}>
            <h3 style={{ color: "whitesmoke", margin: "1rem 0" }}>About</h3>
            <h6 style={{ color: "white" }}>
              FitTutor is a platform that easily connects fitness enthusiasts with fitness industry professionals, and provides a free and open source encyclopedia for fitness and nutrition.
            </h6>
            <h6 style={{ color: "white" }}>
              Our mission is to provide a free premium encyclopedia of fitness, and to provide a platform for professionals to connect with people.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;