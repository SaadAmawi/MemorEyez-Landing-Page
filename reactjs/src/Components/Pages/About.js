import React from 'react';
import '../../App.css';
import Footer from '../Footer'
import AboutCards from '../AboutCards';
import {motion as m} from 'framer-motion'
import './Home.css'
 
export default function About() {
  return (
   <m.div
        initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{duration:0.84, ease:"easeOut"}}
        exit={{opacity:0.99}}
        className='apples'

        >
  <div className="about">
     <div className="hide"> 
    <m.h1  className="lol"
    animate={{y:0}}
    initial={{y:"100%"}}
    transition={{delay:0.8,duration:1.2}}>ABOUT</m.h1></div></div>

        <h2 id="AboutSection">&nbsp;</h2>
           <AboutCards/>
          <Footer/>  
          
            
            </m.div>)
}