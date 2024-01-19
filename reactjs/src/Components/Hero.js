
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';
import {motion as m} from 'framer-motion'

  
function HeroSection() {
  
  return (
 
    <div className='hero-container'>
      <video src='/Videos/Elders.mp4' autoPlay loop muted />
      <div className='Titles'>
      <m.h1
      animate={{y:0}}
      initial={{y:"-100%"}}
      transition={{delay:0.5,duration:1.2}}>MemorEyez</m.h1>
      <m.h2
      animate={{y:0}}
      initial={{y:"120%"}}
      transition={{delay:0.5,duration:1.2}}>A Smart Approach for Managing Alzheimer's and Dementia</m.h2>
  </div>

      <m.div className='hero-btns'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1, duration: 0.8}}>
        <Button hr
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          WATCH TRAILER<i className='far fa-play-circle' />
        </Button>
        </m.div>


        <m.div className='hero-btns-download'
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{delay:1, duration: 0.8}}>
    
          <a href="https://play.google.com/store/apps?hl=en&gl=US&pli=1" tabIndex="0"><img className="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
        width="185" height="58"alt="bn45"/></a>
          <a href="https://www.apple.com/ae/app-store/" tabIndex="0"><img className="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          width="180" height="60" alt="bn45"/></a>
      </m.div>
    </div>
    
  );
}

export default HeroSection