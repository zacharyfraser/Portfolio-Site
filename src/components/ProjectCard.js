import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project, onClick }) {
  return (
    <div 
      className="project-card shadow-sm h-100" 
      onClick={() => onClick(project)}
      data-bs-toggle="modal" 
      data-bs-target="#projectModal"
    >
      <div className="img-wrapper">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-img" 
        />
        <div className="overlay">
            <span className="text-white h5">View Details</span>
        </div>
      </div>
      
      <div className="p-3 bg-white">
          <h5 className="mb-0">{project.title}</h5>
          <small className="text-muted">{project.category}</small>
      </div>
    </div>
  );
}

export default ProjectCard;