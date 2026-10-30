import React, { useState, useMemo, useCallback } from "react";

const Child = React.memo(function Child({ onIncrement }) {
  console.log("Child rendered");

  return (
    <button onClick={onIncrement}>
      Increment Counter
    </button>
  );
});

function Appp() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // Expensive calculation
  const slowFunction = (num) => {
    console.log("Calculating...");
    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += num;
    }

    return result;
  };

  // useMemo caches the calculated result
  const calculation = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // useCallback caches the function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>

      <Child onIncrement={increment} />

      <hr />

      <h2>Expensive Calculation</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <p>Result: {calculation}</p>
    </div>
  );
}

export default Appp;