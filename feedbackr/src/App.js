import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Component imports
import NavBar from './Navbar/navbar'
import CreateQuizMain from './CreateQuizMain/createQuizMain';
import DoQuiz from './DoQuiz/doQuiz'
import QuizList from './QuizList/quizList'

// import { useSelector, useDispatch } from 'react-redux';
// import fetchQuizzes from './redux/actions/actions'

function App() {

  // const dispatch = useDispatch(); //to update (data, type)

  const [quiz, setQuiz] = useState({
    name: "",
    tags: "",
    questions: []
  });

  //const [db, setDb] = useState([]);

  // useEffect(()=>{
  //   dispatch(fetchQuizzes())
  // }, []);

  // const db = useSelector(state => state.dbReducer) //useSelector to fetch the state
  // console.log(db, 'db')


  return (
    <Router>
      <div className="App">
        <NavBar/>
        {/* take out props from components */}
        <Route path="/create-quiz" render={(props)=> <CreateQuizMain {...props} quiz={quiz} setQuiz={setQuiz} /*db={db}*/ setDb='hi' />}></Route>
        <Route path="/do-quiz" render={(props)=> <DoQuiz {...props} quiz={quiz}/>}></Route>
        <Route path="/view-quizzes" render={(props)=> <QuizList {...props} /*quizList={db}*//>}></Route>
      </div>
    </Router>
  );
}

export default App;
