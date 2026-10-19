import React, { memo } from "react";

function Button({ handleClick, children }) {
  console.log(`${children} is rendering`);
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default memo(Button);
