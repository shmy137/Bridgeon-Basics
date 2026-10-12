import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function NoteApp() {
  const [todo, setTodo] = useState([]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  function handleAdd() {
    if (input1.trim() === "") return;
    setTodo([...todo, input1]);
    setInput1("");
  }

  function handleKey(e) {
    if (e.key === "Enter" && input1.trim() !== "") {
      handleAdd();
    }
  }

  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <div className="todoinput bg-amber-600 h-60 w-130 gap-2">
          <label htmlFor="">
            Title : 
            <input
              className="todoadder border border-solid border-black"
              type="text "
              value={input1}
              onKeyDown={handleKey}
              onChange={(e) => setInput1(e.target.value)}
            />
          </label>
          <br />
          <input
            className="todoadder border border-solid border-black"
            type="text "
            value={input2}
            onKeyDown={handleKey}
            onChange={(e) => setInput2(e.target.value)}
          />
          <button onClick={handleAdd} className="bg-amber-300 w-10">
            {" "}
            Add
          </button>
        </div>
        <ul>
          {todo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NoteApp;
