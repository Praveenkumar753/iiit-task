// Sidebar.js
import React from 'react';
import './sidebar.css';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const sidebarClass = isOpen ? 'sidebar open' : 'sidebar';

  return (
    <div className={sidebarClass}>
      <button className="close-btn" onClick={closeSidebar}>
        &times;
      </button>
      {/* Sidebar content goes here */}
    </div>
  );
};

export default Sidebar;
