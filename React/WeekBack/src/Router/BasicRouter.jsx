// import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useLocation,
//   NavLink,
// } from "react-router-dom";

// function Home() {
//   // console.log(pathname)
//   return (
//     <>
//       <h2>Home</h2>
//       <p>This is home page</p>
//     </>
//   );
// }
// function About() {
//   //  console.log(pathname)
//   return (
//     <>
//       <h2>About</h2>
//       <p>This is about page</p>
//     </>
//   );
// }
// function Contact() {
//   //  console.log(pathname)
//   return (
//     <>
//       <h2>Contact</h2>
//       <p>This is contact page</p>
//     </>
//   );
// }

// function FromBasicRouter() {
//   const location = useLocation();

//   console.log(location.pathname);

//   return (
//     <>
//       <h1>Routes</h1>
//       {/* <Home />
//       <About />
//       <Contact /> */}

//       <nav style={{ color: "red" }}>
//         <NavLink
//           to="/"
//           style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
//         >
//           Home
//         </NavLink>{" "}
//         <NavLink
//           to="/about"
//           style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
//         >
//           About
//         </NavLink>{" "}
//         <NavLink
//           to="/contact"
//           style={{ color: location.pathname === "/contact" ? "blue" : "black" }}
//         >
//           Contact
//         </NavLink>
//       </nav>
//       {/* 
//       <nav style={{ color: "red" }}>
//         <Link
//           to="/"
//           style={{ color: location.pathname === "/" ? "blue" : "black" }}
//         >
//           Home
//         </Link>{" "}
//         <Link
//           to="/about"
//           style={{ color: location.pathname === "/about" ? "blue" : "black" }}
//         >
//           About
//         </Link>{" "}
//         <Link
//           to="/contact"
//           style={{ color: location.pathname === "/contact" ? "blue" : "black" }}
//         >
//           Contact
//         </Link>
//       </nav> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

// function BasicRouter() {
//   return (
//     <>
//       <BrowserRouter>
//         <FromBasicRouter />
//       </BrowserRouter>
//     </>
//   );
// }
// export default BasicRouter;
