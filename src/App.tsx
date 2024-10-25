import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [result, setResult] = useState<string|null>(null);

    const doCovert =  (formData: any)=> {
        setResult(formData.target.value);
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
                    <button type="submit">Convert</button>
                </form>
            </header>
        </div>
    );
}

export default App;
