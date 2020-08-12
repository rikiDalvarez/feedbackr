import React, { useState , useEffect } from 'react';

// Functions
import { updateQuiz, postQuestion, getOneQuiz } from '../apiService'
import { renderAnswer } from '../CreateQuestionForm/formFunctions'
import { useSelector, useDispatch } from 'react-redux';
// Question types required by renderAnswer function
// Components
import ViewQuiz from '../ViewQuiz/viewQuiz';
import CreateQuestionForm from '../CreateQuestionForm/createQuestionForm';
import CreateQuestionPreview from '../CreateQuestionPreview/createQuestionPreview';
import CreateQuizForm from '../CreateQuizForm/createQuizForm';

function CreateQuizMain (props) {
  const questionInitialState = { // object form initial question state
    questionType: 1,
    question: "",
    points: 0,
    answerOptions: [{
      value: 0,
      label: ""
    }],
    correctAnswer: null,
    tags: "",
    time: 0,
  }

  // const [ quizId, setQuizId ] = useState("");
  const [ question, setQuestion ] = useState(questionInitialState);
  const setQuiz = props.setQuiz;
  const db = props.db;
  const setDb = props.setDb;
  //useSelector
  const quiz = useSelector(state => state.quizReducer)
  console.log(quiz, 'quiz')
  const quizId = quiz._id

  // const handleQuestionSubmit = async function (newQuestion) {
  //   const newQuestionToDb = {
  //     quizId: quizId,
  //     question: newQuestion
  //   }
  //   await postQuestion(newQuestionToDb);
  //   getOneQuiz(quizId, setQuiz);

  // }

  return (
    <div className="create-quiz">
      <CreateQuizForm quiz={quiz} setQuiz={setQuiz} quizId={quizId} setQuizId='hi'/>

      <div className="create-quiz__create-question-form">
        <CreateQuestionForm handleChange='hi' handleSubmit='hi' renderAnswer={renderAnswer} handleQuestionSubmit='hi' question={question} setQuestion={setQuestion} questionInitialState={questionInitialState}/>
      </div>

      <div className="create-quiz__quiz-preview">
        <h3>Next question Preview</h3>
        <CreateQuestionPreview question={question} />
        <h3>Quiz Preview</h3>
        <ViewQuiz quiz={quiz} />
      </div>
      <div className="create-quiz__quiz-preview stack-top"></div>
    </div>

  )
}

export default CreateQuizMain