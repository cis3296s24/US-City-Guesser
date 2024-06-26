//This component renders the list of already-guessed cities

export default function GuessList({sorted, km}){
  return (
    <div>

      <div style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Guesses:</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        </ul>
      </div>
      <div className="GuessList-container">
        <ul className="GuessList">
        {/* The actual list */}
          {sorted.map(guess => (
            <li key={guess.id}>{guess.city.city + ", " + guess.city.state_id + ": " + (!km ? guess.distance + " miles" : Math.round(guess.distance * 1.609344) + " km")}</li>
          ))}
          </ul> 
      </div>

    </div>
  )
}