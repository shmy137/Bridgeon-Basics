import React, { useState, useRef, useEffect } from "react";

function test() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  function handleOnclick1() {
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "black";
    inputRef3.current.style.backgroundColor = "green";
  }
  function handleOnclick2() {
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleOnclick3() {
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }

  return (
    <>
      <br /> <br />
      <button onClick={handleOnclick1}>input 1</button>
      <input ref={inputRef1} />
      <br /> <br />
      <button onClick={handleOnclick2}>input 2</button>
      <input ref={inputRef2} />
      <br /> <br />
      <button onClick={handleOnclick3}>input 3</button>
      <input ref={inputRef3} />
    </>
  );
}
export default test;
