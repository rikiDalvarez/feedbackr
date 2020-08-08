import React from 'react';
import { render, screen, fireEvent, waitForDomChange } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CreateQuizForm from './CreateQuizForm';

describe('CreateQuizForm', () => {
  it('renders CreateQuizForm component', () => {
    render(<CreateQuizForm quiz={''} />);
    screen.debug();
    // screen.getByRole('');
  });

  it('should display title', () => {
    render(<CreateQuizForm quiz={''} />);
    expect(screen.getByText('Quiz Name:')).toBeInTheDocument();
  });
  it('should render textbox', () => {
    render(<CreateQuizForm quiz={''} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('input must show in textbox after change', async () => {
    const onChange = jest.fn(()=> 'JavaScript');
    const { getByPlaceholderText, getByTestId, getByText, getByRole, findByText, findBy} = render(
      <CreateQuizForm
        quiz={{
          name: 'testValue',
          tags: '',
          questions: [],
        }}
        setQuiz={onChange}
        onChange={onChange}
        quizId={''}
      />
    );
    expect(screen.getByDisplayValue('testValue')).toBeInTheDocument();
    screen.debug()
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
    // await waitForDomChange();

    // expect(screen.findByText("Javascript")).toBeInTheDocument();
    screen.debug()
    // await userEvent.type(screen.getByRole('input'), 'JavaScript');
    expect(onChange).toHaveBeenCalledTimes(1);
    //expect(onChange).toHaveBeenCalledWith('Javascript', expect.anything());
  });

  it('should render button', () => {
    render(<CreateQuizForm quiz={''} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
