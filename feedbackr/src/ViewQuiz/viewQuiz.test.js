import React from 'react';
import ReactDOM from "react-dom";
import { render, screen, fireEvent} from '@testing-library/react';
import userEvent  from '@testing-library/user-event'
import ViewQuiz from './viewQuiz';

const quiz ={
    posted: "2020-08-03T13:04:14.168Z",
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
  
  const quizAnswer = [];

  const setQuizAnswers = (initialState) => {return quizAnswer = initialState}

describe('viewQuiz', () => {

  it('should render without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<ViewQuiz quiz={quiz} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render the initial state with no selected answers', () => {
    render(<ViewQuiz quiz={quiz} />);
    expect(screen.queryByLabelText(/A1/)).not.toBeChecked()
    expect(screen.queryByLabelText(/B1/)).not.toBeChecked()
  });

//   it('should submit the answers', async () => {
//     const mockSubmit = jest.fn(() => console.log('hello maylin'))
//     // const onSubmit = jest.fn()
//     const {getByTestId} = render(<ViewQuiz quiz={quiz} onSubmit={mockSubmit} />);
    
  //   //const button = screen.getByTestId("form")
  //   await userEvent.click(getByTestId('form'));
  //   expect(mockSubmit).toHaveBeenCalledTimes(1)
  // })
})
