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
      <ul>
        <li>
          <a href="#games">Games</a>
        </li>
        <li>
          <a href="#table">Charts</a>
        </li>
        <li>
          <a href="#pie">Charts</a>
        </li>
        <li>
          <a href="#form">Charts</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
