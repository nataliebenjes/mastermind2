import React from 'react';
import { Box, Typography } from "@mui/material";
import { shades } from "../../public/theme";
import "../../public/styles.css";


function Header() {
  
  return (
      <Box pt="10px"
      pb="1px"
  backgroundColor={shades.orange[400]}>
      <Typography
          variant="h1"
          mb="30px"
          color={shades.red[800]}
          >Welcome to the Mastermind Game! </Typography>
      <Typography
          variant="h2"
          mb="30px"
          color={shades.red[800]}
          >Can you crack the code? </Typography>
      </Box>    
  );
}

export default Header;

