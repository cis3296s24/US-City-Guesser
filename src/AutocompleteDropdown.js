import React, { useState } from 'react';
import Cities from './data/city_data.json';
import { setCurrentGuess } from './App';
import './style/Autocomplete.css';


const AutocompleteDropdown = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, 'i');
      setSuggestions(
        Cities.sort().filter(
          (city) =>
            regex.test(city.city) || // Check if input matches city name
            regex.test(city.state_id) // Check if input matches state code
        )
      );
    } else {
      setSuggestions([]);
    }
  };

  const suggestionSelected = (city, state) => {
    setInput(`${city}, ${state}`);
    setSuggestions([]);
    setCurrentGuess({ city, state_id: state }); // Set current guess
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul className="suggestions">
        {suggestions.map((item) => (
          <li
            key={item.id}
            onClick={() => suggestionSelected(item.city, item.state_id)}
          >
            {item.city}, {item.state_id}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="autocomplete">
      <div style={{position: 'relative'}}>
        <input value={input} onChange={onChange} type="text" />
        {renderSuggestions()}
      </div>
    </div>
  );
};

export default AutocompleteDropdown;
