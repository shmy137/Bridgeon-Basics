import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Axios from "./components/Axios.jsx";
import UseContext from "./components/Hooks/useContext.jsx";
import useCustomHook from "./components/Hooks/customHook.jsx";
import UseReducer from "./components/Hooks/useReducer.jsx";
import UseMemo from "./components/Hooks/UseMemo.jsx";
import ReactMemo from "./components/ReactMemo.jsx";
import UseCallback from "./components/UseCallback.jsx";

function App() {
  // const { count, increment, decrement } = useCustomHook();

  // React Memo
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* use memo */}
      {/* <UseMemo /> */}

      {/* React Memo */}
      {/* 
      <p>counter : {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <ReactMemo /> */}

      {/* <UseReducer /> */}

      {/* customHook */}
      {/* <h2>count:{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}

      {/* <Axios /> */}
      {/* <UseContext /> */}

      <UseCallback />
    </>
  );
}

export default App;
