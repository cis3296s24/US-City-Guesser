import React, { useState } from 'react';
import { getTargetCity } from './App';
import './style/InfoPopUp.css'; // Import CSS file for styling
import ShowStats from './ShowStats';

export default function GiveUpPopup({restart, difficulty}) {
  const [displayInfo, setDisplayInfo] = useState(true);

  const toggleInfo = () => {
    setDisplayInfo(!displayInfo);
  };

  const closeInfo = () => {
    setDisplayInfo(false);
  };

  //updating stats
  if (difficulty === "easy"){
    const gameCount = parseInt(localStorage.getItem('easyGameCount') ?? '0');
    localStorage.setItem('easyGameCount', (gameCount + 1).toString());
  } else if (difficulty === "medium"){
    const gameCount = parseInt(localStorage.getItem('mediumGameCount') ?? '0');
    localStorage.setItem('mediumGameCount', (gameCount + 1).toString());
  } else if (difficulty === "hard") {
    const gameCount = parseInt(localStorage.getItem('hardGameCount') ?? '0');
    localStorage.setItem('hardGameCount', (gameCount + 1).toString());
  } else {
    const gameCount = parseInt(localStorage.getItem('impossibleGameCount') ?? '0');
    localStorage.setItem('impossibleGameCount', (gameCount + 1).toString());
  }

  return (
    <div className="info-container">
      <button className="open-button" onClick={toggleInfo}>Info</button>
      {displayInfo && (
        <div>
          <div className="overlay" onClick={function() {restart(); closeInfo()}}></div>
          <div className="info-popup">
            <button onClick={function() {restart(); closeInfo()}} className="close-button">Close</button>
            <h2>Better luck next time.</h2>
            <h3>Correct answer was {getTargetCity().city}, {getTargetCity().state_id}</h3>
            <ShowStats difficulty={difficulty} />
            <button className = "non-close" onClick={function() {restart(); closeInfo()}}>Restart</button>
            
          </div>
        </div>
      )}
    </div>
  );
}