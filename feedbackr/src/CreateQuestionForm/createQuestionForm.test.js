import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateQuestionForm from './createQuestionForm'
import ReactDOM from 'react-dom'

describe('createQuestionForm', () => {
    it('render component without crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CreateQuestionForm/>, div)
    })

    it()
})
