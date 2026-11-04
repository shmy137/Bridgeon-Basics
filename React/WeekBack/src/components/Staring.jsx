import React, { useState, useRef } from "react";
import "../App.css";

// function Staring() {
//   const [state, setState] = useState();
//   const star1 = useRef();
//   const star2 = useRef();
//   const star3 = useRef();
//   const star4 = useRef();
//   const star5 = useRef();

//   function one() {
//     star1.current.style.backgroundColor = "red";
//     star2.current.style.backgroundColor = "";
//     star3.current.style.backgroundColor = "";
//     star4.current.style.backgroundColor = "";
//     star5.current.style.backgroundColor = "";
//   }
//   function two() {
//     star1.current.style.backgroundColor = "red";
//     star2.current.style.backgroundColor = "red";
//     star3.current.style.backgroundColor = "";
//   }
//   function three() {
//     star1.current.style.backgroundColor = "red";
//     star2.current.style.backgroundColor = "red";
//     star3.current.style.backgroundColor = "red";
//     star4.current.style.backgroundColor = "";
//     star5.current.style.backgroundColor = "";
//   }
//   function four() {
//     star1.current.style.backgroundColor = "red";
//     star2.current.style.backgroundColor = "red";
//     star3.current.style.backgroundColor = "red";
//     star4.current.style.backgroundColor = "red";
//     star5.current.style.backgroundColor = "";
//   }
//   function five() {
//     star1.current.style.backgroundColor = "red";
//     star2.current.style.backgroundColor = "red";
//     star3.current.style.backgroundColor = "red";
//     star4.current.style.backgroundColor = "red";
//     star5.current.style.backgroundColor = "red";
//   }

//   return (
//     <>
//       <input className="inner-child" ref={star1} onClick={one} />
//       <input className="inner-child" ref={star2} onClick={two} />
//       <input className="inner-child" ref={star3} onClick={three} />
//       <input className="inner-child" ref={star4} onClick={four} />
//       <input className="inner-child" ref={star5} onClick={five} />
//     </>
//   );
// }

// export default Staring;

// function Staring(){
//     const [star,setStar]= useState(0)

//     return(<>
//         {
//             [1,2,3,4,5].map((num) =>(
//                 <div key={num}
//                 className="inner-child"
//                 onClick={()=>setStar(num)}
//                 style={{
//                     backgroundColor : num <= star?"red":"white"
//                 }}
//                 ></div>
//             ))
//         }
//     </>)
// }

// export default Staring;


function Staring() {
  const [star, setStar] = useState(0);
  return (
    <>
      {[1, 2, 3, 4, 5].map((num) => (
        <div
          key={num}
          className="inner-child"
          onClick={() => setStar(num)}
          style={{ backgroundColor: num <= star ? "red" : "white" }}
        ></div>
      ))}
    </>
  );
}

export default Staring;
