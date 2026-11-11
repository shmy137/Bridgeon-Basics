// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";

// import { increment, decrement, reset,incrementbyamount } from "./components/createslice.js";

// function App() {
//   const count = useSelector((state) => state.counter.count);
//   const count2 = useSelector((state) => state.counter.count2);

//   const dispatch = useDispatch();

//   return (
//     <>
//       <h2>count : {count}</h2>
//       <h2>count : {count2}</h2>

//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       <button onClick={() => dispatch(reset())}>0</button>
//       <button onClick={() => dispatch(incrementbyamount(5))}>bt 5</button>
//     </>
//   );
// }
// export default App;

import "./App.css";
import {useDispatch, useSelector } from 'react-redux'
import { increment } from "./components/multipleReducers/counterslice.js";
import { changename } from "./components/multipleReducers/userSlice.js";
function App(){

const count = useSelector((state)=> state.counter.count)
const user = useSelector((state)=> state.user.name)

const dispatch = useDispatch()


  return (
    <>
    <h2>hello</h2>
    {count}
    <button onClick={()=> dispatch(increment())}>+</button>
    {user}
    <button onClick={()=> dispatch(changename("mansoor"))}>=</button>
    </>
  )
}

export default App



