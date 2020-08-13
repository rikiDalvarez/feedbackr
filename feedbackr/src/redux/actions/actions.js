  //actions
import {BASE_URL} from '../../apiService'

export const setQuiz = quizName => ({
  type: 'SET_QUIZ',
  name: quizName,
})

export const setQuizId = quizID => ({
  type: 'SET_QUIZ_ID',
  id: quizID
})

export const createQuiz = quiz => ({
  type: 'CREATE_QUIZ',
  quiz
})


export default function fetchQuizzes() {
  return dispatch => {
    fetch(`${BASE_URL}/quizzes`)
      .then(res => res.json())
      .then(jsonQuizzes => {
        dispatch(setDB(jsonQuizzes))
      })
  }
}

export const setQuestion = (question) => ({
  type: 'SET_QUESTION',
  question
})

export const setPoints = (points) => ({
  type: 'SET_POINTS',
  points
})

export const createQuestion = (question) => ({
  type: 'CREATE_QUESTION',
  question
})


export const postQuestion = (newQuestion) => {
  return dispatch => {
    fetch(`${BASE_URL}/questions`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
        },
        body:JSON.stringify(newQuestion)
      })
        .then(res => res.json())
        .then(question => dispatch(createQuestion(question)))
        .catch(err => console.error(err));
    }
  }


export const getOneQuiz = (quizId) => {
  return dispatch => {
    fetch(`${BASE_URL}/quiz/${quizId}`)
    .then(res => res.json())
    .then(quiz => {
      dispatch(createQuiz(quiz))
    })
    .catch(err => console.log(err));
  }
}


export const postQuiz = (quiz) => {
return dispatch => {
  fetch(`${BASE_URL}/quizzes`, {
      method: 'POST',
      headers: {
      'Content-Type':'application/json'
      },
      body:JSON.stringify(quiz)
    })
      .then(res => res.json())
      .then(quiz => dispatch(createQuiz(quiz)))
      .catch(err => console.error(err));
  }
}

export const setDB = quizzes => ({
  type: 'SET_DB',
  quizzes: quizzes
})
