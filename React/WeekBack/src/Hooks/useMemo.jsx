import React, { useState, useMemo } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  function slowFunciton(num) {
    console.log("checking");
    for (let i = 0; i < 100000; i++) {}
    return num * 2;
  }

  const result = useMemo(() => {
    return slowFunciton(number);
  }, [number]);

  return (
    <div
      style={{
        backgroundColor: theme ? "red" : "white",
        color: theme ? "white" : "red",
      }}
    >
      <h2> result : {result}</h2>
      <button onClick={() => setNumber(number + 1)}>Add</button>

      <button onClick={() => setTheme(!theme)}>Change theme</button>
    </div>
  );
}

export default UseMemo;
