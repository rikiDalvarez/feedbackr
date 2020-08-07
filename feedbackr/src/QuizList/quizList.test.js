import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import QuizCard from '../QuizCard/quizCard'
import QuizList from "../QuizList/quizList";

const fakeQuizList=[
  {
    name: 'Quiz 1',
    _id: 1,
    questions: [
      {question: 'question1', points: 1},
      {question: 'question2', points: 1}
    ],
    posted: Date(),
  },
  {
    name: 'Quiz 2',
    _id: 2,
    questions: [
      {question: 'question11', points: 1},
      {question: 'question22', points: 2}
    ],
    posted: Date(),
  }
]

describe('QuizList', () => {
  it('renders without crash', () => {
    const div= document.createElement('div');
    ReactDOM.render(<QuizList quizList={fakeQuizList} />,div)
  });

  it('renders paragraph ', () => {
    render(<QuizList quizList={fakeQuizList} />);
    expect(screen.getByText('Click on a quiz and test yourself')).toBeInTheDocument();
  });

  it('should map quiz list and render a QuizCard', () => {
    const mappedQuizList = fakeQuizList.map((quiz) => (
      render(<QuizCard key={quiz._id} quiz={quiz}/>
        )));
      expect(screen.getByText('Quiz 1')).toBeInTheDocument();
  })
});



