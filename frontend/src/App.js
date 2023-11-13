// App.js
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
// import SearchBar from './components/searchbar';
import Cards from './components/cards';
import './App.css'
import TableComponent from './components/table';
function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      {/* <SearchBar /> */}
      {<Cards/>}
      {<TableComponent/>}
      <div className="content">
        {/* Other content goes here */}
      </div>
    </div>
  );
}

export default App;
