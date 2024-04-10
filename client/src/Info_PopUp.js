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
            <p>This is the information that will be displayed.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoPopUp;
