import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();
function ComponentsA() {
  const [name, setName] = useState("shaamir");
  return (
    <div>
      <UserContext.Provider value={name}>
        <h1>component A</h1>
        <p>{name}</p>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentsA;
