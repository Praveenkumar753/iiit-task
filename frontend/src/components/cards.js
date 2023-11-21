import React from 'react';
import './cards.css';

// Import your images with the correct relative paths
import cardImage1 from '../assets/coc.jpeg';
import cardImage2 from '../assets/Free Fire.jpg';
import cardImage3 from '../assets/pubg.jpeg';
import cardImage4 from '../assets/car.png';

const Cards = () => {
  // Updated cards data with imported images and additional details
  const cardsData = [
    {
      id: 1,
      imageUrl: cardImage1,
      rating: 4.5,
      downloads: 5000,
      reviews: 120,
    },
    {
      id: 2,
      imageUrl: cardImage2,
      rating: 4.2,
      downloads: 7000,
      reviews: 90,
    },
    {
      id: 3,
      imageUrl: cardImage3,
      rating: 4.7,
      downloads: 3000,
      reviews: 150,
    },

    {
      id: 4,
      imageUrl: cardImage4,
      rating: 4.0,
      downloads: 10000,
      reviews: 80,
    },

  ];

  return (
    <section id="games">
    <div className="cards-container">
      
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt={`Card ${card.id}`} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            <div className="details">
              <p>Rating: {card.rating}</p>
              <p>Downloads: {card.downloads}</p>
              <p>Reviews: {card.reviews}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Cards;
