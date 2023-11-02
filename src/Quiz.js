// src/Quiz.js
import React, { useState } from 'react';
import questions from './questions';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
      alert('Your Answer Is Correct!');
    } else {
      alert('Your Answer Is Wrong!');
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz completed. Your score: ${score}/${questions.length}`);
      // You can add more logic here for post-quiz actions.
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quizz Me</h1>
      {currentQuestion < questions.length ? (
        <div>
          <p>Question {currentQuestion + 1} of {questions.length}</p>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>Quiz completed!</p>
      )}
    </div>
  );
};

export default Quiz;
