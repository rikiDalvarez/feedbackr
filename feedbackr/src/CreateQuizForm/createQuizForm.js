import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Functions
import {postQuiz} from '../redux/actions/actions'
//import { postQuiz, updateQuiz } from '../apiService'

function CreateQuizForm (props) {
  const setQuizId = props.setQuizId;
  const quiz = useSelector(state => state.quizReducer)
  const quizId = quiz._id
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled ] = useState(false);
  const [inputContent, setInputContent] = useState('')

  const handleQuizName = function (event) {
    event.persist();
    const quizName = event.target.value
    setInputContent(quizName)
    // setQuiz(prevState => {
    //   const newState = {
    //     ...prevState,
    //     name: event.target.value
    //   }
    //   return newState;
    // })
    // if (quizId.length>0) {
    //   const updatedQuiz = {
    //     quizId: props.quizId,
    //     ...quiz
    //   }
    // }
  }

  const handleCreateQuiz = function () {
    const quiz = {
      name: inputContent,
      tags: "",
      questions: []
    }

    dispatch(postQuiz(quiz));
    setIsDisabled(true);
  }
  console.log(quiz, 'quiz')

  return (
    <div className="create-quiz__details">
      <p>Quiz Name:</p>
      {isDisabled===false ?
        <input type="text" value={inputContent} onChange={handleQuizName} required></input> :
        <input type="text" value={inputContent} onChange={handleQuizName} required disabled></input>
      }
      <button onClick={handleCreateQuiz} className="create-quiz-submit">I've named my quiz</button>
    </div>
  )
}

export default CreateQuizForm;