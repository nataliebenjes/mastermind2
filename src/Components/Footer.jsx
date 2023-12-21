import { Box, Typography } from "@mui/material";
import { shades } from "../../public/theme";
import React from "react";

const d = new Date();
let year = d.getFullYear();

const Footer = () => {

  return (
  <Box mt="30px" p="30px 0"
  backgroundColor={shades.orange[300]}>
    <Box
      width="80%"
      margin="auto"
      display="flex"
      color={shades.orange[800]}
      justifyContent="space-between"
      flexWrap="wrap"
      rowGap="30px"
      columnGap="clamp(20px, 30px, 40px)"
      >
        {/* 20% is lowest allowed value, 30% is preferred (if box is within 20% and 40%) 40% is as big as it can get */}
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
          variant="h2"
          mb="30px"
          color={shades.red[800]}
          >Natalie Benjes</Typography>
          <div>
          This app was made by Natalie Benjes. Please check out her GitHub for more projects
          </div>
        </Box>
        <Box>
        <Typography variant="h2"
          mb="30px"
          color={shades.red[800]}
          >About Mastermind</Typography>
          <Typography mb="40px">In 1971, Mordecai Meirowitz sold the rights to the game to the Milton Bradley Company, a prominent board game manufacturer. Milton Bradley rebranded the game as "Mastermind," a name that stuck and became widely recognized. The game's distinctive design featured a large, rectangular board with holes to hold pegs and a smaller section for the codebreaker's guesses.
          </Typography>
          <Typography mb="30px">Mastermind quickly gained popularity worldwide due to its simple yet challenging gameplay and the strategic thinking it required. It became a staple in many households and was embraced by enthusiasts who enjoyed its combination of logic and deduction.
          </Typography>
<         Typography>Over the years, Mastermind has seen various editions and adaptations, with different themes, colors, and variations of rules. Despite these changes, the core concept of breaking a hidden code has remained a constant, making Mastermind a timeless and enduring classic in the world of board games. Its legacy continues, and it remains a popular choice for people of all ages who enjoy testing their logical reasoning skills.</Typography>
        </Box>
        <Box>
          <Typography mb="40px">&copy; Natalie Benjes Copyright {year}</Typography>
        </Box>
      </Box>
  </Box>
  )
}

export default Footer;