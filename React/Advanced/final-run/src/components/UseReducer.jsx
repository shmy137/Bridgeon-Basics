// import React, { useReducer, useState } from "react";

// const ACTIONS = {
//   NEW_TODO: "new-todo",
// };

// function reducer(todo, action)
// {
//   switch (action.type) {
//     case ACTIONS.NEW_TODO:
//       return [...todo, newTodo(action.payload.name)];
//   }
// }

// function newTodo(name) {
//   return { id: Date.now(), name: name, complete: false };
// }

// function UseReducer() {
//   const [todo, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch({ type: ACTIONS.NEW_TODO, payload: { name: name } });
//     setName("");
//   }

//   console.log(todo);

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </form>
//     </>
//   );
// }

// export default UseReducer;


import {useReducer,useState} from "react";
function reducer(state,action){
  if(action.type === "ADD"){
    return [...state,action.payload]
  }
  if(action.type === "DELETE"){
    return state.filter((item,index)=>{
      index !== action.payload
    });
  }
  return state;
}
function App(){
const [todo,dispatch]=useReducer(reducer,[]);
const [task,setTask]=useState("");
const [search,setSearch]=useState("");

let addTask=()=>{
  if(task.trim === "")return;

  dispatch({type:"ADD",payload:task})
  setTask("");
};
return(
<>
<h1>TODO</h1>
<input 
value={task}
onChange={(e)=>setTask(e.target.value)}
placeholder="Enter Task"/>

<button onClick={addTask}>ADD</button>
<br></br>
<br></br>

<input
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="Search"/>

{todo.map((item,index)=>{
  if(item.toLowerCase().includes(search.toLowerCase())){
    return(
      <p key={index}>{item}
      <button onClick={()=>dispatch({type:"DELETE",payload:index})}>
      DELETE</button>
      </p>
    )
  }
})}
</>

)
}
export default App;