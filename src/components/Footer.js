import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedInUrl = "www.linkedin.com/in/zach-fraser"; 

  return (
    <footer className="bg-light text-dark text-center py-3 custom-bottom-footer">
      <div className="container">
        
        <p className="mb-1">
          Connect with me on
          <a 
            href={`https://${linkedInUrl}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-dark mx-2"
          >
            LinkedIn
          </a>
        </p>
        <p className="mb-1">
          &copy; {currentYear} Zachary Fraser. All Rights Reserved. |&nbsp;
          <a href="https://www.flaticon.com/free-icons/hardware" title="hardware icons">Hardware icons created by meaicon - Flaticon</a>
          
        </p>
      </div>
    </footer>
  );
}

export default Footer;