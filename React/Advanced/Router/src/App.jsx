import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import BasicRouter from "./Components/BasicRouter";
import DynUPar from "./Components/dynamic&useparams";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BasicRouter />
      <BrowserRouter>
        <DynUPar />
      </BrowserRouter>
    </>
  );
}

export default App;
