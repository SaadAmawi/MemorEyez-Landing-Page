import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function AboutItem(props) {
    return (
        
        
       
        <li className="about_items">
        <Link className="about__item__link" to={props.path}>
               { /*<image src={props.src}   alt="VR Image" className="cards__item__img"  />*/}

                <div className="about__item__info">
                    <div className='Head'>
                    <i className="about__item__icon" class={props.icon}/>
                <h1 className="about__item__headertxt">{props.texts}</h1>
</div>
                
                <p className="about__item__text">{props.text}</p>
                </div>
                </Link>
        </li>
       
    
      )
}

export default AboutItem
