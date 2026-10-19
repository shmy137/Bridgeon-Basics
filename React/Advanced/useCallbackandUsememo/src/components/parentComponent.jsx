import React, { memo, useCallback, useState } from "react";
import Title from "./titile.jsx";
import Button from "./button.jsx";
import Count from "./count.jsx";

function ParentComponent() {
  const [age, setAge] = useState(21);
  const [salary, setSalary] = useState(25000);

//   const incrementAge = () => {
//     setAge(age + 1);
//   };
//   const incrementSalary = () => {
//     setSalary(salary + 10000);
//   };

    const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Age++</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Sal ++</Button>
    </div>
  );
}

export default memo(ParentComponent)

