//reducers

const initialQuiz = {
  name: '',
  tags: "",
  questions: []
}

const quizReducer = (state = initialQuiz, action) => {
  const {type} = action
  switch(type) {
    case 'CREATE_QUIZ':
      return {...state, ...action.quiz}
    default:
      return state
  }
}



export default quizReducer