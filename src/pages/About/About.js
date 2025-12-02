import React from 'react';
import cool_dude from '../../assets/cool_dude.jpg';
import './About.css';

function About() {
  return (
    <div>
      <div className="container py-5">
        <img
          src={cool_dude}
          alt="Zachary Fraser"
          className="rounded-circle mb-4 "
          width="300"
          height="300"
        />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm Zachary Fraser, a passionate computer engineering student with a focus on embedded systems, 
            autonomous systems, and electronics design. I have a strong background in firmware development and a 
            systems-level understanding that enhances my hardware design and integration skills. I am honored to be a recipient
            of the $100,000 Schulich Leader Scholarship, which recognizes my dedication to leadership and excellence in STEM fields.
          </p>
          <p>
            My journey in computer engineering has been marked by hands-on experience in designing and implementing 
            complex systems. Many of my projects involve 'full stack' embedded development, where I take a project
            from concept to completion, handling everything from PCB design to firmware programming and system integration.
          </p>
          <p>
            Outside of engineering, I am a musician and orchestral percussionist with a long history of performing in diverse concert 
            settings across the country. I have worked with dozens of ensembles, ranging from small chamber groups to large symphony orchestras, 
            and have experience in both live performance and studio recording.
          </p>
          <p>
            Thank you for visiting my site. I look forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;