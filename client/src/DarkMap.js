import React from 'react'
import Blank_USA_Map from './Blank_USA_Map.png' // imports USA Map with state cross lines

function DarkMap() {
      
    return (
        <div>
            <h2>USA Map</h2>
            <img src={Blank_USA_Map} alt="USA Map" style={{ filter: 'invert(100%) grayscale(100%)' }} />
        </div>
    );
}

export default DarkMap;