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
    if (input1.trim() === "" && input2.trim() === "") return;

    const newNote = {
      title: input1,
      content: input2,
    };

    setTodo([...todo, newNote]);

    setInput1("");
    setInput2("");
  }

  function handleKey(e) {
    if (e.key === "Enter" && input1.trim() !== "") {
      handleAdd();
    }
  }

  return (
    <>
      <div className="flex flex-col gap-20 items-center justify-center mt-20">
        <div className="todoinput bg-amber-600 h-46 w-130 gap-2">
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
          <label htmlFor="">
            Content :
            <textarea
              className="todoadder border border-solid border-black "
              rows="2"
              type="text "
              value={input2}
              onKeyDown={handleKey}
              onChange={(e) => setInput2(e.target.value)}
            />
          </label>
          <button onClick={handleAdd} className="bg-amber-300 w-10">
            {" "}
            Add
          </button>
        </div>

        <ul>
          {todo.map((item, index) => (
            <div className="list h-30 w-30 bg-amber-600 flex items-center  justify-center gap-2 border-2 border-black">
              <li key={index}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NoteApp;
