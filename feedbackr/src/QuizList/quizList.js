import React, {useEffect} from 'react';
import QuizCard from '../QuizCard/quizCard';
import { useSelector, useDispatch } from 'react-redux';
import fetchQuizzes from '../redux/actions/actions'
function QuizList () {

  const dispatch = useDispatch(); //to update (data, type)

  // const quizList = props.quizList;

  useEffect(()=>{
    dispatch(fetchQuizzes())
  },[]);

  const quizList = useSelector(state => state.dbReducer) //useSelector to fetch the state
  console.log(quizList, 'db')


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