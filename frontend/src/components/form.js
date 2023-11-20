import React, { useState } from 'react';
import './form.css'; // Import CSS file

const Form = () => {
  const [selectedGame, setSelectedGame] = useState(''); // State for selected game
  const [rating, setRating] = useState(0); // State for rating
  const [playerName, setPlayerName] = useState(''); // State for player's name
  const [platform, setPlatform] = useState(''); // State for platform

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with form data (e.g., send to backend)
    console.log(`Submitted: Game - ${selectedGame}, Rating - ${rating}, Player - ${playerName}, Platform - ${platform}`);
  };

  return (
    <div className="form-container">
      <h2>Rate Your Favorite Game</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="gameSelect">Select a Game:</label>
          <select
            id="gameSelect"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            <option value="">Select a game...</option>
            <option value="Game 1">Game 1</option>
            <option value="Game 2">Game 2</option>
            {/* Add more options for games */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="rating">Your Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="playerName">Your Name:</label>
          <input
            type="text"
            id="playerName"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="platform">Platform Played On:</label>
          <input
            type="text"
            id="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          />
        </div>
        <button type="submit">Submit Rating</button>
      </form>
    </div>
  );
};

export default Form;
