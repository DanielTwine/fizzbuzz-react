import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Our FizzBuzz react app', () => {
  it('should have a number input field', async () => {
    render(<App />);

    const numberField =  await screen.findByLabelText("please enter number");

    expect(numberField).toBeVisible()
  });

  it('should have a convert button', () => {
    render(<App />);

    const convertButton = screen.getByText("Convert")

    expect(convertButton).toBeVisible()
  });
});

