import { useReducer } from "react";

function UseReducer() {
  function reducer(count, action) {
    switch (action.type) {
      case "increment":
        return count + 1;

      case "decrement":
        return count - 1;

      case "reset":
        return 0;
      default:
        return count;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>count : {count}</h2>
      {count < 10 && (
        <button onClick={() => dispatch({ type: "increment" })}>ADD</button>
      )}
      <button onClick={() => dispatch({ type: "decrement" })}>DEC</button>
      <button onClick={() => dispatch({ type: "reset" })}>RES</button>
    </div>
  );
}

export default UseReducer;
