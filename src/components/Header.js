import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/chip.png';
import './Header.css';

function Header() {
  return (
    <header className="mb-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid container">
            <Link to="/" className="me-2 d-flex align-items-center">
                <img
                    src={Logo}
                    alt="Circuit Chip Logo"
                    width="48"
                    height="48"
                    className="d-inline-block align-Centre"
                />
            </Link>
          <Link className="navbar-brand text-gradient" to="/">
            Zachary Fraser
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

          <div className="collapse navbar-collapse text-gradient" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">Resume</Link>
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