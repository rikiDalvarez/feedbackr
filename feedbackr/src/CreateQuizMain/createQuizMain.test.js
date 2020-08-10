import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom'
import CreateQuizForm from '../CreateQuizForm/createQuizForm'
import CreateQuestionForm from '../CreateQuestionForm/createQuestionForm'
import CreateQuestionPreview from '../CreateQuestionPreview/createQuestionPreview.js'
import ViewQuiz from '../ViewQuiz/viewQuiz';

const mockQuestion = { // object form initial question state
  questionType: 1,
  question: "",
  points: 0,
  answerOptions: [{
    value: 0,
    label: ""
  }],
  correctAnswer: null,
  tags: "",
  time: 0,
}

const mockQuiz = {
  poste: "2020-08-03T13:04:14.168Z",
  _id: "5f286f6788b08a3cc0b82a73",
  name: "postman create quiz 1",
  tag: "postman create quiz 1 tag",
  questions: [
      {
          answerOptions: [
              {
                  _id: "5f286f9a88b08a3cc0b82a75",
                  value: 1,
                  label: "Answer A1"
              },
              {
                  _id: "5f286f9a88b08a3cc0b82a76",
                  value: 2,
                  label: "Answer B1"
              },
              {
                  _id: "5f286f9a88b08a3cc0b82a77",
                  value: 3,
                  label: "Answer C1"
              }
          ],
          _id: "5f286f9a88b08a3cc0b82a74",
          questionType: "1",
          question: "postman create quiz 1 Question 1- Answer A",
          points: 2,
          correctAnswer: 1,
          tags: "question 1",
          time: 0
      },
      {
          answerOptions: [
              {
                  _id: "5f286fe188b08a3cc0b82a79",
                  value: 1,
                  label: "Answer A2"
              },
              {
                  _id: "5f286fe188b08a3cc0b82a7a",
                  value: 2,
                  label: "Answer B2"
              },
              {
                  _id: "5f286fe188b08a3cc0b82a7b",
                  value: 3,
                  label: "Answer C2"
              }
          ],
          _id: "5f286fe188b08a3cc0b82a78",
          questionType: "1",
          question: "postman create quiz 1 Question 2 - Answer B",
          points: 2,
          correctAnswer: 3,
          tags: "question 2",
          time: 0
      }
  ]
}

describe('CreateQuizForm', () => {

  it('renders component without crash', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <CreateQuizForm quiz={''}/>, div)
  })

})

describe('CreateQuestionForm', () => {

  it('renders component without crash', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <CreateQuestionForm quiz={''} question={mockQuiz.questions[0]} />, div)
  })

})


describe('CreateQuestionPreview', () => {

  it('renders component without crash', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <CreateQuestionPreview quiz={''} question={mockQuiz.questions[0]}/>, div)
  })

})

describe('ViewQuiz', () => {

  it('renders component without crash', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <ViewQuiz quiz={mockQuiz} question={mockQuiz.questions[0]} />, div)
  })

})
