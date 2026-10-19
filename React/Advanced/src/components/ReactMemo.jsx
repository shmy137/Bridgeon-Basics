import React, { memo } from "react";

function ReactMemo() {
  let name = "shaamir";
  console.log("add is clicked");
  return (
    <div className="m-30 h-100 w-100 border-black border-1 items-center justify-center flex">
      <h2>{name}</h2>
      {/* {count} */}
    </div>
  );
}

export default memo(ReactMemo);
