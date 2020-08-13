import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setQuestion, setPoints, postQuestion, getOneQuiz} from '../redux/actions/actions';
import MultipleChoice from '../QuestionTypeLibrary/multipleChoice';

function CreateQuestionForm () {
  const quiz = useSelector(state => state.quizReducer)
  const quizId = quiz._id
  const dispatch = useDispatch()
  const question = useSelector(state => state.questionReducer)

  const handleChange = function(event) {
    const value = event.target.value;
    console.log(value)
    if (event.target.name !== "answerOptions") {
      if(event.target.type === 'text') {
        dispatch(setQuestion(value))
      } else {
        dispatch(setPoints(value))
      }
    }
  }

  const renderAnswer = function () {
    return <MultipleChoice  />
  }


  const handleSubmit =  (event, question) =>
  {
    event.preventDefault();
    const newQuestion = {
      quizId: quizId,
      question: question
    };
    dispatch(postQuestion(newQuestion))
    setTimeout(() => dispatch(getOneQuiz(quizId)), 1000);
  }

  console.log('quiz state', quiz)


  return (
    <form className="question-builder" onSubmit={(event)=>handleSubmit(event, question)}>

      <h3>Question Information</h3>

      <div className="question-builder__input">
        <label>Question</label>
        <input
          role='input_question'
          type="text"
          name="question"
          value={question.question}
          onChange={(event)=>handleChange(event)}
        ></input>
      </div>

      <div className="question-builder__input">
        <label>Points</label>
        <input
          role='input_points'
          type="number"
          name="points"
          value={question.points}
          onChange={(event)=>handleChange(event)}
        ></input>
      </div>

      <h3>Answer Options</h3>
      {renderAnswer(question.questionType, setQuestion, question)}

      <div className="question-builder__input">
        <input type="submit" value="Create new Question" className="submit"></input>
      </div>
      <a data-testid="link_view_quizzes" href="/view-quizzes">I've added my last question... I'm done</a>
      <a href="/create-quiz">I'd like to make a new quiz</a>
    </form>
  )
}

export default CreateQuestionForm;