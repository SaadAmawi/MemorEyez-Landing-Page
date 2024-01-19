import React from 'react';
import '../../App.css';
import Form from '../Form';
import Footer from '../Footer'
import './SignUp.css'
import {motion as m }from 'framer-motion'

export default function SignUp() {
  return (
    <m.div
    initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{duration:0.84, ease:"easeOut"}}
        exit={{opacity:0.99}}
        className='apples2'>
  <div className="sign-up">
     <div className="hide"> 
    <m.h1  className="singup-txt"
    animate={{y:0}}
    initial={{y:"100%"}}
    transition={{delay:0.8,duration:1.2}}>SIGN UP FOR THE NEWSLETTER BELOW</m.h1></div></div>
  <Form/>
  <Footer/>
  </m.div>
  
  )
}