import React, { useState, useEffect } from 'react';
import MultipleChoicePreview from '../QuestionPreviewLibrary/multipleChoicePreview'

let totalScore = 0;
let userScore = 0;

let correctAnswers = [];
let wrongAnswers = [];

function ViewQuiz (props) {

  const quiz = props.quiz;
  
  const [ quizAnswers, setQuizAnswers ] = useState([]);
  const [ hasSubmitted, setHasSubmitted ] = useState(false);

  useEffect(()=>{
    const quizAnswerInitialState = props.quiz.questions.map(question => ({
      ...question,
      selectedAnswer: {
        value: null,
        correct: false
      }
    }))
    setQuizAnswers(quizAnswerInitialState);
  },[props.quiz.questions])
  
  const handleQuizSubmit = function (event) {
    event.preventDefault();
    quizAnswers.forEach((question)=>{
      console.log(quizAnswers)
      totalScore += question.points;
      userScore += question.selectedAnswer.correct === true ? question.points : 0;
    });
    setHasSubmitted(true);
    correctAnswers = quizAnswers.filter((question=>question.selectedAnswer.correct === true));
    wrongAnswers = quizAnswers.filter((question=>question.selectedAnswer.correct === false));
    console.log(correctAnswers, wrongAnswers)
    console.log(userScore, '/', totalScore);
  };

  return (
    <form onSubmit={handleQuizSubmit}  className="view-quiz">
      {quiz.questions.map((question, index)=>(
      <div key={index} className="quiz-question">
        <span className="question-number">{index+1}</span>
        <MultipleChoicePreview question={question} questionIndex={index} quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers} />
      </div>
      ))}
      <button data-testid="form" className="submit" type="submit">How did I do?</button>
      {hasSubmitted === true ?
      <div className="score-report">
        <h3 className="score-report__title">Score report</h3>
        <p className="score-report__score">You scored {userScore} out of {totalScore}</p>
        {console.log(correctAnswers, wrongAnswers)}
        <div>
          Questions you got right: {correctAnswers.map((question, index) => (
            <li className="score-report__correct-report" key={index}>{question.question} ({question.points} points)</li>
          ))}
        </div>
        <div>
          Questions you got wrong: {wrongAnswers.map((question, index) => (
            <li className="score-report__wrong-report" key={index}>{question.question} ({question.points} {question.points === 1 ? "point" : "points"})</li>
          ))}
        </div>
      </div> :
      null
      }
    </form>
  )
}

export default ViewQuiz;