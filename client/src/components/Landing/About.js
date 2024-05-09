import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Typography, Grid } from '@mui/material';
import badass from "../../assets/badass.jpg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imgRef = useRef(null);

  useEffect(() => {
    const imgElement = imgRef.current;

    gsap.from(imgElement, {
      x: -500,
      duration: 2.5,
      opacity: 0,
      scrollTrigger: {
        trigger: imgElement,
        toggleActions: "restart",
      },
    });
  }, []);

  return (
    <Grid container direction="row" style={{ marginTop: "50px" }} id="About">
      <Grid container item xs={12} md={6} alignItems="center" justifyContent="center" sx={{ px: 2 }}>
        <img ref={imgRef} className="img-intro" src={badass} width='100%' height='auto' alt="Workout Equipment" />
      </Grid>
      <Grid container item xs={12} md={6} alignItems="center" justifyContent="center" sx={{ px: 2 }}>
        <Grid sx={{ pt: 2 }} textAlign='left'>
          <Typography variant="h3" color="whitesmoke" sx={{ my: 1 }}>
            About
          </Typography>
          <Typography variant="h6" color="white">
            FitTutor is a platform that easily connects fitness enthusiasts with fitness industry professionals, and provides a free and open source encyclopedia for fitness and nutrition.
          </Typography>
          <Typography variant="h6" color="white">
            Our mission is to provide a free premium encyclopedia of fitness, and to provide a platform for professionals to connect with people.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;