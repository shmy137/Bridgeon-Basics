import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Axios from "./components/Axios.jsx";
import UseContext from "./components/useContext.jsx";
import useCustomHook from "./components/customHook.jsx";
import UseReducer from "./components/useReducer.jsx";

function App() {
  // const { count, increment, decrement } = useCustomHook();

  return (
    <>
    <UseReducer />

      {/* customHook */}
      {/* <h2>count:{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}
      
      {/* <Axios /> */}
      {/* <UseContext /> */}
    </>
  );
}

export default App;
