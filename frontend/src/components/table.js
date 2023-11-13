// TableComponent.js
import React from 'react';
import './table.css'; // You can create a separate CSS file for styling if needed

const TableComponent = () => {
  // Sample data for the table
  const tableData = [
    { name: 'Apple', color: 'Red', description: 'These are red.' },
    { name: 'Pear', color: 'Green', description: 'These are green.' },
    { name: 'Grape', color: 'Purple / Green', description: 'These are purple and green.' },
    { name: 'Orange', color: 'Orange', description: 'These are orange.' },
    { name: 'Banana', color: 'Yellow', description: 'These are yellow.' },
    { name: 'Kiwi', color: 'Green', description: 'These are green.' },
    { name: 'Plum', color: 'Purple', description: 'These are Purple.' },
  ];

  return (
    <table className="fixed_headers">
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.color}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
