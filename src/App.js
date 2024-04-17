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
import Cities from "./data/city_data.json"
import "./style/App.css"
import "./style/GuessList.css"
import GameCompletePopup from "./GameCompletePopup"
import GiveUpPopup from "./GiveUpPopup"

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



//index for the array of guesses
let nextId = 0;

//array for guesses - guesses are NOT the same as cities
//    guess structure:
//         id:
//         city: (this is a city)
//         distance:
//i think this the better way to do this so it's only calculating each distance once
var guessList = [];


function clearGuessList(){
  guessList = [];
}

// ----------------------------------------------- \\

function App() {

  // state variable for difficulty level
  const [difficulty, setDifficulty] = useState("easy")
  
  //the sorted array of Guesses (NOT cities) uses the useState hook so it can be dynamically displayed
  const [sorted, setSorted] = useState([]);

  // state array of cities (NOT guesses) that is sent to the map component
  const [displayList, setDisplayList] = useState([]);

  //state variable for "game state": 
  // - "game" when game is running
  const [gameState, setGameState] = useState("game");

  const [km, setKm] = useState(false);

  const [isDark, setIsDark] = useState(true); // State to track map display mode

  //useRef element for scrolling when entering new value
  const bottomRef = useRef(null);

  const firstRender = useRef(true);

  const resetGuesses = () => {
    setDisplayList([]);
    setSorted([]);
    guessList = [];
    GenerateCity(difficulty);
  };
  
  // Set difficulty level: easy & reset guesses
  const setEasy = () => {
    setDifficulty("easy");
    resetGuesses();
  };
  
  // Set difficulty level: hard & reset guesses
  const setHard = () => {
    setDifficulty("hard");
    resetGuesses();
  };

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

  function restartGame(){
    setCurrentGuess(null);
    clearGuessList();
    GenerateCity(difficulty);
    setDisplayList([]);
    setSorted([]);
    setGameState("game");
  }

   // Set it in dark/black mode
  const setDark = () => {
    setIsDark("black");
  };

  // Set it in light/white mode
  const setLight = () => {
    setDark("white");
  };

  return (

    <div className="home">

      <h1>US City Guesser</h1>

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
    <Map guesses={displayList} /> 

    <button data-testid = "give_up_button" className = "submit-button" onClick={function(){setGameState("quit")}}>Give up</button>

    <div className="GuessList">
        {/* the list of guesses which updates dynamically */}
        <GuessList km = {km} sorted = {sorted}/>

      </div>

    {/* Component to handle guesses (dropdown that you click, not type and enter) */}
      
    {/* "completed" when won & hit 0 miles/km */}
    {gameState === "completed" && <GameCompletePopup restart={() => restartGame()} />}
    
    {/* "quit" when giving up */}
    {gameState === "quit" && <GiveUpPopup restart={() => restartGame()} />}

    
    {/* Component for a popup that displays info*/}
    <InfoPopUp />

    {/* Component for a popup that displays settings*/}

    <Settings difficulty = {difficulty} setEasy={() => setDifficulty("easy")} setHard = {() => setDifficulty("hard")} isKm = {km} changeToKm = {() => setKm(true)} changeToMiles = {() => setKm(false)} mapDisplay = {isDark} setDark={() => setIsDark("#ffffff")} setLight = {() => setIsDark("202124")}/>

    
    {/* useRef div for scrolling */}
    <div ref = {bottomRef}></div>
    </div>
    
  )
}

export default App