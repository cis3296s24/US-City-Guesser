// import CreateTable from "./CreateTable"
import GuessList from "./GuessList"
import Cities from "./city_data.json"
import Map from "./Map"
import React from "react"
import { getDistance } from "./calculateDistance"
import Autocomplete from "./AutocompleteDropdown"

//this is how whatever the guess is can be exported to the GuessList file
export var currentGuess = Cities.find(city => city.city === "Philadelphia");

//for testing purposes, static target city of Boston until we create
//logic to generate a target city
export var targetCity = Cities.find(city => city.city === "Boston");

//setter for the current guess
function setCurrentGuess(newCity, newDistance){
  currentGuess.city = newCity;
  currentGuess.distance = newDistance;
}

function App() {

  //testing purposes, delete later
  console.log(Cities[80])
  console.log(Cities.find(city => city.city === "Philadelphia"))

  return (
    <div>
     
      {/* <CreateTable></CreateTable> This is just for testing purposes */}


      {/* Component to generate target city */}

      {
      /* Map component - will later include projecting guesses onto map */
      <Map></Map>
      }

      {/* Component to handle guesses (dropdown that you click, not type and enter) */}

      <Autocomplete />

      {/* Component that takes guess from above and calculates distance */}

      {/* Component that displays previous guesses in order of proximity */}

      {/* testing purposes, delete later */}
      {setCurrentGuess("Philadelphia", getDistance(currentGuess.city, targetCity.city))}

      {console.log(getDistance("Philadelphia", "Boston"))}

    <GuessList />

    </div>

  )
}

export default App