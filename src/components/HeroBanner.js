import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerImager from '../assets/assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {lg :  '212px' , sm : '70px'},
        mt: { sm : '50px'}
        
      }}
      position="relative" p="20px"
    >
      <Typography color ="#e4461c" fontWeight="600" fontSize="26px">
        Treina Fitness Club
      </Typography>
      <Typography fontWeight={700}
        sx={{
          fontSize : {lg: '44px', xs : '40px'}
        }}
      mb="23px"
      mt="30px"
      >
        Become More Healthy <br /> and Stay Sporty
      </Typography>
      <Typography fontSize="22px" lineHeight='35px' mb={4}>
        Check out most effective excercises for your body
      </Typography>
      <Button variant="contained" color="error" href='#exercises'

        sx={{
          backgroundColor: "#e4461c", 
          padding : "10px",
          fontWeight: '600'
        }}
       
      
      >Explore Excercises</Button>
      <Typography
        fontWeight={600}
        color = "#E4461C"
        sx={{
          opacity: 0.1,
          display: {lg: "block", xs: 'none'}
        }}
        fontSize= "150px"
      >
        Excercise
      </Typography>
      <img src={HeroBannerImager} className="hero-banner-img" alt="banner" />
    </Box>
  )
}

export default HeroBanner