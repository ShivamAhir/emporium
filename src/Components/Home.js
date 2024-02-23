import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './LandingPage/Header';
import Footer from './LandingPage/Footer';
import MainPage from './LandingPage/MainPage';
import About from './AboutPage/About';
import MenuPage from './Menu/MenuPage';
import BookTable from './BookTable/BookTable';
import ContactPage from './ContactPage/ContactPage';
import LoginAction from './LoginAction/LoginAction';

const Home = () => {
  return (
    <Box sx={{ bgcolor: '#F7F9F9' }}>
     
      <Router>
      <Header  />
        <LoginAction />
        <Routes>
          <Route path="/" element={<MainPage />} />
            <Route path="about" element={<About />} />
            <Route path="menupage" element={<MenuPage />} />
            <Route path="booktable" element={<BookTable />} />
            <Route path="contactpage" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
};

export default Home;
