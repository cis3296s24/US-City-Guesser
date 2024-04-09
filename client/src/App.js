// import CreateTable from "./CreateTable"
import GuessList from "./GuessList"
import Cities from "./city_data.json"
import Map from "./Map"
import React from "react"
import Autocomplete from "./AutocompleteDropdown"
// import "./App.css"
import infoPopUp from "./Info_PopUp"

//this is how whatever the guess is can be exported to the GuessList file
export var currentGuess;

//for testing purposes, static target city of Boston until we create
//logic to generate a target city
export var targetCity = Cities.find(city => city.city === "Boston");

//setter for the current guess
export function setCurrentGuess(newCity){
  currentGuess = newCity;
}

export function getCurrentGuess(){
  return currentGuess;
}

function App() {

  //testing purposes, delete later
  console.log(Cities[80])
  console.log(Cities.find(city => city.city === "Philadelphia"))

  return (
    <div className="home">
     
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
    <infoPopUp />

    {/* <Map></Map> */}

    </div>

  )
}

export default App