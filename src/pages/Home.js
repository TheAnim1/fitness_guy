import React, { useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExcercises from '../components/SearchExcercises'
import Exercises from '../components/Exercises'
const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
   const [exercises, setExercises] = useState([]);
  return (
   <Box>
      <HeroBanner />
      <SearchExcercises setExcercises={setExercises}
      bodyPart= {bodyPart}
      setBodyPart= {setBodyPart}
      />
      <Exercises setExcercises={setExercises}
      bodyPart= {bodyPart}
      setBodyPart= {setBodyPart}
      /> 

   </Box>
  )
}

export default Home