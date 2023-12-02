import React, { useState } from 'react';
import mariaIcon from '../maria-icon.png';
import micIcon from '../mic.png'
function IntroductionScreen({ onIntroComplete }) {
    return (
      <div>
        <img src={mariaIcon} alt="Maria" style={{ maxWidth: '100px', height: 'auto' }}/>
        <p>Hi, my name is Maria.</p>
        <p>[Hola, mi nombre es Maria.]</p>
        <img src={micIcon} alt="Maria" style={{ maxWidth: '50px', height: 'auto' }}/>
        <div><button onClick={onIntroComplete}>Next</button></div>
      </div>
    );
  }
export default IntroductionScreen;
  