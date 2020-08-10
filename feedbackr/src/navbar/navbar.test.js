import React from 'react';
import { render, screen } from '@testing-library/react';

import NavBar from "./navbar";

describe('Navbar', () => {

  it('check if the logo is rendered', () => {
    render(<NavBar/>);
    expect(screen.getByText('Feedbackr')).toBeInTheDocument();
  })

  it('check if create quizes are in the document', () => {
    expect(screen.getByText('Create quiz')).toBeInTheDocument();
  })

  it('check if view quizzes are in the document', () => {
    expect(screen.getByText('View quizzes')).toBeInTheDocument();
  })

})