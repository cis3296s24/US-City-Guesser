//This component renders the list of already-guessed cities

export default function GuessList({sorted}){
  return (
    <div>
      <h2>Guesses:</h2>
      {/* The actual list */}
      <ul>
        {sorted.map(guess => (
          <li key={guess.id}>{guess.city.city + ", " + guess.city.state_id + ": " + guess.distance + " miles"}</li>
        ))}
      </ul> 
    </div>
  )
}