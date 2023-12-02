import React, { useState } from 'react';
import LanguageSelectionScreen from './Components/LanguageSelectionScreen';
import IntroductionScreen from './Components/IntroductionScreen';
import NameInputScreen from './Components/NameInputScreen';
import ScenarioSelectionScreen from './Components/ScenarioSelectionScreen';
import FeedbackScreen from './Components/FeedbackScreen';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = React.useState('languageSelection');

  const handleLanguageSelect = (language) => {
    // Save the selected language and show the next screen
    setCurrentScreen('introduction');
  };

  const handleIntroComplete = () => {
    setCurrentScreen('nameInput');
  };

  const handleNameSubmitted = (name) => {
    // Save the name and show the next screen
    setCurrentScreen('scenarioSelection');
  };

  const handleScenarioSelect = (scenario) => {
    // Save the scenario and show the next screen
    setCurrentScreen('feedback');
  };

  const handleFeedbackComplete = () => {
    // Go back to the scenario selection or to the next step
    setCurrentScreen('scenarioSelection');
  };

  return (
    <div>
      {currentScreen === 'languageSelection' && (
        <LanguageSelectionScreen onLanguageSelect={handleLanguageSelect} />
      )}
      {currentScreen === 'introduction' && (
        <IntroductionScreen onIntroComplete={handleIntroComplete} />
      )}
      {currentScreen === 'nameInput' && (
        <NameInputScreen onNameSubmitted={handleNameSubmitted} />
      )}
      {currentScreen === 'scenarioSelection' && (
        <ScenarioSelectionScreen onScenarioSelect={handleScenarioSelect} />
      )}
      {currentScreen === 'feedback' && (
        <FeedbackScreen onFeedbackComplete={handleFeedbackComplete} />
      )}
      {/* Add other screens as necessary */}
    </div>
  );
}

export default App;
