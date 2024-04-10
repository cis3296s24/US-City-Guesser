import React, { useState } from 'react';
import './InfoPopUp.css'; // Import CSS file for styling

function InfoPopUp() {
  const [displayInfo, setDisplayInfo] = useState(false);

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
            <h2>Welcome to US City Guesser!</h2>
            <p>This is a work in progress.</p>
            <p>A random city has been chosen from the 48 most populous cities in the USA. To find the correct city, type a guess in the search box, click it, and hit "submit guess".</p>
            <p>A dot will appear on the map where your guess was, and the distance to the target city will be listed below the map. Use this data to find the correct city.</p>
            <p>After completeing the game, refresh the page and a new target city will be chosen.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoPopUp;
