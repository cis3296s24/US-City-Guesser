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
import { getDistance2 } from "./milesToKm"
import "./style/App.css"
import "./style/GuessList.css"

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


// ----------------------------------------------- \\

function App() {

  // state variable for difficulty level
  const [difficulty, setDifficulty] = useState("easy")
  //the sorted array of Guesses (NOT cities) uses the useState hook so it can be dynamically displayed
  const [sorted, setSorted] = useState([]);
  // state array of cities (NOT guesses) that is sent to the map component
  const [displayList, setDisplayList] = useState([]);

  //useRef element for scrolling when entering new value
  const bottomRef = useRef(null);

  const firstRender = useRef(true);

  const resetGuesses = () => {
    setDisplayList([]);
    setSorted([]);
    guessList = [];
    GenerateCity(difficulty);
  };
  
  // Set diffiulty and reset guesses
  const setEasy = () => {
    setDifficulty("easy");
    resetGuesses();
  };
  
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

  return (

    <div className="home">

      <h1>US City Guesser</h1>

      {/* map component takes in list of guessed cities to project dots */}
      <Map guesses={displayList} /> 

      Click on guess <br />

      {/* Component to handle guesses (dropdown that you click, not type and enter) */}
      <AutocompleteDropdown />

    <div className="GuessList">

      {/* button to trigger guess */}
      <button onClick={function() {

        //calls validate to make sure current guess is valid
        if (ValidateGuess(currentGuess, guessList)){

          //adds guess to the array that is displayed on the map
          setDisplayList([...displayList, currentGuess])

          //adds current guess to the guessList// guessList.push({ id: nextId++, city: guess.city, distance: getDistance(guess.id, targetCity.id), state:guess.state_id }
          guessList.push({ id: nextId++, city: currentGuess, distance: getDistance(currentGuess.id, targetCity.id), distance2: getDistance2(currentGuess.id, targetCity.id)}
          );

          // this sorts the array into a state array called "sorted" which is then what is displayed
          setSorted([...guessList].sort((a, b) => {
            return a.distance - b.distance;
          }))

          setSorted([...guessList].sort((a, b) => {
            return a.distance2 - b.distance2;
          }))
 
        }

      }}button className="submit-button">Submit Guess</button>

      {/* the list of guesses which updates dynamically */}
      <GuessList sorted = {sorted}/>

    </div>

    {/* Component for a popup that displays info*/}
    <InfoPopUp />

    {/* Component for a popup that displays settings*/}
    <Settings difficulty={difficulty} setEasy={setEasy} setHard={setHard} />
    
    {/* useRef div for scrolling */}
    <div ref = {bottomRef}></div>
    </div>

    
  )
}

export default App