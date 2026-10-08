import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Checkbox from "../components/checkbox";
import CheckedBox from "../components/checkedbox.jsx";
import Pass from "../components/password.jsx";

function App() {
  return (
    <>
      <CheckedBox />
      <Pass  />
    </>
  );
}

export default App;
