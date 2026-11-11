// import React,{memo,useState,useMemo,useCallback} from "react";

// const Child = memo(function Child({handleClick,count}){
//     console.log("re-rendered")

//     return (
//         <button onClick={handleClick}>Add child - {count}</button>
//     )
// })

// function Combination() {
//   const [count, setCount] = useState(0);
//   const [theme, setTheme] = useState(false);

//   const result = useMemo(() => {
//     console.log("calculating....");
//     return count * 2;
//   }, [count]);

//   const handleClick = useCallback(() => {
//     console.log("rendered");
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundColor: theme ? "red" : "white",
//         color: theme ? "white" : "red",
//       }}
//     >
//       <h2>{count}</h2>
//       <h2>{result}</h2>

//       <button onClick={() => setCount(count + 1)}>ADD</button>
//       <button onClick={() => setTheme(!theme)}>Theme</button>

//       <Child handleClick={handleClick} count={count}/>
//     </div>
//   );
// }

// export default Combination;

import { useState, memo, useCallback, useMemo } from "react";

const Child = memo(function Child({ handleSubmimt }) {
  return (
    <>
      <button onClick={handleSubmimt}>handleclick</button>
    </>
  );
});

function Combination() {
  const [state, setState] = useState(0);
  const [theme, setTheme] = useState(false);

  const result = useMemo(() => {
    console.log("calculating...");
    return state * 2;
  }, [state]);

  const handleSubmimt = useCallback(() => {
    console.log("rendering...");
  }, []);

  return (
    <>
      <div style={{
        backgroundColor : theme ? "red" : "white",
        color : theme ? "white" : "red"
      }}>
        {state}
        <br />
        {result}
        <br />
        <button onClick={() => setState(state + 1)}>ADD</button>
        <button onClick={()=> setTheme(!theme)}>chnage theme</button>

        <Child handleSubmimt={handleSubmimt}>Add</Child>
      </div>
    </>
  );
}
export default Combination;
