const questionInitialState = { // object form initial question state
  questionType: 1,
  question: "",
  points: 0,
  answerOptions: [{
    value: 0,
    label: "ss"
  }],
  correctAnswer: null,
  tags: "",
  time: 0,
}


const questionReducer = (state = questionInitialState, action) => {
  const {type} = action
  switch(type) {
    case 'SET_QUESTION':
      return { ...state, question:action.question};
    case 'SET_POINTS':
      return {...state, points:action.points};
    case 'CREATE_QUESTION':
      return {...state, ...action.question}
    default:
      return state
  }
}

export default questionReducer