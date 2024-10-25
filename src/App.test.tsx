import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('Our FizzBuzz react app', () => {
  it('should have a number input field', async () => {
    render(<App />);

    const numberField =  await screen.findByLabelText("please enter number");

    expect(numberField).toBeVisible()
  });



  it('should conver 1 to a string', async () => {
    render(<App />);

    const numberField =  await screen.findByLabelText("please enter number");

    fireEvent.input(numberField, {target: {value: 1}});

    expect(screen.getByText("Result: 1")).toBeVisible();
  });

  it('should conver 2 to a string', async () => {
    render(<App />);

    const numberField =  await screen.findByLabelText("please enter number");

    fireEvent.input(numberField, {target: {value: 2}});

    expect(screen.getByText("Result: 2")).toBeVisible();
  });
});

