// // import React, { useReducer, useState } from "react";

// // function reducer(todo, action) {
// //   //   if (action.type === "ADD") {
// //   //     return [...todo, action.payload];
// //   //   }
// //   //   if(action.type==="DELETE"){
// //   //     return todo.filter((item,index)=>{
// //   //         index !==action.payload
// //   //     })
// //   //   }
// //   switch (action.type) {
// //     case "ADD":
// //       return [...todo, action.payload];
// //     case "DELETE":
// //       return todo.filter((item, index) => (
// //         index !== action.payload
// //       ));
// //     case "EDIT":
// //       return todo.map((item, index) => (
// //         index === action.payload.index ? action.payload.task : item
// //       ));
// //   }
// // }

// // function UseReducer2() {
// //   const [todo, dispatch] = useReducer(reducer, []);
// //   const [task, setTask] = useState("");

// //   function addtask() {
// //     if (task.trim === "") return;

// //     dispatch({ type: "ADD", payload: task });
// //     setTask("");
// //   }

// //   function editTask(index) {
// //     const newTask = prompt("Edit task", todo[index]);

// //     if (newTask !== null && newTask.trim() !== "") {
// //       dispatch({
// //         type: "EDIT",
// //         payload: { index, task: newTask },
// //       });
// //     }
// //   }
// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         value={task}
// //         onChange={(e) => setTask(e.target.value)}
// //       />
// //       <button onClick={addtask}>Adfd</button>

// //       <br />
// //       <br />
// //       <br />
// //       {todo.map((item, index) => (
// //         <p key={index}>
// //           {item}
// //           <button onClick={() => editTask(index)}>Edit</button>
// //           <button onClick={() => dispatch({ type: "DELETE", payload: index })}>
// //             DELETE
// //           </button>
// //         </p>
// //       ))}
// //     </div>
// //   );
// // }

// // export default UseReducer2;

// import React from "react";

// import React, { useReducer, useState } from "react";

// function reducer(todo, action) {

//     switch(action.type){
//         case "EDIT" :
//             return todo.map((todo)=>(
//                 todo.id === action.payload.id ?
//                 {...todo,text:action.payload.text}:todo
//             ))
//         case "ADD" :
//             return [...todo,{
//                 id:Date.now(),
//                 text:action.payload,
//                 completed: false,
//             }]
//     }
// }
// function UseReducer2() {
// const [todo, setTodo] = useReducer(reducer, []);
// const [input, setInput] = useState("");
// const [edit, setEdit] = useState(bull);

// function handleSubmit() {
//     if (input.trim() === "") return;

//     if (edit !== null) {
//     dispatch({
//         type: "EDIT",
//         payload: { id: edit, text: input },
//     });
//     setEdit("")
//     }else{
//         dispatch({
//             type:"ADD",
//             payload : input
//         })
//     }
//     setInput("")
// }

// return (
//     <>
//     <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//     />

//     <button onClick={handleSubmit}>ADD</button>

//     </>
// );
// }

import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,   
      );

    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo,
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  function handleSubmit() {
    if (!input.trim()) return;

    if (editId !== null) {
      dispatch({
        type: "EDIT",
        payload: { id: editId, text: input },
      });

      setEditId(null);
    } else {
      dispatch({
        type: "ADD",
        payload: input,
      });
    }

    setInput("");
  }

  function handleEdit(todo) {
    setInput(todo.text);
    setEditId(todo.id);
  }

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId !== null ? "Update" : "Add"}
      </button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() =>
              dispatch({
                type: "TOGGLE",
                payload: todo.id,
              })
            }
          />

          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => handleEdit(todo)}>Edit</button>

          <button
            onClick={() =>
              dispatch({
                type: "DELETE",
                payload: todo.id,
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
