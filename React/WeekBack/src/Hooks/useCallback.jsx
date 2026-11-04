import React, { useState, memo, useCallback } from "react";

const Child = memo(function Child({ handlefunction }) {
  console.log("child re-renderd");

  return <button onClick={handlefunction}>Child child</button>;
});
function UseCallback() {
  const [count, setCount] = useState(0);

  const handlefunction = useCallback(() => {
    console.log("hello");
  }, []);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Add</button>

      <Child handlefunction={handlefunction} />
    </div>
  );
}

export default UseCallback;
