import React, { useEffect, useState } from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { excerciseOption, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExcercises = ({setExcercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('')
 
  const [bodyParts, setBodyParts] = useState([]);


  useEffect(()=>{
    const fetchExcercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOption )
    
      setBodyParts(['all', ...bodyPartsData])
    
    }
    fetchExcercisesData();

  },[])
  const handleSearch = async () => {
    if (search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOption)
      
      const searchedExercises = exerciseData.filter(
        (exercises)=> exerciseData.name.toLowerCase().includes(search)
        || exerciseData.target.toLowerCase().includes(search)
        || exerciseData.equipment.toLowerCase().includes(search)
        || exerciseData.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExcercises(searchedExercises)
      
    }
  }
  
  return (
    <Stack alignItems='center' mt="37px" justifyContent='center' p="20px">

      <Typography fontWeight={700} 
        sx={{
          fontSize: {lg : '44px',
          xs: '30px'}
        }}
        mb="50px"
        mt="150px"
        textAlign="center"
        color="#e4461c"
      >
        The Effective Excercises For <br /> You
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input: {fontWeight: "700", border: "none", borderRadius:'5px'},
          width: {lg: '800px', xs: '350px'},
          backgroundColor: '#ffffff',
          borderRadius: '40px'
        }}
          height="76px"
          value={search}
          onChange={(e)=>{setSearch(e.target.value.toLocaleLowerCase())}}
          placeholder="Search Exercises"
        
        />
        <Button className='search-btn'
          sx={{
            bgcolor: "#e4461c",
            color: "#fff",
            textTransform: "none",
            width: {lg: "175px", xs: "80px"},
            fontSize: {lg: "20px", xs:"14px"},
            height: '56px',
            position: '50px',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>

       
      </Box>
      
      <Box sx={{
        position: 'relative',
        width: '100%',
        p: '20px'
      }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>

    </Stack>
  )
}

export default SearchExcercises