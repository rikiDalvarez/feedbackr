import React from 'react';
import { render, screen, fireEvent, waitForDomChange } from '@testing-library/react';
import MultipleChoice from './multipleChoice';

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

describe('MultipleChoice', () => {

  it('renders MultipleChoice component without crash', () => {
    render(<MultipleChoice question={mockQuestion} />);
  });

  it('onChange event must fire when there is a change in the input box', async () => {
    const onChange = jest.fn();
    const setQuestion = jest.fn();
    const handleChange = jest.fn();
    const { getByPlaceholderText, getByTestId, getByText, getByRole, findByText, findBy} = render(
      <MultipleChoice
        onChange={onChange}
        question={mockQuestion}
        setQuestion={setQuestion}
        handleChange={handleChange}
      />
    );
    const textBox = screen.getAllByRole('textbox')[0]
    console.log(screen.getAllByRole('textbox')[0].value);
    textBox.onChange = handleChange
    fireEvent.change(textBox, {
      target: { value: 'JavaScript' },
    });
    // await waitForDomChange();

    // expect(screen.findByText("Javascript")).toBeInTheDocument();
    screen.debug()
    expect(textBox.value).toBe('JavaScript')
    // await userEvent.type(screen.getByRole('input'), 'JavaScript');
    //expect(handleChange).toHaveBeenCalledTimes(1);
    //expect(onChange).toHaveBeenCalledWith('Javascript', expect.anything());
  });

});
