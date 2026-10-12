import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import InputC from "./components/inputc.jsx";
import Stopwatch from "./components/stopwatch.jsx";

function App() {
  return (
    <>
      <InputC />
      <Stopwatch />
    </>
  );
}

export default App;
