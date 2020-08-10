import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateQuestionForm from './createQuestionForm';
import ReactDOM from 'react-dom';

const question = {
    questionType: 1,
    question: "hello",
    points: 0,
    answerOptions: [{
        value: 0,
        label: ""
    }],
    correctAnswer: null,
    tags: "",
    time: 0,
}
const handleChange = jest.fn();
const renderAnswer = jest.fn();

describe('createQuestionForm', () => {
    it('should render component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CreateQuestionForm renderAnswer={renderAnswer} quiz={''} question={question} />, div)
    })

    it('should render "Question Information"', () => {
        render(<CreateQuestionForm renderAnswer={renderAnswer} question={''}/>)
        expect(screen.getByText('Question Information')).toBeInTheDocument();
    })

    it("should display the right input value", () => {
        render(<CreateQuestionForm renderAnswer={renderAnswer} question={question} onChange={null} />);
        screen.debug();
        expect(screen.getByDisplayValue("hello")).toBeInTheDocument();
    });

    it('should call onChange', () => {
        const renderedComponent = render(<CreateQuestionForm renderAnswer={renderAnswer} handleChange={handleChange} question={question} />)
        const input = renderedComponent.getByRole('input_question')
        expect(screen.getByDisplayValue('hello')).toBeInTheDocument();
        fireEvent.change(input, {target:{value: 'question 1'}});
        screen.debug();
        expect(handleChange).toHaveBeenCalledTimes(1);
    })

    it  ('should link to all quizzes', () => {
        render(<CreateQuestionForm renderAnswer={renderAnswer} handleChange={handleChange} question={question} />);
        expect(screen.getByTestId('link_view_quizzes', {href:'/view-quizzes'}));
      })

    it('should show answer options', () => {
        const renderAnswer = jest.fn()
        render(<CreateQuestionForm renderAnswer={renderAnswer} handleChange={handleChange} question={question} />)
        expect(renderAnswer).toHaveBeenCalledTimes(1)
    })

});

