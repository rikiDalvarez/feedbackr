import React from 'react';
import { render, screen, fireEvent, cleanup, getByLabelText, getByDisplayValue } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateQuestionForm from './createQuestionForm'
import ReactDOM from 'react-dom'

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

describe('createQuestionForm', () => {

    it('render component without crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CreateQuestionForm quiz={''} question={mockQuestion}/>, div)
    })

    it("displays the right value", () => {
        render(<CreateQuestionForm renderAnswer={renderAnswer} question={question} onChange={null} />);
        screen.debug();
        expect(screen.getByDisplayValue("hello")).toBeInTheDocument();
    });

})
