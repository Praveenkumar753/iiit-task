// Navbar.js
import React from 'react';
import SearchBar from './searchbar'; // Import the SearchBar component
import './navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        &#9776;
      </button>
      <div className="brand">Your Brand</div>
      <SearchBar /> {/* Include the SearchBar component within the Navbar */}
    </div>
  );
};

export default Navbar;
