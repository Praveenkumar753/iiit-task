// Cards.js
import React from 'react';
import './cards.css';

const Cards = () => {
  // Sample data for cards
  const cardsData = [
    {
      id: 1,
      title: 'Card 1',
      content: 'This is the content of Card 1.',
      imageUrl: 'https://th.bing.com/th/id/OIP.0tWBhyLoCOzWmiuyMxT7gwHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7', // Replace with your actual image URL
    },
    {
      id: 2,
      title: 'Card 2',
      content: 'This is the content of Card 2.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0a5NM7YXgDpG3_0FGS2Ym6FXxZE0sNtday5L7V2ToDpGuyjysyXpFlbA6mt6BKg0Sr1w&usqp=CAU', // Replace with your actual image URL
    },
    // Add more cards as needed
    {
        id: 2,
        title: 'Card 2',
        content: 'This is the content of Card 2.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0a5NM7YXgDpG3_0FGS2Ym6FXxZE0sNtday5L7V2ToDpGuyjysyXpFlbA6mt6BKg0Sr1w&usqp=CAU', // Replace with your actual image URL
      },
      {
        id: 2,
        title: 'Card 2',
        content: 'This is the content of Card 2.',
        imageUrl: 'https://th.bing.com/th/id/OIP.FHvtBkci9HUZ1bVLN8xZfwHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7', // Replace with your actual image URL
      }
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt={`Card ${card.id}`} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
