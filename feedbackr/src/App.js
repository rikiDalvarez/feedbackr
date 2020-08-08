import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component imports
import NavBar from './navbar/navbar'
import CreateQuizMain from './CreateQuizMain/createQuizMain';
import DoQuiz from './DoQuiz/doQuiz'
import QuizList from './QuizList/quizList'
import { getAllQuizzes } from './apiService'

function App() {

  const [quiz, setQuiz] = useState({
    name: "",
    tags: "",
    questions: []
  });

  const [db, setDb] = useState([]);

  console.log('DATABASE', db);

  useEffect(()=>{
    getAllQuizzes(setDb);
  },[]);

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route path="/create-quiz" render={(props)=> <CreateQuizMain {...props} quiz={quiz} setQuiz={setQuiz} db={db} setDb={setDb}/>}></Route>
        <Route path="/do-quiz" render={(props)=> <DoQuiz {...props} quiz={quiz}/>}></Route>
        <Route path="/view-quizzes" render={(props)=> <QuizList {...props} quizList={db}/>}></Route>
        {/* footer */}
      </div>
    </Router>
  );
}

export default App;
