import React, { useState } from "react"
// import { currentGuess } from "./App";
import Cities from "./city_data.json"

// needed for displaying map
let nextId = 0;

// testing purposes- delete later
var curGuess = {
  city: "",
  state: "",
  distance: 0
}

// array that is finally displayed
var sorted = []

// testing purposes, delete later
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function GuessList(){

  // using setState for lastGuess, which is the guess being added, 
  // and guessList, which is an array of all of the guesses.
  const [guessList, setGuessList] = useState([]);

  return (
    <div>
      <h1>Guesses:</h1>
      <h3>This button displays current guessed city and it's distance away</h3>

      {/* button for testing, but this will be the logic for guessing */}
      <button onClick={() => {

        // testing purposes - generates random city and random numer to sort them by
        var rand = getRandomInt(Cities.length)  
        curGuess = {
          city: Cities[rand].city,
          state: Cities[rand].state_id,
          distance: getRandomInt(10000)
        };

        // this appends whatever the current guess is to the array of guesses
        setGuessList([
          ...guessList,
          { id: nextId++, city: curGuess.city, distance: curGuess.distance, state:curGuess.state }
        ]);

        // this sorts the array into a non-state array which is then what is displayed
        sorted = [...guessList].sort((a, b) => {
          return a.distance - b.distance;
        });

        // button to run code
      }}>Click me</button>

      {/* The actual list */}
      <ul>
        {sorted.map(guess => (
          <li key={guess.id}>{guess.city + ", " + guess.state + ": " + guess.distance}</li>
        ))}
      </ul>
    </div>
  );
}




