import React from 'react';
import './HeroBanner.css';

import circuitBackground from '../assets/Circuit_Background.png'; 

function HeroBanner() {
  const heroStyle = {
    backgroundImage: `url(${circuitBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="hero-banner-container" style={heroStyle}>
      
      <div className="container hero-content-wrapper">

        <h1 className="hero-title text-white">
          ZACHARY FRASER | Embedded Systems Portfolio
        </h1>
      </div>
    </div>
  );
}

export default HeroBanner;