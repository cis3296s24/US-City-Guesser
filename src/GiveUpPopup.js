import React, { useState } from 'react';
import { getTargetCity } from './App';
import './style/InfoPopUp.css'; // Import CSS file for styling

export default function GiveUpPopup({restart}) {
  const [displayInfo, setDisplayInfo] = useState(true);

  const toggleInfo = () => {
    setDisplayInfo(!displayInfo);
  };

  const closeInfo = () => {
    setDisplayInfo(false);
  };

  return (
    <div className="info-container">
      {console.log("TEST")}
      <button className="open-button" onClick={toggleInfo}>Info</button>
      {displayInfo && (
        <div>
          <div className="overlay" onClick={closeInfo}></div>
          <div className="info-popup">
            <button onClick={closeInfo} className="close-button">Close</button>
            <h2>Better luck next time.</h2>
            <h3>Correct answer was {getTargetCity().city}, {getTargetCity().state_id}</h3>
            <button onClick={function() {restart(); closeInfo()}}>Restart</button>
            
          </div>
        </div>
      )}
    </div>
  );
}