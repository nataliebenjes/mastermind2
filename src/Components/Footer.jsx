import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../public/theme";
import React from "react";


const Footer = () => {
  const {
    palette: { yellow },
  } = useTheme();
  return (
  <Box mt="30px" p="30px 0"
  backgroundColor={shades.orange[100]} >
    <Box
      width="80%"
      margin="auto"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      rowGap="30px"
      columnGap="clamp(20px, 30px, 40px)"
      >
        {/* 20% is lowest allowed value, 30% is preferred (if box is within 20% and 40%) 40% is as big as it can get */}
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
          variant="h2"
          fontWeight="bold"
          mb="30px"
          color={shades.red[800]}
          >Natalie Benjes</Typography>
          <div>
          This app was made by Natalie Benjes. Please check out her GitHub for more projects
          </div>
        </Box>
        <Box>
          <Typography variant="h2" fontWeight="bold"
          mb="30px"
          color={shades.red[800]}
          >
            About us:
          </Typography>
          <Typography mb="20px">Careers</Typography>
          <Typography mb="20px">FAQ</Typography>
          <Typography mb="20px">Track Your Order</Typography>
          <Typography mb="20px">Returns & Refund</Typography>
        </Box>
        <Box>
        <Typography variant="h2" fontWeight="bold"
          mb="30px"
          color={shades.red[800]}
          >Contact Us</Typography>
          <Typography mb="40px">5097 Store-address-in-PDX Portland, OR</Typography>
          <Typography mb="30px">email: adventure.crochet@gmail.com</Typography>
        </Box>
        <Box>
          <Typography 
          variant="h2"
          width="clamp(20%, 25%, 30%)">Our Credo:</Typography>
          <Typography mb="40px">Fun, function, and fab. We say yes way to intentional products.</Typography>
        </Box>
      </Box>
  </Box>
  )
}

export default Footer;