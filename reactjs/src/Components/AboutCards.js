import React from 'react'
import AboutItem from './AboutItem'
import './About.css'

function AboutCards() {
  return (

    
        <div className="about__container">
        <div className="about__wrapper">
        <ul className='about_items'> 
      <AboutItem
        texts="Motivation"
        // icon="fa-solid fa-brain"
        text="Currently, a concerning 22% of individuals aged 50 and older are suffering from Alzheimer's disease (AD) and dementia [1]. Additionally, dementia has emerged as the fifth leading cause of death worldwide. Moreover, brain disorders can lead to other mental health issues, including feelings of isolation, loneliness, compromised well-being, cognitive decline, and depression."/>
      <AboutItem
        texts="Vision"
        // icon="fa-regular fa-eye"
        text="Virtual Reality (VR), mobile applications, and sensors, have revolutionized the way we approach health diagnosis and monitoring. In this project, we are proposing a secure and smart virtual reality system specifically designed to assist senior citizens dealing with Alzheimer's and dementia."/>
           <AboutItem
        texts="Scope"
        // icon="fa-solid fa-lightbulb"
        text="Our system integrates immersive virtual reality (VR) experiences, voice recognition, and Artificial Intelligence (AI) algorithms to provide comprehensive support for individuals affected by Alzheimer's and dementia. This innovative solution significantly enhances the quality of life for senior citizens by encouraging cognitive activity, alleviating isolation, and promoting independence. "/>
     </ul>
     </div>
    </div>
    
  )
}

export default AboutCards
