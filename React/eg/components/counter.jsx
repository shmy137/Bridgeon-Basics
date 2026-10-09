import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleCounterAdd() {
    setCounter((e) => (e >= 10 ? e + 2 : e + 1));
  }

  function handleCounterSub() {
    setCounter((e) => (e <= 10 ? e - 1 : e - 2));
  }
  return (
    <>
      <p> Counter: {counter}</p>
      {counter !== 20 && <button onClick={handleCounterAdd}>ADD</button>}
      {counter !== 0 && 
      <button onClick={handleCounterSub}>Sub</button>
      }
    </>
  );
}
export default Counter;
