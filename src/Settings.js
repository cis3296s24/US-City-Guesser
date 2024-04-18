import React, { useState } from 'react';
import './style/Settings.css'; // Import CSS file for styling
// import { getDifficulty, setDifficulty } from './App';

//called with the current level, and is passed useState functions which I define as 
//"setEasy" and "setHard". This is known as "lifting up the state"
function Settings({ difficulty, setEasy, setHard, isKm, changeToMiles, changeToKm, isDark, setDark, setLight}) {
  const [displaySettings, setDisplaySettings] = useState(false);

  //function for displaying Settings 
  const toggleSettings = () => {
    setDisplaySettings(!displaySettings);
  };

  //function for closing settings popup
  const closeSettings = () => {
    setDisplaySettings(false);
  };

  return (
    <div className="settings-container">
      {/* button on main page for displaying settings menu */}
      <button className="settings-button" onClick={toggleSettings}>Settings</button>
      {displaySettings && (
        <div>
          <div className="overlay" onClick={closeSettings}></div>
          <div className="info-popup">
            {/* button to close settings menu */}
            <button onClick={closeSettings} className="close-button">Close</button>
            <h2>Settings</h2>
            <p>-Work in progress-</p>
            <div>
              Difficulty: <br />
              {/* button for easy mode */}
              <button 
                onClick={setEasy} 
                style={{ marginRight: '10px', fontWeight: difficulty === 'easy' ? 'bold' : 'normal' }}
              >
                Easy Mode
              </button>
              {/* button for hard mode */}
              <button 
                onClick={setHard} 
                style={{ fontWeight: difficulty === 'hard' ? 'bold' : 'normal' }}
              >
                Hard Mode
              </button>

              {/* ------------------------- */}

              <br /><br />
              
              Units: <br />
              <button 
                onClick={changeToMiles} 
                style={{ marginRight: '10px', fontWeight: isKm === false ? 'bold' : 'normal' }}
              >
                Miles
              </button>
              {/* button for hard mode */}
              <button 
                onClick={changeToKm} 
                style={{ fontWeight: isKm === true ? 'bold' : 'normal' }}
              >
                Kilometers
              </button>

              {/* ------------------------- */}

              <br /><br />

                <div>
                Visual: <br />
                {/* Button for dark mode */}
                <button
                    onClick={setDark}
                    style={{ 
                      marginRight: '10px', 
                      fontWeight: !isDark ? 'normal' : 'bold', 
                    }}
                >
                    Dark
                </button>
                {/* Button for light mode */}
                <button
                    onClick={setLight}
                    style={{ 
                      fontWeight: !isDark ? 'bold' : 'normal' 
                    }}
                >
                    Light
                </button>
                </div>
              <div id={'map'}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
