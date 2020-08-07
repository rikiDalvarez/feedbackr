import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    expect(screen.getByRole('input')).toBeInTheDocument();
  });

  it('fire event after text inside input', async () => {
    const onChange = jest.fn();
    render(
      <CreateQuizForm
        quiz={{
          name: 'testValue',
          tags: '',
          questions: [],
        }}
        setQuiz={onChange}
        // onChange={onChange}
        quizId={''}
      />
    );
    expect(screen.getByDisplayValue('testValue')).toBeInTheDocument();

    fireEvent.change(screen.getByRole('input'), {
      target: { value: 'JavaScript' },
    });
    // await userEvent.type(screen.getByRole('input'), 'JavaScript');
    screen.debug();
    expect(onChange).toHaveBeenCalledTimes(1);
    //expect(onChange).toHaveBeenCalledWith('Javascript', expect.anything());
  });

  it('should render button', () => {
    render(<CreateQuizForm quiz={''} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
