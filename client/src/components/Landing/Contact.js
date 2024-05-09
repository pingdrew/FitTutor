import React from "react";
import { Typography, Grid } from '@mui/material';

function Contact() {
  return (
    <Grid container justifyContent="center" sx={{ mb:4 }} id="Contact">
      <Grid container justifyContent="center" alignItems="center">
        <Grid>
          <Typography variant="h3" color="whitesmoke" sx={{ mt:8, mb:1 }}>
            Contact
          </Typography>
        </Grid>
      </Grid>

    <Grid container justifyContent="center" alignItems="center" sx={{ m:2}} >
      <Grid item xs={12} sm={6}>
        <Grid>
          <Grid textAlign="center">
            <Typography variant="h6">
            </Typography>
            <Typography variant="h6" color="whitesmoke">
              Email: pingdrew0@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Grid>
  );
}

export default Contact;