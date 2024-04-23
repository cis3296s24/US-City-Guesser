import React, { useState } from 'react';
import './style/InfoPopUp.css'; // Import CSS file for styling

export default function ConfirmGiveUp({confirm, undo}) {
  const [displayInfo, setDisplayInfo] = useState(true);

  const closeInfo = () => {
    setDisplayInfo(false);
  };

  return (
    <div className="info-container">
      {displayInfo && (
        <div>
          <div className="overlay" onClick={function() {undo(); closeInfo()}}></div>
          <div className="info-popup">
            <button onClick={function() {undo(); closeInfo()}} className="close-button">Close</button>
            <h2>Are you sure?</h2>
            <button className='non-close' onClick={function() {confirm(); closeInfo()}}>Yes</button>
            <button className='non-close' onClick={function() {undo(); closeInfo()}}>No</button>
            
          </div>
        </div>
      )}
    </div>
  );
}

