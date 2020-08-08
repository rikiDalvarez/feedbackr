import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { getAllQuizzes } from './apiService';
import ReactDOM from 'react-dom';
import QuizList from './QuizList/quizList';
import DoQuiz from './DoQuiz/doQuiz';

jest.mock('./apiService');

const fakeQuizzes = [
  { name: 'name1', tags: 'first tag', questions: [] },
  { name: 'name2', tags: 'second tag', questions: [] },
];

getAllQuizzes.mockResolvedValue(fakeQuizzes);

describe('App.js ', () => {
  it('loading articles', async () => {
    render(<App />);
    expect(getAllQuizzes).toHaveBeenCalledTimes(1);
  });

  it('renders navbar and proper href', () => {
    render(<App />);

    expect(screen.getByText('Create Quiz').getAttribute('href')).toBe(
      '/create-quiz'
    );
    expect(screen.getByText('View quizzes').getAttribute('href')).toBe(
      '/view-quizzes'
    );
  });

  test('rendering child component', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<QuizList quizList={fakeQuizzes} />, div);
    ReactDOM.render(<DoQuiz quiz={fakeQuizzes[0]} />, div);
  });
});
