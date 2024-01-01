import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count != 0) {
      setCount(count -1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <div className="counter-buttons">
          <button onClick={increaseCount}>increae the count</button>
          <button onClick={resetCount}>Reset</button>
          <button onClick={decreaseCount}>decreae the count</button>
        </div>
      </div>
    </>
  );
}

export default App;
