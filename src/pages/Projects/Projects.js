import React, { useState } from 'react';
import './Projects.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const projectData = [
  
  {
    id: 1,
    title: "Brushless Motor Driver",
    category: "Hardware",
    image: require('../../assets/projects/Brushless_Controller.jpg'),
    description: "Designed a custom PCB for closed-loop position control of a linear rail controlled by \
    a brushless DC motor. The board uses an STM32 microcontroller to implement a PID control loop, \
    reading position feedback from a magnetic linear encoder, motor pole transitions from hall sensors, \
    and driving the motor through a three-phase BLDC driver. The board communicates over a VCOM port to a host computer. \
    The host computer runs a custom Python GUI to configure motion trajectories in real time.",
    tech: ["Altium Designer", "STM32", "Python"],
    link: "#" /* Replace # with project link when available */
  },
  {
    id: 2,
    title: "Autonomous Sailboat PCB",
    category: "Hardware/Firmware",
    image: require('../../assets/projects/Windbound_PCB.png'),
    description: "Designed a custom PCB for Dalhousie University's Autonomous Sailboat team. \
    This board forwards sensor data about wind speed, GPS coordinates, and boat orientation to \
    a Raspberry Pi which controls the sailboat's navigation. The PCB then receives mast and rudder\
    sentpoints from the Pi and uses magnetic feedback through PID to actuate motors accordingly. The \
    board also communicates over 2.4 GHz RF to a base station for remote monitoring and control.",
    tech: ["Fusion 360", "C", "FreeRTOS"],
    link: "#" /* Replace # with project link when available */
  },
  {
    id: 3,
    title: "UART Message Hub",
    category: "Hardware/Firmware",
    image: require('../../assets/projects/UART_Forwarder_Top.png'),
    description: "Designed a small PCB to route messages from multiple sensors to a single UART interface. \
    This board uses an STM32 microcontroller to read data from up to four UART sensors and forwards \
    the data to a host microcontroller over a single UART interface. The board uses a simple \
    message protocol to identify the source of each message, allowing the host to easily parse \
    and process the incoming data. This board was used with a previous version of the Autonomous Sailboat project, \
    where the main microcontroller had limited UART interfaces available.",
    tech: ["EasyEDA", "C", "STM32"],
    link: "#" /* Replace # with project link when available */
  },
  /* Add more projects here */
];

function Projects() {
  /* State to handle the modal data */
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 display-4 fw-bold text-gradient">My Projects</h2>
      
      {/* Project Grid */}
      <div className="row g-4">
        {projectData.map((project) => (
          <div key={project.id} className="col-12 col-md-6 col-lg-4">
            
            <ProjectCard 
              project={project} 
              onClick={setSelectedProject} 
            />

          </div>
        ))}
      </div>

      {/* Project Modal */}
      <div className="modal fade" id="projectModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            {selectedProject && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="img-fluid mb-3 rounded w-100" 
                    style={{ objectFit: 'cover' }}
                  />
                  <p className="lead">{selectedProject.description}</p>
                  
                  <h6 className="mt-4">Technologies Used:</h6>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="badge bg-secondary">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-footer">
                  {/* Todo: Uncomment to add links to dedicated project pages
                  <a href={selectedProject.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                    View Project
                  </a>
                  */}
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;