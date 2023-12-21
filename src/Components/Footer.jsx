import { Box, Typography, Grid } from "@mui/material";
import { shades } from "../../public/theme";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

const d = new Date();
let year = d.getFullYear();

const Footer = () => {
  return (
    <Box mt="0px" p="30px 0" backgroundColor={shades.teal[800]}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        color={shades.orange[100]}
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box width="100%">
              <Typography variant="h2" mb="30px" color={shades.orange[100]}>
                Natalie Benjes
              </Typography>
              <Typography>
                This app was made by Natalie Benjes. Check out her GitHub <GitHubIcon onClick={() => window.location.href = "https://github.com/nataliebenjes/crochet-e-commerce/blob/main/client/src/scenes/global/footer.jsx"} 
                style={{ cursor: 'pointer' }}/> 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box width="100%">
              <Typography variant="h2" mb="30px" color={shades.orange[100]}>
                About Mastermind
              </Typography>
              <Typography mb="40px">
                In 1971, Mordecai Meirowitz sold the rights to the game to the
                Milton Bradley Company, a prominent board game manufacturer.
                Milton Bradley rebranded the game as "Mastermind," a name that
                stuck and became widely recognized.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography mb="40px">
            &copy; Natalie Benjes Copyright {year}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
