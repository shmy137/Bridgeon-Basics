import { useState } from "react";

function CheckedBox() {
  const [items, setitems] = useState([
    { id: 1, name: "shaamir", checked: false },
    { id: 2, name: "mansoor", checked: false },
    { id: 3, name: "fathima", checked: false },
    { id: 4, name: "mehza", checked: false },
    { id: 5, name: "shabana", checked: false },
  ]);

  function handleChange(id) {
    setitems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }

  const selectedItems = items.filter((item) => item.checked);
  return (
    <>
      <div>
        <p>Items</p>

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
          <p>Selected Items</p>
          {selectedItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default CheckedBox;
