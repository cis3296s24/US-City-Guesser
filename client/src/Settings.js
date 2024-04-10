import React, { useState } from 'react';
import './Settings.css'; // Import CSS file for styling

function Settings({ onClick }) {
  const [displayInfo, setDisplayInfo] = useState(false);

  const toggleInfo = () => {
    setDisplayInfo(!displayInfo);
  };

  const closeInfo = () => {
    setDisplayInfo(false);
  };

  return (
    <div className="settings-container">
      <button className="settings-button" onClick={toggleInfo}>Settings</button>
      {displayInfo && (
        <div>
          <div className="overlay" onClick={closeInfo}></div>
          <div className="info-popup">
            <button onClick={closeInfo} className="close-button">Close</button>
            <h2>Settings</h2>
            <p>-Work in progress-</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
