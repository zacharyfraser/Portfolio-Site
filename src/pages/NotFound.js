import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 text-danger">404</h1>
      <p className="lead">The page you are looking for does not exist.</p>
    
      <p className="mt-4">
        <Link to="/" className="btn btn-primary btn-lg">
          Go to Home Page
        </Link>
      </p>
    </div>
  );
}

export default NotFound;