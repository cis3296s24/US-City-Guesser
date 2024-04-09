import React from 'react';
import './Settings.css'; // Import CSS file for styling

function Settings({ onClick }) {
  return (
    <button className="settings-button" onClick={onClick}>
      {/* Content */}
      Settings
    </button>
  );
}

export default Settings;
