import React from 'react';

// Question types required by renderAnswer function
import MultipleChoice from '../QuestionTypeLibrary/multipleChoice';

export const handleSubmit = function (event, handleQuestionSubmit, setQuestion, question, questionInitialState) {
    event.preventDefault();
    handleQuestionSubmit(question);
    setQuestion(questionInitialState);
  }

  export const handleChange = function(event, index, setQuestion, question) {
    const value = event.target.value;
    if (event.target.name !== "answerOptions") {
      setQuestion({
        ...question,
        [event.target.name]: value
      })
    }
  }

  export const renderAnswer = function (questionType, setQuestion, question) {
    return <MultipleChoice setQuestion={setQuestion} question={question}/>
  }