import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.jpg';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div id="hero" className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>No muscle is ever over or under-trained in our challenging Mat Pilates workouts. 
          We offer classical, modern, and innovative fusion Pilates classes that guaranteed to strengthen your abs, burn fat, and sculpt your body.
        </p>
        
      </div>
    </div>
  );
}

export default Hero;
