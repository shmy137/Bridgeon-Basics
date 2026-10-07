import React, { useEffect, useRef, useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(0);

  const ref = useRef(0);
  useEffect(() => {
    document.title = `counter ${counter}`;

    ref.current = counter;
  }, [counter]);

  return (
    <>
      <p>counter : {counter}</p>
      <p>previous counter : {ref.current}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Counter</button>
    </>
  );
}
export default App;
