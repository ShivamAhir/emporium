import React from 'react'
import { Button, Box, Stack ,Typography,Avatar} from '@mui/material'
import Header from './LandingPage/Header';
import Footer from './LandingPage/Footer';
import MainPage from './LandingPage/MainPage';
import About from './AboutPage/About';
import MenuPage from './Menu/MenuPage'
import BookTable from './BookTable/BookTable';

const Home = () => {
  return (


    
    <Box sx={{  bgcolor: "#F7F9F9"}}>
       <Header/>
        {/* <MainPage/> */}
        {/* <About/> */}
        {/* <MenuPage/> */}
        <BookTable/>
        <Footer/>
    </Box>
    
  )
}

export default Home
