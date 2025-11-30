import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedInUrl = "www.linkedin.com/in/zach-fraser"; 

  return (
    <footer className="bg-dark text-white text-center py-3 fixed-bottom">
      <div className="container">
        
        <p className="small mb-1">
          Connect with me on
          <a 
            href={`https://${linkedInUrl}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white mx-2"
          >
            LinkedIn
          </a>
        </p>
        <p className="mb-1">
          &copy; {currentYear} Zachary Fraser. All Rights Reserved.
        </p>
        
      </div>
    </footer>
  );
}

export default Footer;