import React, { useState } from 'react';
import mariaIcon from "../maria-icon.png"
import micIcon from '../mic.png'
function NameInputScreen({ onNameSubmitted }) {
    const [name, setName] = React.useState('');
  
    return (
      <div>
      <img src={mariaIcon} alt="Maria" style={{ maxWidth: '100px', height: 'auto' }} />
        <p>¿Cómo te llamas?</p>
        <p>[What is your name?]</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Say your name"
        />
                <img src={micIcon} alt="Maria" style={{ maxWidth: '50px', height: 'auto' }}/>
        <div>        <button onClick={() => onNameSubmitted(name)}>Submit</button></div>
      </div>
    );
  }
export default NameInputScreen;
