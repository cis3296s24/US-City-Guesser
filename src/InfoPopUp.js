import React, { useState } from 'react';
import './style/InfoPopUp.css'; // Import CSS file for styling
// import infoImage from './Color_Guide.png'; // Import image
// import infoImage2 from './Color_Guide2.png'; // Import image

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
            <h4>How to play?</h4>
            <p>A random city has been chosen from the USA. To find the correct city, type a guess in the search box, click it, and hit "submit guess".</p>
            <p>A dot will appear on the map where your guess was, and the distance to the target city will be listed below the map. As you get closer to the proximity of the target city, 
            the dots become more <span style={{color: 'red', fontWeight: 'bold'}}>red</span>. When you finally guess the correct city, a <span style={{color: 'green', fontWeight: 'bold'}}>green</span> dot 
            will be displayed over the tagret city.
            Use this data to find the correct city.</p>
            <p>After completing the game, click "restart" to play again!</p>
            <p>Click on the settings button to adjust difficulty, units, and visual display options.</p>
            <p>Data retrieved from: https://simplemaps.com/data/us-cities</p>

            {/* <h3>Color Guide for Dots shown on map</h3>
            <p>Depending on light/dark mode preference the first image is </p>
            <img src={infoImage} alt="Color Description" style={{ width: '300px', height: '300px' }} />
            <img src={infoImage2} alt="Color Description" style={{ width: '300px', height: '300px' }} /> */}

          </div>
        </div>
      )}
    </div>
  );
}

export default InfoPopUp;
