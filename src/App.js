import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button data-testid="minus-btn">-</button>
          <button data-testid="plus-btn">+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
