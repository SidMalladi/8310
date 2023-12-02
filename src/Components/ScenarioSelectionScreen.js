import React, { useState } from 'react';
import mariaIcon from "../maria-icon.png"
function ScenarioSelectionScreen({ onScenarioSelect }) {
    return (
      <div>
      <img src={mariaIcon} alt="Maria" style={{ maxWidth: '100px', height: 'auto' }} />
        <p>Choose a scenario:</p>
        <button onClick={() => onScenarioSelect('Shopping Groceries')}>Shopping Groceries</button>
        <button onClick={() => onScenarioSelect('At the Movies')}>At the Movies</button>
        <button onClick={() => onScenarioSelect('At the Train Station')}>At the Train Station</button>
        
      </div>
    );
  }
export default ScenarioSelectionScreen;
  