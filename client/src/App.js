// import CreateTable from "./CreateTable"
import GuessList from "./GuessList"
import Cities from "./city_data.json"

// import Map from "./Map"
import React from "react"

import Autocomplete from "./AutocompleteDropdown"
// import "./App.css"
import InfoPopUp from "./Info_PopUp"
import Settings from "./Settings"
import GenerateCity from "./GenerateCity"

import { useState, useEffect } from "react";

import "./App.css"


//this is how whatever the guess is can be exported to the GuessList file
export var currentGuess;

//for testing purposes, static target city of Boston until we create
//logic to generate a target city

//targetCity
export var targetCity;


//setter for the current guess
export function setCurrentGuess(newCity){
  currentGuess = newCity;
}

export function getCurrentGuess(){
  return currentGuess;
}

function setRandomTargetCity(level) {
  let filteredCities;
  if (level === "easy") {
    filteredCities = Cities.filter(city => city.population >= 1000000);
  } else {
    filteredCities = Cities.filter(city => city.population >= 100000);
  }

  const randomIndex = Math.floor(Math.random() * filteredCities.length);
  console.log(filteredCities[randomIndex]); // Check answer
  targetCity = filteredCities[randomIndex];
}

function App() {

  const [level, setLevel] = useState("easy"); // Default level

  useEffect(() => {
    setRandomTargetCity(level);
  }, [level]);

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
  };

  return (
    <div className="home">
      <div>
        <button 
          onClick={() => handleLevelChange("easy")} 
          style={{ marginRight: '10px', fontWeight: level === 'easy' ? 'bold' : 'normal' }}
        >
          Easy Mode
        </button>
        <button 
          onClick={() => handleLevelChange("hard")} 
          style={{ fontWeight: level === 'hard' ? 'bold' : 'normal' }}
        >
          Hard Mode
        </button>
      </div>
     
      {/* <CreateTable></CreateTable> This is just for testing purposes */}


      {/* Component to generate target city */}

      {
      /* Map component - will later include projecting guesses onto map */
      // <Map />
      
      }


      Click on guess <br />

      {/* Component to handle guesses (dropdown that you click, not type and enter) */}
      <Autocomplete />

      {/* Component that displays previous guesses in order of proximity */}
    <GuessList />

    {/* Component that displays information after a button is clicked*/}
    <InfoPopUp />
    
    <Settings />
    {/* <Map></Map> */}
    </div>
  )
}

export default App