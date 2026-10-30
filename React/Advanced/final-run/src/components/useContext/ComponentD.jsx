import React, { useContext } from 'react'
import {UserContext} from './ComponentsA.jsx';

function ComponentD() {
    const name = useContext( UserContext)
  return (
    <div>
      <h1>component D</h1>
      <h2 >Name : {name}</h2>
    </div>
  )
}

export default ComponentD
