import React, { useState } from "react";
function Checkbox() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "DSA",
      checked: false,
    },
    {
      id: 2,
      name: "NODE",
      checked: false,
    },
    {
      id: 3,
      name: "REACT",
      checked: false,
    },
    {
      id: 4,
      name: "JS",
      checked: false,
    },
  ]);

  function handleChange(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }
  function handlereset() {
    setItems((prev) => prev.map((item) => ({ ...item, checked: false })));
  }
  const selectedItems = items.filter((item) => item.checked);

  return (
    <>
      <div>
        <p>Check Box</p>
        <button onClick={handlereset}>Select Option</button>
        {items.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleChange(item.id)}
            />
            {item.name}
          </label>
        ))}
      </div>
      <div>
        <ul>
          <p>Selected Check Box</p>
          {selectedItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Checkbox;
