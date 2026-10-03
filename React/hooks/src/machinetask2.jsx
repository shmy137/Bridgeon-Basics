import React, { useState, useEffect, useRef } from "react";

function colorChange() {
  const colorBox = useRef(null);

  function handleChange(color) {
    colorBox.current.style.backgroundColor = color;
  }

  return (
    <>
      <br />
      <br />
      <br />

      <button onClick={() => handleChange("red")}>Red</button>

      <button onClick={() => handleChange("green")}>Green</button>

      <button onClick={() => handleChange("yellow")}>Yellow</button>

      <button onClick={() => handleChange("blue")}>Blue</button>

      <button onClick={() => handleChange("black")}>Black</button>

      <br />
      <br />
      <br />

      {/* <input ref={colorBox} /> */}
      <div ref={colorBox} style={{height: "500px",width:"500px",}}></div>
    </>
  );
}

export default colorChange;
