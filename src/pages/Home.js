import React from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExcercises from '../components/SearchExcercises'
import Exercises from '../components/Exercises'
const Home = () => {
  return (
   <Box>
      <HeroBanner />
      <SearchExcercises />
      <Exercises /> 

   </Box>
  )
}

export default Home