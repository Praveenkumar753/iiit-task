import React from 'react';
import './footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your Gaming Website</p>
        <ul className="footer-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          {/* Add more footer links */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
