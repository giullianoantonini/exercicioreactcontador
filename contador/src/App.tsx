import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="divContador">
      <h1>Contador:</h1>
      <h2>{count}</h2>
      <div className="divBotoes">
        <Button onClick={handleDecrease}>
          {"<"} Contador</Button>
        <Button onClick={resetCounter}>Reset</Button>
        <Button onClick={handleIncrement}>Contador {">"}</Button>
      </div>
    </div>
  );
}

export default App;
