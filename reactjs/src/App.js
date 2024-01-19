import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/SignUp';
import About from './Components/Pages/About';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
// import{HashLink as Link} from 'react-router-hash-link';
import ScrollToTop from './Components/ScrollToTop';
// import HeroSection from './Components/Hero';
// import{motion as m} from 'framer-motion'
// import Footer from './Components/Footer';
// import AboutCards from './Components/AboutCards';

function App() {
  const location = useLocation();
  return (
   
      <>
      <ScrollToTop/>
        <Navbar />
        <AnimatePresence >
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Home/>} key={Router.pathName}/>
          <Route path='/Services' element={<Services/>} key={Router.pathName}/>
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/about' element={<About/>} />       
        </Routes>
        {/* <div id="home">
        <HeroSection/>
        </div>
        
      
        
        <div id="soso">
        <Services/>
        </div>

        <div id="about">
        <About/>
        </div>

  <Footer/>*/}
  
        </AnimatePresence> 
        </>
  );
}

export default App;