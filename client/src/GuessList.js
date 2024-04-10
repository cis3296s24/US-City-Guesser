import React, { useState } from "react"
import { currentGuess, targetCity, getCurrentGuess } from "./App";
import { getDistance } from "./calculateDistance";
import Map from "./Map";

//index for the array of guesses
let nextId = 0;

//object variable to hold current guess
let guess;

//array for guesses - guesses are NOT the same as cities
//    guess structure:
//         id:
//         city: (this is a city)
//         distance:
//i think this the better way to do this so it's only calculating each distance once
var guessList = [];

export default function GuessList(){

  //the sorted array uses the useState hook so it can be dynamically displayed
  const [sorted, setSorted] = useState([]);

  // state array of cities (NOT guesses) that is sent to the map component
  const [displayList, setDisplayList] = useState([]);

  return (
    <div>
      {/* button to trigger guess */}
      <button onClick={function() {

        if (getCurrentGuess() == null){
          //nothing should happen if no city is entered
          console.log("null");
        } else if (guessList.some(e => e.city.id === currentGuess.id)) {
          //nothing will happen if a city has already been guesses 
          console.log("Already guessed that");
        } else {
        
          //gets the current guess and assigns it to guess
          guess = getCurrentGuess();

          //adds guess to the array that is displayed on the map
          setDisplayList([...displayList, guess])

          //adds current guess to the guessList// guessList.push({ id: nextId++, city: guess.city, distance: getDistance(guess.id, targetCity.id), state:guess.state_id }
          guessList.push({ id: nextId++, city: guess, distance: getDistance(guess.id, targetCity.id)}
          );

          // this sorts the array into a state array called "sorted" which is then what is displayed
          setSorted([...guessList].sort((a, b) => {
            return a.distance - b.distance;
          }))
          
        }

      }}>Submit Guess</button>


      <Map guesses={displayList} /> 

      <h2>Guesses:</h2>

      {/* The actual list */}
      <ul>
        {sorted.map(guess => (
          <li key={guess.id}>{guess.city.city + ", " + guess.city.state_id + ": " + guess.distance + " miles"}</li>
        ))}
      </ul>
      
      {/* the actual map */}

    </div>
  );
}




