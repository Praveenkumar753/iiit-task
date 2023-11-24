
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
       <h2>Popular games</h2>
       {<Cards/>}
       <h2>Game Details</h2>
      {<TableComponent/>}
      <h2>Gaming Statistics</h2>
       {<FourPieCharts/>}
       <h2>Feedback Form</h2>
       {<Form/>}
      {<Footer/>} 
      
    </div>
  );
}

export default App;
