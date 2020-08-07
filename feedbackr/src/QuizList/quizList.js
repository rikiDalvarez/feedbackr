import React from 'react';
import QuizCard from '../QuizCard/quizCard';

function QuizList (props) {

  const quizList = props.quizList;

  return (
    <div className="quiz-list">
      <p className="choose-quiz-text">Click on a quiz and test yourself</p>
      {quizList.map((quiz) => (
        <QuizCard key={quiz._id} quiz={quiz}/>
      ))}
    </div>
  )
}

export default QuizList;