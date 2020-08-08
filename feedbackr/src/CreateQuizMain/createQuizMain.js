import React, { useState , useEffect } from 'react';

// Functions
import { updateQuiz, postQuestion, getOneQuiz } from '../apiService'

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

  const [ quizId, setQuizId ] = useState("");
  const [ question, setQuestion ] = useState(questionInitialState);
  const quiz = props.quiz;
  const setQuiz = props.setQuiz;
  const db = props.db;
  const setDb = props.setDb;

  const handleQuestionSubmit = async function (newQuestion) {
    const newQuestionToDb = {
      quizId: quizId,
      question: newQuestion
    }
    await postQuestion(newQuestionToDb);
    getOneQuiz(quizId, setQuiz);

    console.log('db after question added', db);
    console.log('quiz after question added', quiz);
  }

  return (
    <div className="create-quiz">
      <CreateQuizForm quiz={quiz} setQuiz={setQuiz} quizId={quizId} setQuizId={setQuizId}/>

      <div className="create-quiz__create-question-form">
        <CreateQuestionForm handleQuestionSubmit={handleQuestionSubmit} question={question} setQuestion={setQuestion} questionInitialState={questionInitialState}/>
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