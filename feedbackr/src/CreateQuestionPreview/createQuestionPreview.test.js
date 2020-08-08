import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MultipleChoicePreview from '../QuestionPreviewLibrary/multipleChoicePreview';

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

describe('CreateQuestionPreview', () => {
  it('renders MultipleChoicePreview component without crash', () => {


    render(<MultipleChoicePreview question={mockQuestion} />);
    screen.debug();
  });
});