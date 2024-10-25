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

  it('should work with fizzbuzz', async () => {
    render(<App />);

    const numberField =  await screen.findByLabelText("please enter number");

    fireEvent.input(numberField, {target: {value: 3}});
    expect(screen.getByText("Result: fizz")).toBeVisible();

    fireEvent.input(numberField, {target: {value: 5}});
    expect(screen.getByText("Result: buzz")).toBeVisible();

    fireEvent.input(numberField, {target: {value: 15}});
    expect(screen.getByText("Result: fizzbuzz")).toBeVisible();
  });

  it('should clear the form', async () => {
    render(<App />);

    const numberField =  await screen.findByLabelText("please enter number");

    fireEvent.input(numberField, {target: {value: 2}});
    fireEvent.click(screen.getByText("Reset"))

    expect(screen.queryByText("Result: 2")).not.toBeInTheDocument()
  });
});

