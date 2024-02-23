import React from 'react'
import { Button, Box, Stack ,Typography,Avatar} from '@mui/material'
import Header from './LandingPage/Header';
import Footer from './LandingPage/Footer';
import MainPage from './LandingPage/MainPage';
import About from './AboutPage/About';
import MenuPage from './Menu/MenuPage'
import BookTable from './BookTable/BookTable';
import ContactPage from './ContactPage/ContactPage'
import LoginAction from './LoginAction/LoginAction';

const Home = () => {
  return (


    
    <Box sx={{  bgcolor: "#F7F9F9"}}>
       <Header/>
       <LoginAction/>
        <MainPage/>
        {/* <About/> */}
        {/* <MenuPage/> */}
        {/* <BookTable/> */}
        {/* <ContactPage/> */}
        <Footer/>
    </Box>
    
  )
}

export default Home
