import React, { useEffect } from 'react';

function MultipleChoicePreview (props) {

  const question = props.question;
  const questionIndex = props.questionIndex;
  const quizAnswers = props.quizAnswers;
  const setQuizAnswers = props.setQuizAnswers;

  const handleAnswerSelect = function (event) {
    event.persist();
    const isCorrectAnswer = question.correctAnswer == event.target.value ? true : false;
    console.log("quizAnwers", quizAnswers);

    setQuizAnswers(prevState => {
      console.log('prevState of quizAnswers', prevState);
      const newState = [...prevState];
      console.log('newState of quizAnswers', newState);
      newState[questionIndex].selectedAnswer.value = event.target.value;
      newState[questionIndex].selectedAnswer.correct = isCorrectAnswer;
      return newState;
    })
  }

  return (
    <div className="multiple-choice-preview">
      <p className="multiple-choice-preview__question">{question.question} ({question.points} {question.points === 1 ? "point" : "points"})</p>
      {question.answerOptions.map((answerOption, index)=>
        <div key={`${index}${answerOption.label}`} className="multiple-choice-preview__options">
          <input
            type="radio"
            id={index}
            value={answerOption.value}
            onChange={handleAnswerSelect}
            name={question.question}
            />
          <label htmlFor={index}>{String.fromCharCode(index+65)}: {answerOption.label}</label>
        </div>
      )}
    </div>
  )

}

export default MultipleChoicePreview;