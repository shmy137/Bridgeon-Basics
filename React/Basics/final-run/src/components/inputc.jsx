import React, { useState } from "react";

function InputC() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const onKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onKeyDown={onKeyDown}
        onChange={(e) => setInput(e.target.value)}
      />
      {items.map((item, index) => {
        // return (
        //   <p key={index}>
        //     {index}
        //     {item}
        //   </p>
        // );
        return (
          <div key={index}>
            {item.split("").map((letter, i) => {
              return (
                <p key={i}>
                  {" "}
                  {i} {letter}
                </p>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
export default InputC;
