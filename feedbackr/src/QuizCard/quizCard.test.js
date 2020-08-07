import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';

import QuizCard from "../QuizCard/quizCard";

const fakeQuizList=[
  {
    name: 'Quiz 1',
    _id: 1,
    questions: [
      {question: 'question1', points: 1},
      {question: 'question2', points: 2}
    ],
    posted: Date('Aug 7th 2020'),
  }
]

describe('QuizCard', () => {

  it('display a quiz name from a quiz card', () => {
    render(<QuizCard quiz={fakeQuizList[0]} />)
    expect(screen.getByText(fakeQuizList[0].name)).toBeInTheDocument()
  });

  it('display a date when the quiz was posted', () => {
    render(<QuizCard quiz={fakeQuizList[0]} />);
    expect(screen.getByText('Posted: Aug 7th 2020')).toBeInTheDocument()
  });

  it('display number of questions a quiz has', () => {
    render(<QuizCard quiz={fakeQuizList[0]} />);
    screen.debug();
    expect(screen.queryByText('Number of questions: 2')).toBeInTheDocument()
  });

  it('display total points of the quiz', () => {
    render(<QuizCard quiz={fakeQuizList[0]} />);
    expect(screen.getByText('Total points: 3')).toBeInTheDocument()
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QuizCard quiz={fakeQuizList[0]}/>, div)
  })

  it('links to the right quiz', () => {
    render(<QuizCard quiz={fakeQuizList[0]} />);
    screen.debug();
    expect(screen.getByRole('link', {href:'/do-quiz?id=1'}))
  })

});