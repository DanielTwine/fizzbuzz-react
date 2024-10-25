import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to our fizz buzz app.
        </p>

        <label htmlFor="fizzbuzz_number">please enter number</label>
        <input type="number" id="fizzbuzz_number" name="fizzbuzz_number" />
        <button>Convert</button>
      </header>

    </div>
  );
}

export default App;
