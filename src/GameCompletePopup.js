import React, { useState } from 'react';
import { getTargetCity } from './App';
import './style/InfoPopUp.css'; // Import CSS file for styling
import ShowStats from './ShowStats';

export default function GameCompletePopup({restart, guesses, difficulty}) {
  const [displayInfo, setDisplayInfo] = useState(true);

  const toggleInfo = () => {
    setDisplayInfo(!displayInfo);
  };

  const closeInfo = () => {
    setDisplayInfo(false);
  };

 //updating stats
 if (difficulty === "easy"){
  const guessCount = parseInt(localStorage.getItem('easyGuessCount') ?? '0');
  localStorage.setItem('easyGuessCount', (guessCount + guesses).toString());
  const gameCount = parseInt(localStorage.getItem('easyGameCount') ?? '0');
  localStorage.setItem('easyGameCount', (gameCount + 1).toString());
  const winCount = parseInt(localStorage.getItem('easyWinCount') ?? '0');
  localStorage.setItem('easyWinCount', (winCount + 1).toString());
} else if (difficulty === "medium"){
  const guessCount = parseInt(localStorage.getItem('mediumGuessCount') ?? '0');
  localStorage.setItem('mediumGuessCount', (guessCount + guesses).toString());
  const gameCount = parseInt(localStorage.getItem('mediumGameCount') ?? '0');
  localStorage.setItem('mediumGameCount', (gameCount + 1).toString());
  const winCount = parseInt(localStorage.getItem('mediumWinCount') ?? '0');
  localStorage.setItem('mediumWinCount', (winCount + 1).toString());
} else if (difficulty === "hard") {
  const guessCount = parseInt(localStorage.getItem('hardGuessCount') ?? '0');
  localStorage.setItem('hardGuessCount', (guessCount + guesses).toString());
  const gameCount = parseInt(localStorage.getItem('hardGameCount') ?? '0');
  localStorage.setItem('hardGameCount', (gameCount + 1).toString());
  const winCount = parseInt(localStorage.getItem('hardWinCount') ?? '0');
  localStorage.setItem('hardWinCount', (winCount + 1).toString());
} else {
  const guessCount = parseInt(localStorage.getItem('impossibleGuessCount') ?? '0');
  localStorage.setItem('impossibleGuessCount', (guessCount + guesses).toString());
  const gameCount = parseInt(localStorage.getItem('impossibleGameCount') ?? '0');
  localStorage.setItem('impossibleGameCount', (gameCount + 1).toString());
  const winCount = parseInt(localStorage.getItem('impossibleWinCount') ?? '0');
  localStorage.setItem('impossibleWinCount', (winCount + 1).toString());
}

  return (
    <div className="info-container">
      {console.log("TEST")}
      <button className="open-button" onClick={toggleInfo}>Info</button>
      {displayInfo && (
        <div>
          <div className="overlay" onClick={function() {restart(); closeInfo()}}></div>
          <div className="info-popup">
            <button onClick={function() {restart(); closeInfo()}} className="close-button">Close</button>
            <h2>You won!</h2>
            <h3>It took you {guesses} guesses.</h3>
            <h3>Correct answer was {getTargetCity().city}, {getTargetCity().state_id}<br/><br /></h3>
            <ShowStats difficulty={difficulty}/>
            <button className='non-close' onClick={function() {restart(); closeInfo()}}>Restart</button>
            
          </div>
        </div>
      )}
    </div>
  );
}

