// TableComponent.js
import React from 'react';
import './table.css';

const TableComponent = () => {
  const tableData = [
    { Game: 'free fire max',rating: 'Red', reviews: 'These are red.', downloads: 'none', ratedfor: 'none' },
    { Game: 'free fire max',rating: 'Red', reviews: 'These are red.', downloads: 'none', ratedfor: 'none' },
    { Game: 'free fire max',rating: 'Red', reviews: 'These are red.', downloads: 'none', ratedfor: 'none' },
    { Game: 'free fire max',rating: 'Red', reviews: 'These are red.', downloads: 'none', ratedfor: 'none' },
    { Game: 'free fire max',rating: 'Red', reviews: 'These are red.', downloads: 'none', ratedfor: 'none' },
    { Game: 'free fire max',rating: 'Red', reviews: 'These are red.', downloads: 'none', ratedfor: 'none' },
    { Game: 'free fire max',rating: 'Red', reviews: 'These are red.', downloads: 'none', ratedfor: 'none' },
    { Game: 'free fire max',rating: 'Red', reviews: 'These are red.', downloads: 'none', ratedfor: 'none' },
  ];

  return (
    <section id="table">
    <table className="fixed_headers">
      <thead>
        <tr>
          <th>Game</th>
          <th>rating</th>
          <th>reviews</th>
          <th>downloads</th>
          <th>rated for</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.Game}</td>
            <td>{item.rating}</td>
            <td>{item.reviews}</td>
            <td>{item.downloads}</td>
            <td>{item.ratedfor}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
  );
};

export default TableComponent;
