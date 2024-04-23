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
      setSuggestions(Cities.sort().filter(v => regex.test(v.city) || regex.test(v.state_id)));
    } else {
      setSuggestions([]);
    }
  };

  const suggestionSelected = (value) => {
    setInput(value);
    setSuggestions([]);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul className="suggestions">
        {suggestions.map((item) => <li key={item.id} onClick={() => {suggestionSelected(item.city + ", " + item.state_id); setCurrentGuess(item); console.log(item)}}>{item.city +", " + item.state_id}</li>)}
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
