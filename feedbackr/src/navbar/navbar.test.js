import React from 'react';
import { render, screen } from '@testing-library/react';

import NavBar from "./navbar";

describe('Navbar', () => {
  it('shows logo, create and view quizes', () => {
    render(<NavBar/>);
    screen.debug();
  })

  it('check if the logo is rendered', () => {
    expect(screen.getByText('Feedbackr')).toBeInTheDocument();
  })

  it('check if create quizes are in the document', () => {
    expect(screen.getByText('Create quiz')).toBeInTheDocument();
  })

  it('check if view quizzes are in the document', () => {
    expect(screen.getByText('View quizzes')).toBeInTheDocument();
  })


})