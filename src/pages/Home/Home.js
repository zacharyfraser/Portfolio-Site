import React from 'react';
import './Home.css';

/* Image Imports */
import WindboundPCB from '../../assets/Windbound_PCB.png';
import MCURouting from '../../assets/MCU_Routing.png';
import DecodeLogic from '../../assets/Decode_Logic.png';
import HeroBanner from '../../components/HeroBanner/HeroBanner';

function Home() {
  return (
    <div className="container py-5">
      
      <HeroBanner />

      {/* Grid Container for the Three Squares */}
      <div className="row justify-content-center">
        
        {/* PCB Design Square */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card h-100 text-center shadow-0 border-0">
            <div className="card-body">
                <div className="gradient-border-wrapper">
                <img src={MCURouting} className="card-img-top mx-auto p-3" alt="PCB Design Icon" />
                </div>
              <h5 className="card-title">PCB Design</h5>
            </div>
          </div>
        </div>

        {/* System Integration Square */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card h-100 text-center shadow-0 border-0">
            <div className="card-body">
                <div className="gradient-border-wrapper">
                <img src={WindboundPCB} className="card-img-top mx-auto p-3" alt="System Integration Icon" />
                </div>
              <h5 className="card-title">System Integration</h5>
            </div>
          </div>
        </div>

        {/* Firmware Architecture Square */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card h-100 text-center shadow-0 border-0">
            <div className="card-body">
                <div className="gradient-border-wrapper">
                    <img src={DecodeLogic} className="card-img-top mx-auto p-3" alt="Firmware Architecture Icon" />
                </div>
              <h5 className="card-title">Firmware Architecture</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Introductory Text */}
      <p className="text-center mt-4 intro-text">
        I am a driven computer engineering student focused on embedded systems, autonomous systems, and electronics design. 
        With strong firmware development experience, I bring a systems-level understanding that strengthens hardware design 
        and integration. Recognized with the $100,000 Schulich Leader Scholarship, I approach engineering challenges with a 
        strategic mindset and a passion for building reliable, high-performance solutions.
      </p>

      {/* To Projects Button */}
      <div className="text-center mt-4">
        <a href="/projects" className="btn btn-primary btn-lg gradient-border-wrapper">View My Projects</a>
      </div>

    </div>
  );
}

export default Home;