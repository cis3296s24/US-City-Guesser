//This function validated the current guess to make sure it is not null or an already-guessed city

export default function ValidateGuess(guess, guessList){
  if (guess == null){
    //nothing should happen if no city is entered
    // console.log("null");
    return false;
  } else if (guessList.some(e => e.city.id === guess.id)) {
    //nothing will happen if a city has already been guesses 
    // console.log("Already guessed that");
    return false
  } else {
    // console.log("You're good to go");
    return true;
  }
}