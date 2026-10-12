// import { useState } from "react";

// function Pass() {
//   const [password, showPassword] = useState(false);
//   return (
//     <>
//       <input type={password ? "text" : "password"} />
//       <button onClick={()=> showPassword(!password)}>{password ? "hide": "show"}</button>
//     </>
//   );
// }
// export default Pass

import { useState } from "react";

function Pass() {
  const [showPassword, setPassword] = useState(false);

  return (
    <>
      <input type={showPassword ? "text" : "password"} />
      <button onClick={() => setPassword(!showPassword)}>
        {showPassword ? "hide" : "show"}
      </button>
    </>
  );
}

export default Pass