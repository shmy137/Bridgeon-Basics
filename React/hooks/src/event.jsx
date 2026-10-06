import React from "react";
import {useState} from "react";

function App() {
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <>
            <input
                value={name}
                onChange={handleChange}
            />

            <h1>Hello {name}</h1>
        </>
    );
}   
export default App