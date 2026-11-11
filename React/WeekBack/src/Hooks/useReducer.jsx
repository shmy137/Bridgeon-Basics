// import { useReducer } from "react";

// function UseReducer() {
//   function reducer(count, action) {
//     switch (action.type) {
//       case "increment":
//         return count + 1;

//       case "decrement":
//         return count - 1;

//       case "reset":
//         return 0;
//       default:
//         return count;
//     }
//   }

//   const [count, dispatch] = useReducer(reducer, 0);
//   return (
//     <div>
//       <h2>count : {count}</h2>
//       {count < 10 && (
//         <button onClick={() => dispatch({ type: "increment" })}>ADD</button>
//       )}
//       <button onClick={() => dispatch({ type: "decrement" })}>DEC</button>
//       <button onClick={() => dispatch({ type: "reset" })}>RES</button>
//     </div>
//   );
// }

// export default UseReducer;

// import { useReducer, useState } from "react";

// function UseReducerrr() {
//   function reduce(state, action) {
//     switch (action.type) {
//       case "ADD":
//         return [
//           ...state,
//           {
//             id: Date.now(),
//             text: action.payload,
//           },
//         ];
//       case "EDIT":
//         return state.map((todo) =>
//           todo.id === action.payload.id
//             ? {
//                 ...todo,
//                 text: action.payload.text,
//               }
//             : todo,
//         );

//       case "DELETE":
//         return state.filter((todo) => todo.id !== action.payload);
//       default:
//         return state
//     }
//   }
//   const [state, dispatch] = useReducer(reduce, []);

//   const [input, setInput] = useState("");
//   const [editId, setEditId] = useState(null);

//   function handleSubmit() {
//     if (input.trim() === "") return;

//     if (editId !== null) {
//       dispatch({
//         type: "EDIT",
//         payload: {
//           id : editId,
//           text : input
//       },
//     }
//     );
//       setEditId(null);
//     } else {
//       dispatch({
//         type: "ADD",
//         payload: input,
//       });
//     }
//     setInput("");
//   }

//   function setEdit(text) {
//     setInput(text.text);
//     setEditId(text.id);
//   }

//   return (
//     <>
//       {editId !== null ? "Edit User" : "Add User"}

//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <button onClick={handleSubmit}>
//         {editId !== null ? "update" : "add"}
//       </button>

//       {state.map((text) => (
//         <div key={text.id}>
//           {text.text}

//           <button onClick={()=> setEdit(text)}>Edit</button>
//           <button
//             onClick={() =>
//               dispatch({
//                 type: "DELETE",
//                 payload: text.id,
//               })
//             }
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }
// export default UseReducerrr;

// import react, { useState, useReducer } from "react";

// function UseReducerrr() {
//   function reduce(state, action) {
//     switch (action.type) {
//       case "ADD":
//         return [
//           ...state,
//           {
//             id: Date.now(),
//             text: action.payload,
//           },
//         ];
//       case "EDIT":
//         return state.map((todo) =>
//           todo.id === action.payload.id
//             ? {
//                 ...todo,
//                 text: action.payload.text,
//               }
//             : todo,
//         );
//       case "DELETE":
//         return state.filter((todo) => todo.id !== action.payload);

//       default:
//         return state;
//     }
//   }
//   const [todos, dispatch] = useReducer(reduce, []);
//   const [input, setInput] = useState("");
//   const [editId, setEditId] = useState(null);

//   function onSubmit() {
//     if (input.trim() === "") return;

//     if (editId !== null) {
//       dispatch({
//         type: "EDIT",
//         payload: {
//           id: editId,
//           text: input,
//         },
//       });
//       setInput("");
//     } else {
//       dispatch({
//         type: "ADD",
//         payload: input,
//       });
//       setInput("");
//     }
//   }

//   function setEdit(todo) {
//     setEditId(todo.id);
//     setInput(todo.text);
//   }

//   return (
//     <>
//       <input value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={onSubmit}>{editId !== null ? "update" : "add"}</button>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           {todo.text}
//           <button onClick={() => setEdit(todo)}>Edit</button>
//           <button
//             onClick={() =>
//               dispatch({
//                 type: "delete",
//                 payload: text.id,
//               })
//             }
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }
// export default UseReducerrr;

import { defaults } from "json-server";
import react, { useReducer } from "react";

function UseReducerrr() {
  function reduce(state, action) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: Date.now(),
            text: action.payload,
          },
        ];
      case "EDIT":
        return state.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                text: action.payload.text,
              }
            : todo,
      

        );
      default : 
         return state;
    }
  }
  const [todos, dispatch] = useReducer(reduce, []);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  function handleSubmit() {
    if (input.trim() === "") return;

    if (editId !== null) {
      dispatch({
        type: "EDIT",
        payload: {
          id: editId,
          text: input,
        },
      });
      setEditId(null);
    } else {
      dispatch({
        type: "ADD",
        payload: input,
      });
    }
  }

  return (
    <>
      <h2>{editId !== null ? "EditUser" : "AddUSer"}</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>{editId !== null ? "Edit" : "Add"}</button>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </>
  );
}
export default UseReducerrr;
