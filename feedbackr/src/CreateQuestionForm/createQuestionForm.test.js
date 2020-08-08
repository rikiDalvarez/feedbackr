import React from 'react';
import { render, screen, fireEvent, cleanup, getByLabelText, getByDisplayValue } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateQuestionForm from './createQuestionForm'
import ReactDOM from 'react-dom'

const question = {
    question: 'hello',
}
const handleChange = jest.fn();
const renderAnswer = jest.fn();


describe('createQuestionForm', () => {
    it('render component without crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CreateQuestionForm renderAnswer={renderAnswer} question={''}/>, div)
    })

    it('should check if the Question Information is rendered', () => {
        render(<CreateQuestionForm renderAnswer={renderAnswer} question={''}/>)
        expect(screen.getByText('Question Information')).toBeInTheDocument();
    })
    
    it("displays the right value", () => {
        render(<CreateQuestionForm renderAnswer={renderAnswer} question={question} onChange={null} />);
        screen.debug();
        expect(screen.getByDisplayValue("hello")).toBeInTheDocument();
    });

    it('check if the input value is updated after change', () => {

        const renderedComponent = render(<CreateQuestionForm renderAnswer={renderAnswer} handleChange={handleChange} question={question} />)
        const input = renderedComponent.getByRole('input_question')
        expect(screen.getByDisplayValue('hello')).toBeInTheDocument();

        fireEvent.change(input, {target:{value: 'question 1'}});
        
        screen.debug();
        expect(handleChange).toHaveBeenCalledTimes(1);
        
    })
})
