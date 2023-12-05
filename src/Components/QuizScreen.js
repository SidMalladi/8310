import React, { useState } from 'react';
import mariaIcon from "../maria-icon.png"
function QuizScreen({ onNextClick, onFinishClick }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = [
    { question: "When does the train leave?", correctAnswer: "cuando sale el tren?" },
    { question: "Where can I find tomato?", correctAnswer: "donde puedo encontrar tomate?" },
    // ... more questions
  ];

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (onNextClick) onNextClick(); // Call onNextClick if provided and necessary
      } else {
        onFinishClick(); // Call onFinishClick to finish the quiz
      }
    };

  return (
    <div>
      <img src={mariaIcon} alt="Maria" style={{ maxWidth: '100px', height: 'auto', marginBottom: '20px' }} />
      <div>{questions[currentQuestionIndex].question}</div>
      {/* Display options and handle selection */}
      <button onClick={handleNextClick}>
        {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
      </button>
    </div>
  );
}

export default QuizScreen;
