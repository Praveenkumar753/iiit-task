// App.js
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Form from './components/form.js';
import Cards from './components/cards';
import FourPieCharts from './components/pie';
// import './App.css'
import TableComponent from './components/table';
import Footer from './components/footer.js';
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
      {<FourPieCharts/>}
      {<Form/>}
      {<Footer/>}
      <div className="content">
        {/* Other content goes here */}
      </div>
    </div>
  );
}

export default App;
