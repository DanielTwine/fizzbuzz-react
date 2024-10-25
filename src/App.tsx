import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FizzBuzz} from "./fizzbuzz/fizzbuzz";

function App() {
    const [result, setResult] = useState<string|null>(null);

    const converter = new FizzBuzz();

    const doCovert =  (formData: any)=> {
        if (formData.target.value != null) {
            const fizzresult = converter.convert(formData.target.value);
            setResult(fizzresult);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Welcome to our fizz buzz app.
                </p>

                {result != null && <p>Result: {result}</p>}

                <form onSubmit={doCovert}>
                    <label htmlFor="fizzbuzz_number">please enter number</label>
                    <input type="number" id="fizzbuzz_number" name="fizzbuzz_number" onChange={doCovert}/>
                    <button onClick={() => {setResult(null)}}>Reset</button>

                </form>
            </header>
        </div>
    );
}

export default App;
