import React, { useState } from 'react';
import mariaIcon from "../maria-icon.png"
function ScenarioSelectionScreen({ onScenarioSelect }) {
    return (
      <div>
      <img src={mariaIcon} alt="Maria" style={{ maxWidth: '100px', height: 'auto' }} />
        <p>Choose a scenario:</p>
        <div style={{marginBottom : '6px'}}><button onClick={() => onScenarioSelect('Shopping Groceries')}>Shopping Groceries</button></div>
        <div style={{marginBottom : '6px'}}><button onClick={() => onScenarioSelect('At the Movies')}>At the Movies</button></div>
        <div style={{marginBottom : '10px'}}><button onClick={() => onScenarioSelect('At the Train Station')}>At the Train Station</button></div>
        <div style={{marginBottom : '8px'}}><button onClick={() => onScenarioSelect('Lets take a Quiz')} style={{backgroundColor:'blue', color:'white'}}>Lets take a Quiz</button></div>

        
      </div>
    );
  }
export default ScenarioSelectionScreen;
  