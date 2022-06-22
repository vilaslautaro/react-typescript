import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (num: number = 1) => {
    setCounter(counter + num);
  };


  return (
    <div className="mt-5">
      <h3>Counter: {counter}</h3>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => incrementCounter()}
      >
        +
      </button>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => incrementCounter(2)}
      >
        ++
      </button>
      <button
        className="btn btn-outline-danger mt-2"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};
