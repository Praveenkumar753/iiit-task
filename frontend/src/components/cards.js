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
      imageUrl: 'https://th.bing.com/th/id/R.ca82cc6b517837a040ac66c78ee1d846?rik=WvZug3yko%2fHzAQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f05%2fClash-Of-Clans-HD-iphone.jpg&ehk=eyV8zmLaDOIEhlCDB%2f0qn%2fbaZQmC6ohcHksAb8bxKYk%3d&risl=&pid=ImgRaw&r=0', // Replace with your actual image URL
    },
    {
      id: 2,
      title: 'Card 2',
      content: 'This is the content of Card 2.',
      imageUrl: 'https://4.bp.blogspot.com/-ZeXP4ow1uT0/XFKs37PYR_I/AAAAAAAAVGc/Rbs_2BXgLpEB6x6LPykKaLzQkC8q2o55QCK4BGAYYCw/s1600/Free%2BFire_%2BBattlegrounds.jpg',
    },
    // Add more cards as needed
    {
        id: 3,
        title: 'Card 2',
        content: 'This is the content of Card 2.',
        imageUrl: 'https://1.bp.blogspot.com/--kXXb_w4HyQ/XpaFTmA38WI/AAAAAAAAC-M/gjf827l9j6MOVPHOq7lFQiXFwrgch3fHgCLcBGAsYHQ/s1600/5bc5e3a0e8ea1.png',
      },
      {
        id: 4,
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
