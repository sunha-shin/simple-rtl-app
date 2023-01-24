import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button data-testid="minus-btn" 
          onClick={() => setCounter((count) => count - 1)}>
            -
          </button>
          <button
            data-testid="plus-btn"
            onClick={() => setCounter((count) => count + 1)}
          >
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
