import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Footer from '../Footer'
import{motion as m} from 'framer-motion'
import './Home.css'

function Home(){
    return (
        <m.div
        initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{duration:0.84, ease:"easeOut"}}
        exit={{opacity:0.99}}
        className='apples'

        >
           
        <Hero/>       
        
        <Footer/>
        </m.div>
    )
}

export default Home;