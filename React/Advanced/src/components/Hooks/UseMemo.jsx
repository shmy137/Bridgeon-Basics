import React, { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => slowfunction(number), [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowfunction(num) {
  console.log("number added");
  for (let i = 0; i <= 1000; i++) {}
  return num * 2;
}

export default UseMemo;
