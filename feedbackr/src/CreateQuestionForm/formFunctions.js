import React from 'react';
// const handleChange = function(event) {
//   const value = event.target.value;
//   if (event.target.name !== "answerOptions") {
//     if(event.target.type === 'text') {
//       dispatch(setQuestion(value))
//     } else {
//       dispatch(setPoints(value))
//     }
//     // setQuestion({
//     //   ...question,
//     //   [event.target.name]: value
//     // })
//   }
// }
// import { useSelector, useDispatch } from 'react-redux';
// // Question types required by renderAnswer function
import MultipleChoice from '../QuestionTypeLibrary/multipleChoice';

//const dispatch = useDispatch()
// const quiz = useSelector(state => state.quizReducer)
// const quizId = quiz._id

// export const handleSubmit = function (event, handleQuestionSubmit, setQuestion, question, questionInitialState)
//   {
//     event.preventDefault();
//     handleQuestionSubmit(question);
//     setQuestion(questionInitialState);
//   }

  //   const handleQuestionSubmit = async function (newQuestion) {
  //   const newQuestionToDb = {
  //     quizId: quizId,
  //     question: newQuestion
  //   }
  //   await postQuestion(newQuestionToDb);
  //   getOneQuiz(quizId, setQuiz);

  // }

  // export const handleChange = function(event) {
  //   const value = event.target.value;
  //   if (event.target.name !== "answerOptions") {
  //     if(event.target.type === 'text') {
  //       dispatch(setQuestion(value))
  //     } else {
  //       dispatch(setPoints(value))
  //     }
  //     // setQuestion({
  //     //   ...question,
  //     //   [event.target.name]: value
  //     // })
  //   }
  // }

  export const renderAnswer = function (questionType, setQuestion, question) {
    return <MultipleChoice setQuestion={setQuestion} question={question}/>
  }