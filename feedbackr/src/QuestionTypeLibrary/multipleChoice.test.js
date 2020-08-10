import React from 'react';
import { render, screen, fireEvent, waitForDomChange } from '@testing-library/react';
import MultipleChoice from './multipleChoice';

const mockQuestion = { // object form initial question state
  questionType: 1,
  question: "JavaScript",
  points: 0,
  answerOptions: [{
    value: 0,
    label: "JavaScript Label"
  }],
  correctAnswer: null,
  tags: "",
  time: 0,
}

describe('MultipleChoice', () => {

  it('renders MultipleChoice component without crash', () => {
    render(<MultipleChoice question={mockQuestion} />);
  });

  it('must render the add and remove buttons correctly', async () => {
    const onChange = jest.fn();
    const setQuestion = jest.fn();
    const handleChange = jest.fn();
    const { getByPlaceholderText, getByTestId, getByText, getByRole, findByText, findBy} = render(
      <MultipleChoice
        onChange={onChange}
        question={mockQuestion}
        setQuestion={setQuestion}
        handleChange={handleChange}
        option={{label:'test'}}
      />
    );


    // screen.debug()JET
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();

  });

});
