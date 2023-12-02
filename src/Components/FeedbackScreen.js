import React, { useState } from 'react';
import progressPic from '../progress.jpg'
function FeedbackScreen({ onFeedbackComplete }) {
    return (
      <div>
        <p>You're doing great, Bob!</p>
        {/* Placeholder for charts */}
        <img src={progressPic} alt="Progress Chart" style={{ maxWidth: '100px', height: 'auto' }} />
        <button onClick={onFeedbackComplete}>Continue</button>
      </div>
    );
  }
export default FeedbackScreen;
