import React, { useState, useRef } from "react"
import AutocompleteDropdown from "./AutocompleteDropdown"
import InfoPopUp from "./InfoPopUp"
import Settings from "./Settings"
import GenerateCity from "./GenerateCity"
import ValidateGuess from "./ValidateGuess"
import { useEffect } from "react";
import Map from "./Map"
import GuessList from "./GuessList"
import { getDistance } from "./calculateDistance"
import "./style/App.css"
import "./style/GuessList.css"
import GameCompletePopup from "./GameCompletePopup"
import GiveUpPopup from "./GiveUpPopup"
import ConfirmGiveUp from "./ConfirmGiveUp"
import Confetti from './Confetti';


// -------------- Variables ----------------- \\

//targetCity
var targetCity;
//setter for target city
export function setTargetCity(newCity){
  targetCity = newCity
}
//getter for target city
export function getTargetCity(){
  return targetCity;
}

//currentGuess
var currentGuess;
//setter for the current guess
export function setCurrentGuess(newCity){
  currentGuess = newCity;
}
//getter for current guess
export function getCurrentGuess(){
  return currentGuess;
}

//index for the array of guesses, also functions as way to track number of guesses
let nextId = 0;

//array for guesses - guesses are NOT the same as cities
//    guess structure:
//         id:
//         city: (this is a city)
//         distance:
//i think this the better way to do this so it's only calculating each distance once
var guessList = [];

//function to clear guesslist when resetting game
function clearGuessList(){
  guessList = [];
}

// ----------------------------------------------- \\

export default function App() {

  // state variable for difficulty level
  const [difficulty, setDifficulty] = useState("easy")
  
  //the sorted array of Guesses (NOT cities) uses the useState hook so it can be dynamically displayed
  const [sorted, setSorted] = useState([]);

  // state array of cities (NOT guesses) that is sent to the map component
  const [displayList, setDisplayList] = useState([]);

  //state variable for "game state": 
  // - "game" when game is running
  // - "quit" when game has been quit
  // - "confirm" when confirming quit
  // - "completed" when won
  const [gameState, setGameState] = useState("game");

  //state variable for unit setting
  const [km, setKm] = useState(false);

  //state variable for visual setting
  const [isDark, setIsDark] = useState(true); // State to track map display mode

  //useRef element for scrolling when entering new value
  const bottomRef = useRef(null);

  //useRef variable for handling auto scrolling on first render
  const firstRender = useRef(true);
  
  // functions to set difficulty and reset game passed into settings menu
 
  function setHard () {
    setDifficulty("hard");
    restartGame();
  }

  function setMedium () {
    setDifficulty("medium");
    restartGame();
  }

  function setEasy () {
    setDifficulty("easy");
    restartGame();
  }

  function setImpossible () {
    setDifficulty("impossible");
    restartGame();
  }

  //useEffect for difficulty level
  useEffect(() => {
    GenerateCity(difficulty);
  }, [difficulty]);

  //useEffect for scrolling
  useEffect(() =>{
    if (firstRender.current){
      firstRender.current = false;
    } else {
      bottomRef.current.scrollIntoView({ block: "end" , behavior: "smooth"});
    }
    
  }, [sorted]);

  //catch-all function to reset everything when restarting game after quit or win
  function restartGame(){
    setCurrentGuess(null);
    clearGuessList();
    GenerateCity(difficulty);
    setDisplayList([]);
    setSorted([]);
    setGameState("game");
    nextId = 0;
  }

  return (

    <div className={`home ${isDark ? 'dark-mode' : 'light-mode'}`}>

      <h1>US City Guesser</h1>

      {/* the dropdown menu */}
      <AutocompleteDropdown className = "drop"/>

      {/* button to trigger guess */}
      <button onClick={function() {

        //calls validate to make sure current guess is valid
        if (ValidateGuess(currentGuess, guessList)){

          //adds guess to the array that is displayed on the map
          setDisplayList([...displayList, currentGuess])

          //adds current guess to the guessList// guessList.push({ id: nextId++, city: guess.city, distance: getDistance(guess.id, targetCity.id), state:guess.state_id }
          guessList.push({ id: nextId++, city: currentGuess, distance: getDistance(currentGuess.id, targetCity.id)}
          );

          // this sorts the array into a state array called "sorted" which is then what is displayed
          setSorted([...guessList].sort((a, b) => {
            return a.distance - b.distance;
          }))

          if (currentGuess.id === targetCity.id){
            setGameState("completed");
          }
 
        }

      }} id = "submit_button" className="submit-button">Submit Guess</button>

      

    {/* map component takes in list of guessed cities to project dots */}
    <Map guesses={displayList} isDark={isDark} /> 

    <button data-testid = "give_up_button"
      className = "submit-button"
      onClick={function(){
      setGameState("confirm"); 
      // const currentAttempts = parseInt(localStorage.getItem('giveUpCount') ?? '0');
      // localStorage.setItem('giveUpCount', (currentAttempts + 1).toString());
      // console.log(localStorage.getItem("giveUpCount"));
      }}>Give up</button>

    <div className="GuessList">
        {/* the list of guesses which updates dynamically */}
        <GuessList km = {km} sorted = {sorted}/>

      </div>

    {/* Component to handle guesses (dropdown that you click, not type and enter) */}
      
    {/* "completed" when won & hit 0 miles/km */}

    {gameState === "completed" && <GameCompletePopup restart={() => restartGame()} guesses={nextId} difficulty={difficulty}/>}

    {/* "confirm" when confiming whether or not the user wants to quit */}
    {gameState === "confirm" && <ConfirmGiveUp confirm={() => setGameState("quit")} undo={() => setGameState("game")} />}

  
    {gameState === "completed" && <Confetti />}

    
    {/* "quit" when giving up */}
    {gameState === "quit" && <GiveUpPopup restart={() => restartGame()} difficulty={difficulty} />}

    {/* Component for a popup that displays info*/}
    <InfoPopUp />

    {/* Component for a popup that displays settings*/}
    {/* functions for the settings options need to be passed in to update state */}
    <Settings 
    difficulty = {difficulty} 
    setEasy={setEasy} 
    setMedium={setMedium}
    setHard = {setHard} 
    setImpossible={setImpossible}
    isKm = {km} 
    changeToKm = {() => setKm(true)} 
    changeToMiles = {() => setKm(false)} 
    isDark = {isDark} 
    setDark={() => setIsDark(true)} 
    setLight = {() => setIsDark(false)}/>

    
    {/* useRef div for scrolling */}
    <div ref = {bottomRef}></div>
    </div>
    
  )
}