import { handleChange, handleSubmit} from './formFunctions';

describe('handleChange', () => {
  let question = {question: ''};
  const setQuestion = (value) => {question = value}

  it('handleChange for question input', () => {
    const event = {target: { value: 'banana', name: 'question'}}
    handleChange(event, null, setQuestion, question);
    expect(question.question).toBe('banana');
  })

  it('handleChange for answer input', () => {
    const event = {target: { value: 'banana', name: 'answerOptions'}}
    handleChange(event, null, setQuestion, question);
    expect(question.answerOptions).not.toBe('banana');
  })

})

describe('handleSubmit', () => {
  let question = {question: ''};
  const setQuestion = (value) => {question = value}
  const initialQuestion = {
    question: "",
    answerOptions: [{
      value: 0,
      label: ""
    }],
    correctAnswer: null,
    tags: "",
    time: 0,
  }
  const event = {target: { value: 'banana'}, preventDefault: ()=> jest.fn()}
  const handleQuestionSubmit = (question) => {
    let newQuestion = {
      quizId: 1,
      question: question
    }
  }

  it('submit question to database and set back to initial state', () => {
    handleSubmit(event, handleQuestionSubmit, setQuestion, question, initialQuestion)
    expect(question.question).toBe('')
  })

})
