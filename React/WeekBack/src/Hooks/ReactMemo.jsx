import React, {useState,memo} from 'react'


const Child = memo(function Child({name}){
    console.log("hellooooooooo")
     return <>hello {name}</>
})

function ReactMemo() {

    const [ count,setCount] = useState(0)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={(()=>setCount(count+1))}>Add</button>

      <Child name="shaamir" />
    </div>
  )
}



export default ReactMemo
