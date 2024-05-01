import React from "react";
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <Container maxWidth="100%" style={{ backgroundColor: '#292a31' }} sx={{ p: 1 }}>
      <Box mt={5}>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          FitTutor
          {new Date().getFullYear()}
          {"."}
        </Typography>
        <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=2spQZ4SzDL2KSe6FKfKihWKCIurWsaNGIGystdpyYiL9yCNEdlfZF0RUWe6C"></script></span>
      </Box>
    </Container>
  );
}

export default Footer;