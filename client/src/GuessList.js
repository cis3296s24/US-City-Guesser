import React, { useState } from "react"
import { currentGuess, targetCity, getCurrentGuess } from "./App";
import { getDistance } from "./calculateDistance";

//index for the array of guesses
let nextId = 0;

//object variable to hold current guess
let guess

//array for guesses
var guessList = [];

export default function GuessList(){

  //the sorted array uses the useState hook so it can be dynamically displayed
  const [sorted, setSorted] = useState([]);

  return (
    <div>

      {/* button for testing, but this will be the logic for guessing */}
      <button onClick={function() {

        //nothing should happen if no city is entered
        if (getCurrentGuess() == null){
          console.log("null")
        //nothing should happen if a city is guessed more than once
        } else if (guessList.some(e => e.city === currentGuess.city)) {
          console.log("Already guessed that")
        } else {
        
          //gets the current guess and assigns it to guess
          guess = getCurrentGuess();

          //adds current guess to the guessList
          guessList.push({ id: nextId++, city: guess.city, distance: getDistance(guess.city, targetCity.city), state:guess.state_id }
          );

          // this sorts the array into a state array called "sorted" which is then what is displayed
          setSorted([...guessList].sort((a, b) => {
            return a.distance - b.distance;
          }))

        }

        // button to run code
      }}>Submit Guess</button>


      <h2>Guesses:</h2>

      {/* The actual list */}
      <ul>
        {sorted.map(guess => (
          <li key={guess.id}>{guess.city + ", " + guess.state + ": " + guess.distance + " miles"}</li>
        ))}
      </ul>
    </div>
  );
}




