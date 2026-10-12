// import React from 'react';
// import { useState } from 'react';

// function myApp() {

//   let initialValue = 0;
//   const [nums, setNum] = useState(initialValue);

//   const updateNum = () => {
//     setNum(nums + 1);
//   }
//   const reduceNum = () => {
//     if (nums > 0) {

//       setNum(nums - 1);
//     }
//   }
//   const resetNum = () => {
//     setNum(initialValue)
//   }
//   return (
//     <>
//       <p>Counter : {nums}</p>
//       <button onClick={updateNum}>Increment</button>
//       <button onClick={reduceNum}>Decrement</button>
//       {/*<button onClick={() => setNum(nums - 1 )}>Decrement</button>*/}
//       <button onClick={resetNum}>Reset</button>
//     </>

//   )
// }

// export default myApp

import { useState } from "react";
import MultiState from "./multiState";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>

      {counter < 10 && (
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Increment
        </button>
      )}

      {counter > 0 && (
        <button onClick={() => setCounter((prev) => prev - 1)}>
          Decrement
        </button>
      )}
    </div>
  );

  <MultiState />
}

export default App;
