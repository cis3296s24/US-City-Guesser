import React from 'react';

export default function ShowStats(difficulty){

  if (difficulty.difficulty === "easy"){
    return (
      <div>
        <b>Easy stats:<br/></b>
        Number of plays: {parseInt(localStorage.getItem("easyGameCount") ?? 0)} <br/>
        Number of wins: {parseInt(localStorage.getItem("easyWinCount") ?? 0)} <br />
        Win percentage: {Math.round((parseInt(localStorage.getItem("easyWinCount") ?? 0) / parseInt(localStorage.getItem("easyGameCount") ?? 1))* 100)}% <br />
        Average guesses per win: {Math.round(parseInt(localStorage.getItem("easyGuessCount") ?? 0) / (parseInt(localStorage.getItem("easyWinCount")) ?? 1))} <br/>
      
      </div>
    )
  } else if (difficulty.difficulty === "medium"){
    return (
      <div>
        <b>Medium stats:<br/></b>
        Number of plays: {parseInt(localStorage.getItem("mediumGameCount") ?? 0)} <br/>
        Number of wins: {parseInt(localStorage.getItem("mediumWinCount") ?? 0)} <br />
        Win percentage: {Math.round((parseInt(localStorage.getItem("mediumWinCount") ?? 0) / parseInt(localStorage.getItem("mediumGameCount") ?? 1))* 100)}% <br />
        Average guesses per win: {Math.round(parseInt(localStorage.getItem("mediumGuessCount") ?? 0) / (parseInt(localStorage.getItem("mediumWinCount")) ?? 1))} <br/>
      
      </div>
    )
  } else if (difficulty.difficulty === "hard"){
    return (
      <div>
        <b>Hard stats:<br/></b>
        Number of plays: {parseInt(localStorage.getItem("hardGameCount") ?? 0)} <br/>
        Number of wins: {parseInt(localStorage.getItem("hardWinCount") ?? 0)} <br />
        Win percentage: {Math.round((parseInt(localStorage.getItem("hardWinCount") ?? 0) / parseInt(localStorage.getItem("hardGameCount") ?? 1))* 100)}% <br />
        Average guesses per win: {Math.round(parseInt(localStorage.getItem("hardGuessCount") ?? 0) / (parseInt(localStorage.getItem("hardWinCount")) ?? 1))} <br/>
      </div>
    )
  } else {
    return (
      <div>
        <b>Impossible stats:<br/></b>
        Number of plays: {parseInt(localStorage.getItem("impossibleGameCount") ?? 0)} <br/>
        Number of wins: {parseInt(localStorage.getItem("impossibleWinCount") ?? 0)} <br />
        Win percentage: {Math.round((parseInt(localStorage.getItem("impossibleWinCount") ?? 0) / parseInt(localStorage.getItem("impossibleGameCount") ?? 1))* 100)}% <br />
        Average guesses per win: {Math.round(parseInt(localStorage.getItem("impossibleGuessCount") ?? 0) / (parseInt(localStorage.getItem("impossibleWinCount") ?? 1)))} <br/>
      
      </div>
    )
  }
  
}