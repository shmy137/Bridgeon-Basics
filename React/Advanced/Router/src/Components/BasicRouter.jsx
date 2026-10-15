import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";


function BasicRouter() {
  function Home() {
    return <h1>Home Page</h1>;
  }
  function About() {
    return <h1>About</h1>;
  }
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default BasicRouter;
