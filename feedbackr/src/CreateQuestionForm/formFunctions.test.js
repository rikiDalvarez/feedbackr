import { handleChange, handleSubmit} from './formFunctions';
import MultipleChoice from '../QuestionTypeLibrary/multipleChoice'
import { render, screen} from '@testing-library/react';
import React from 'react';

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
};
let question = {
  questionType: 1,
  question: "hello",
  points: 0,
  answerOptions: [{
      value: 0,
      label: "answer 1"
  }],
  correctAnswer: null,
  tags: "",
  time: 0,
}

describe('handleChange', () => {

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

describe('renderAnswer', () => {
  it('should create a new component with the new question', () => {
    const mock = jest.fn(() =>  render(<MultipleChoice setQuestion={setQuestion} question={question} />)
    );
    mock();
    screen.debug()
    expect(mock).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Answer option/)).toBeInTheDocument()
  });
});


