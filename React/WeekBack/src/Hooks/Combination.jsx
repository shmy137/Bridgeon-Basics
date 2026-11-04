import React,{memo,useState,useMemo,useCallback} from "react";


const Child = memo(function Child({handleClick,count}){
    console.log("re-rendered")

    return (
        <button onClick={handleClick}>Add child - {count}</button>
    )
})

function Combination() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  const result = useMemo(() => {
    console.log("calculating....");
    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    console.log("rendered");
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme ? "red" : "white",
        color: theme ? "white" : "red",
      }}
    >
      <h2>{count}</h2>
      <h2>{result}</h2>

      <button onClick={() => setCount(count + 1)}>ADD</button>
      <button onClick={() => setTheme(!theme)}>Theme</button>


      <Child handleClick={handleClick} count={count}/>
    </div>
  );
}

export default Combination;
