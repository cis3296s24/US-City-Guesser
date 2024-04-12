import React, { useState } from "react"
import { getTargetCity, getCurrentGuess } from "./App";
import { getDistance } from "./calculateDistance";
import Map from "./Map";
import List from "./GuessList";
import ValidateGuess from "./ValidateGuess";
import "./style/GuessList.css";

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

  //the sorted array of Guesses (NOT cities) uses the useState hook so it can be dynamically displayed
  const [sorted, setSorted] = useState([]);

  // state array of cities (NOT guesses) that is sent to the map component
  const [displayList, setDisplayList] = useState([]);

  return (
    <div className="GuessList">
      {/* button to trigger guess */}
      <button onClick={function() {

        //calls validate to make sure current guess is valid
        if (ValidateGuess(getCurrentGuess(), guessList)){
        
          //gets the current guess and assigns it to guess
          guess = getCurrentGuess();

          //adds guess to the array that is displayed on the map
          setDisplayList([...displayList, guess])

          //adds current guess to the guessList// guessList.push({ id: nextId++, city: guess.city, distance: getDistance(guess.id, targetCity.id), state:guess.state_id }
          guessList.push({ id: nextId++, city: guess, distance: getDistance(guess.id, getTargetCity().id)}
          );

          // this sorts the array into a state array called "sorted" which is then what is displayed
          setSorted([...guessList].sort((a, b) => {
            return a.distance - b.distance;
          }))
          
        }

      }}>Submit Guess</button>


      <Map guesses={displayList} /> 

        {/* The actual list */}

      <List sorted = {sorted}/>

    </div>
  );
}




