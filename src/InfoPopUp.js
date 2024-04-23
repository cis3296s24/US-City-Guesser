import React, { useState } from 'react';
import './style/InfoPopUp.css'; // Import CSS file for styling

function InfoPopUp() {
  const [displayInfo, setDisplayInfo] = useState(true);

  const toggleInfo = () => {
    setDisplayInfo(!displayInfo);
  };

  const closeInfo = () => {
    setDisplayInfo(false);
  };

  return (
    <div className="info-container">
      <button className="open-button" onClick={toggleInfo}>Info</button>
      {displayInfo && (
        <div>
          <div className="overlay" onClick={closeInfo}></div>
          <div className="info-popup">
            <button onClick={closeInfo} className="close-button">Close</button>
            <h2>Welcome to US City Guesser!</h2><br/><br/>
            <p>A random city has been chosen from the USA. To find the correct city, type a guess in the search box, click it, and hit "submit guess".</p>
            <p>A dot will appear on the map where your guess was, and the distance to the target city will be listed below the map. Use this data to find the correct city.</p>
            <p>After completeing the game, click "restart" to play again!</p>
            <p>Click on the settings button to adjust difficulty, units, and visual display options.</p>
            <p>Data retrieved from: https://simplemaps.com/data/us-cities</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoPopUp;
