import React from "react";
import '../../App.css';
import Footer from '../Footer'
import ServiceCards from '../ServiceCards'
import './Services.css'
import{motion as m} from 'framer-motion'


export default function Services(){
    return (
        <m.main
        initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{duration:0.84, ease:"easeOut"}}
        exit={{opacity:0.99}}
        className="apple"
    >
       
        {/*<div className="BG">*/}
     {/* <video src='/Videos/BGis.mp4' autoPlay loop muted />*/}
     <div className="services">
     <div className="hide"> 
    <m.h1  className="lol"
    animate={{y:0}}
    initial={{y:"100%"}}
    transition={{delay:0.8,duration:1.2}}>SERVICES</m.h1></div></div>
    {/*</div>*/}
        <h2 id="Service"> &nbsp; </h2>
        <ServiceCards id="Service"/>
        <Footer/>
    
    </m.main>)
}