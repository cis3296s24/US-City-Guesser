import React, { useState } from 'react';
import './style/Settings.css'; // Import CSS file for styling
// import { getDifficulty, setDifficulty } from './App';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';



//called with the current level, and is passed useState functions which I define as 
//"setEasy" and "setHard". This is known as "lifting up the state"
function Settings({ difficulty, setEasy, setMedium, setHard, setImpossible, isKm, changeToMiles, changeToKm, isDark, setDark, setLight}) {
  const [displaySettings, setDisplaySettings] = useState(false);

  //function for displaying Settings 
  const toggleSettings = () => {
    setDisplaySettings(!displaySettings);
  };

  //function for closing settings popup
  const closeSettings = () => {
    setDisplaySettings(false);
  };

  //tooltip for what difficulties mean
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} 
      classes={{ popper: className }} 
      PopperProps={{style:{zIndex:1000000}}} 
      placement='top-start'
    />

  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'black',
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid black',
    },
  }));

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
            <h2>Settings</h2><br/><br/>
            <div>
              <b>Difficulty:&nbsp;</b>

              {/* the html for the tooltip: */}

              <HtmlTooltip className = "tool-tip"
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      Difficulty based on population:<br/>
                      <b>Easy:</b> 1,000,000+ (49 cities)<br />
                      <b>Medium:</b> 300,000+ (141 cities)<br/>
                      <b>Hard:</b> 100,000+ (455 cities)<br />
                      <b>Impossible</b> 50,000+ (933 cities)<br />
                      (Based on greater metropolitan area)
                    </Typography>
                  </React.Fragment>
                  }
              >
                <HelpOutlineIcon fontSize='10px'/>
              </HtmlTooltip> <br />

              {/* button for easy mode */}
              <button 
                onClick={setEasy} 
                className = "toggle-button"
                style={{fontWeight: difficulty === 'easy' ? 'bold' : 'normal' }}
              >
                Easy
              </button>
              {/* button for medium mode */}
              <button 
                onClick={setMedium} 
                className = "toggle-button"
                style={{ fontWeight: difficulty === 'medium' ? 'bold' : 'normal' }}
              >
                Medium
              </button>
              {/* button for hard mode */}
              <button 
                onClick={setHard} 
                className = "toggle-button"
                style={{ fontWeight: difficulty === 'hard' ? 'bold' : 'normal' }}
              >
                Hard
              </button>
              {/* button for impossible mode */}
              <button 
                onClick={setImpossible} 
                className = "toggle-button"
                style={{ fontWeight: difficulty === 'impossible' ? 'bold' : 'normal' }}
              >
                Impossible
              </button>

              {/* ------------------------- */}

              <br /><br />
              
              <b>Units: <br /></b>
              <button 
                onClick={changeToMiles} 
                className = "toggle-button"
                style={{ marginRight: '10px', fontWeight: isKm === false ? 'bold' : 'normal' }}
              >
                Miles
              </button>
              {/* button for hard mode */}
              <button 
                onClick={changeToKm} 
                className = "toggle-button"
                style={{ fontWeight: isKm === true ? 'bold' : 'normal' }}
              >
                Kilometers
              </button>

              {/* ------------------------- */}

              <br /><br />

                <div>
                <b>Visual: <br /></b>
                {/* Button for dark mode */}
                <button
                    onClick={setDark}
                    className = "toggle-button"
                    style={{ 
                      marginRight: '10px', 
                      fontWeight: !isDark ? 'normal' : 'bold', 
                    }}
                >
                    Dark
                </button>
                {/* Button for light mode */}
                <button
                className = "toggle-button"
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
