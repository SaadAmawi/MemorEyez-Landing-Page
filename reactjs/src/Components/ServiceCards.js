import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
  return (
  
    <div className='cards'>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src="Videos/VR.mp4"
                text="Imersive Virtual Reality Experiences"
                label='VR'
                path='/Services'/>
                <CardItem 
                src="Videos/Dash.mp4"
                text="Doctor and Caregiver Dashboards"
                label='Dashboards'
                path='/Services'/>
            </ul>
            <ul className="cards__items">
                <CardItem 
                src="Videos/Nature.mp4"
                text="Virtual Tourism Experiences"
                label='Tourism'
                path='/Services'/>
                <CardItem 
                src="Videos/AI.mp4"
                text="AI Companion and Sophisticated Machine learning models"
                label='AI'
                path='/Services'/>
                 <CardItem 
                src="Videos/Brain.mp4"
                text="Cognition tests and Cognitive enchancement games"
                label='Cognition Test'
                path='/Services'/>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
