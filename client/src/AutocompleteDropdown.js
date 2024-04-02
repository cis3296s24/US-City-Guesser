import React, { useState } from 'react';
import cityData from './city_data.json';

const Autocomplete = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      setSuggestions(cityData.sort().filter(v => regex.test(v.city)));
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
      <ul>
        {suggestions.map((item) => <li onClick={() => suggestionSelected(item.city)}>{item.city}</li>)}
      </ul>
    );
  };

  return (
    <div>
      <input value={input} onChange={onChange} type="text" />
      {renderSuggestions()}
    </div>
  );
};

export default Autocomplete;
