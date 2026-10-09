import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Checkbox from "../components/checkbox";
import CheckedBox from "../components/checkedbox.jsx";
import Pass from "../components/password.jsx";
import Stopwatch from "../components/stopwatch.jsx";
import Counter from "../components/counter.jsx";
import ExpenseTracker from "../components/expenseTracker.jsx";

function App() {
  return (
    <>
      <CheckedBox />
      <Pass />
      <Stopwatch />
      <Counter />
      <ExpenseTracker />
    </>
  );
}

export default App;
