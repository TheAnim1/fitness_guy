import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcerciseDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Box width='400' sx={{width: {xl: '1448px'}}} m= "auto">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercise/:id' element={<ExcerciseDetail/>}/>
        </Routes>
        <Footer/>
      
    </Box>
  );
}

export default App;
