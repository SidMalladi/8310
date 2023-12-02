import React, { useState } from 'react';
import worldIcon from '../world-icon.jpg';
function LanguageSelectionScreen({ onLanguageSelect }) {
    return (
      <div>
        <img src={worldIcon} alt="World" style={{ maxWidth: '100px', height: 'auto' }} />
        <h1>Welcome to Lingo</h1>
        <p>What language do you wish to learn?</p>
        <button onClick={() => onLanguageSelect('Spanish')}>Spanish</button>
        {/* Add buttons for other languages */}
        
      </div>
    );  
  }
export default LanguageSelectionScreen;
