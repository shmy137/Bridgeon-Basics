import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/actions";

function App() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  return (
    <div>
      {count}

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
