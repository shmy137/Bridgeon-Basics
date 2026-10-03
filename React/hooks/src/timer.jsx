// import { useState, useEffect } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCount(prev => prev + 1);
//         }, 1000);

//         return () => {
//             clearInterval(timer);
//         };
//     }, []);

//     return (
//         <h1>Time: {count}</h1>
//     );
// }

// export default App;

import { useState, useEffect } from "react";

function App() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) {
            return;
        }

        const timer = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [isRunning]);

    function handleStart() {
        setIsRunning(true);
    }

    function handleStop() {
        setIsRunning(false);
    }

    function handleReset() {
        setIsRunning(false);
        setTime(0);
    }

    return (
        <div>
            <h1>Time: {time}</h1>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default App;