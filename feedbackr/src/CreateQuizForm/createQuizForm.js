import React, { useState, useEffect } from 'react';

// Functions
import { postQuiz, updateQuiz } from '../apiService'

function CreateQuizForm (props) {
  const quizId = props.quizId;
  const setQuizId = props.setQuizId;
  const quiz = props.quiz;
  const setQuiz = props.setQuiz;

  const [isDisabled, setIsDisabled ] = useState(false);

  const handleQuizName = function (event) {
    event.persist();
    setQuiz(prevState => {
      const newState = {
        ...prevState,
        name: event.target.value
      }
      return newState;
    })
    if (quizId.length>0) {
      const updatedQuiz = {
        quizId: props.quizId,
        ...quiz
      }
    }
    console.log('quiz after name change', quiz);
  }

  const handleCreateQuiz = function () {
    postQuiz(quiz, setQuizId);
    setIsDisabled(true);
  }

  return (
    <div className="create-quiz__details">
      <p>Quiz Name:</p>
      {isDisabled===false ?
        <input type="text" value={quiz.name} onChange={handleQuizName} required></input> :
        <input type="text" value={quiz.name} onChange={handleQuizName} required disabled></input>
      }
      <button onClick={handleCreateQuiz} className="create-quiz-submit">I've named my quiz</button>
    </div>
  )
}

export default CreateQuizForm;