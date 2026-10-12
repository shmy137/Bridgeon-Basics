import React from 'react';
import { useState } from 'react'

function MultiState() {

  const [count, setCount] = useState(0)
  const [secount, secsetCount] = useState(0)

  function increment() {

    setCount((prev) => prev + 1)
    secsetCount((prev) => prev + 2)
  }

  function decrement() {
    setCount((prev) => prev - 1)
    secsetCount((prev) => prev - 2)
  }
  function reset() {
    setCount((prev) => prev = 0)
  }

  return (
    <div >
      <p>Counter 1 : {count}</p>
      <p>Counter 2 : {secount}</p>
      <button onClick={increment}>Increment
      </button>
      <button onClick={decrement}>decrement
      </button>
      <button onClick={reset}>Reset
      </button>


    </div>
  )
}

export default MultiState
