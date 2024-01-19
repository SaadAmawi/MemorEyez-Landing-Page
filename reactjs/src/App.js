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

function App() {
  const location = useLocation();
  return (
   
      <>
        <Navbar />
        <AnimatePresence >
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Home/>} key={Router.pathName}/>
          <Route path='/services' element={<Services/>} key={Router.pathName}/>
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/about' element={<About/>} />       
        </Routes>
        </AnimatePresence>
        </>
  );
}

export default App;