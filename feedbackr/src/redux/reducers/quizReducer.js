//reducers

const initialQuiz = {
  name: '',
  tags: "",
  questions: []
}

const quizReducer = (state = initialQuiz, action) => {
  const {type} = action
  switch(type) {
    // case 'SET_QUIZ':
    //   return {...state, name};
    // case 'SET_QUIZ_ID':
    //   return {...state, id};
    case 'CREATE_QUIZ':
      return action.quiz;
    default:
      return state
  }
}

export default quizReducer