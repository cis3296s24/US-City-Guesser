import CreateTable from "./CreateTable"
import Cities from "./city_data.json"
import AutocompleteDropdown from './AutocompleteDropdown';
function App() {

  return (
    <div>
      <AutocompleteDropdown />
     
      <CreateTable></CreateTable> {/* This is just for testing purposes*/}

      {/* Component to generate target city */}

      {/* Map component - will later include projecting guesses onto map */}

      {/* Component to handle guesses (dropdown that you click, not type and enter) */}
    

      {/* Component that takes guess from above and calculates distance */}

      {/* Component that displays previous guesses in order of proximity */}



    </div>
    )
}

export default App