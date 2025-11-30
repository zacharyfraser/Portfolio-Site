import React from 'react';
// Import Link for navigation within the React app
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      {/* Use a Bootstrap Navbar component.
        Classes like navbar-expand-lg, navbar-dark, and bg-dark are for styling. 
      */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* This acts as the Brand/Logo. Use Link instead of <a> */}
          <Link className="navbar-brand" to="/">
            Your Name Portfolio
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Navigation Links using Link component */}
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;