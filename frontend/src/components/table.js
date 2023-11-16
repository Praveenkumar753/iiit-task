// TableComponent.js
import React from 'react';
import './table.css';

const TableComponent = () => {
  const tableData = [
    { name: 'Apple', color: 'Red', description: 'These are red.', col4: 'none', col5: 'none' },
    { name: 'Pear', color: 'Green', description: 'These are green.', col4: 'none', col5: 'none' },
    { name: 'Grape', color: 'Purple / Green', description: 'These are purple and green.', col4: 'none', col5: 'none' },
    { name: 'Orange', color: 'Orange', description: 'These are orange.', col4: 'none', col5: 'none' },
    { name: 'Banana', color: 'Yellow', description: 'These are yellow.', col4: 'none', col5: 'none' },
    { name: 'Kiwi', color: 'Green', description: 'These are green.', col4: 'none', col5: 'none' },
    { name: 'Plum', color: 'Purple', description: 'These are Purple.', col4: 'none', col5: 'none' },
  ];

  return (
    <table className="fixed_headers">
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Description</th>
          <th>col4</th>
          <th>col5</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.color}</td>
            <td>{item.description}</td>
            <td>{item.col4}</td>
            <td>{item.col5}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
