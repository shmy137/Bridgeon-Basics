// import axios from 'axios'
// import { BrowserRouter,useParams, Routes, Route, Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// function Home({ products }) {
//   return (
//     <>
//       <h1>Home</h1>
//       {products.map((prod, index) => (
//         <div key={index}>
//           {prod.name}
//           {prod.price}
//           {prod.category}

//           <Link to={`/products/${prod.id}`}>View Details</Link>
//         </div>
//       ))}
//     </>
//   );
// }

// function DynamicRouter() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const prodcuts = await axios.get("http://localhost:3001/products");
//         setProducts(prodcuts.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <>
//         <Routes>
//           <Route path="/" element={<Home products={products} />} />
//           {/* <Route path="/products/:id" element={<ProductDetails products={products}/>} /> */}
//         </Routes>
//     </>
//   );
// }
// export default DynamicRouter;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import {
//   useParams,
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

// function Home({ products }) {
//   return (
//     <>
//       <h1>Home</h1>
//       {products.map((prod, index) => (
//         <div key={index}>
//           {prod.name}
//           {prod.price}
//           {prod.category}
//           <Link to={`/products/${prod.id}`}>View Details</Link>
//         </div>
//       ))}
//     </>
//   );
// }

// function ProductDetails({ products }) {
//   const { id } = useParams();

//   const checkproduct = products.find((item) => String(item.id) === id);

//   if (!checkproduct) {
//     return (
//       <>
//         <h3>No product</h3>
//         <Link to={"/"}>Back to Home</Link>
//       </>
//     );
//   }
//   return (
//     <>
//       {checkproduct.name}
//       {checkproduct.price}
//       {checkproduct.category}

//       <Link to='/'>Go home</Link>
//     </>
//   );
// }

// function DynamicRouter() {
//   const [product, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const products = await axios.get("http://localhost:3000/products");
//         setProducts(products.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <h1>Products</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home products={product} />} />
//           <Route
//             path="/products/:id"
//             element={<ProductDetails products={product} />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
// export default DynamicRouter;

import axios from "axios";
import { useState, useEffect } from "react";
import {
  useParams,
  BrowserRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";

function Home({ products }) {
  return (
    <>
      {products.map((item, index) => (
        <div key={index}>
          {item.name}
          {item.price}
          {item.category}

          <Link to={`/products/${item.id}`}>view Details</Link>
        </div>
      ))}
    </>
  );
}

function Details({ products }) {
  const { id } = useParams();

  const checkproducts = products.find((item) => String(item.id) === id);

  if (!checkproducts) {
    return (
      <>
        <h2>Error</h2>
        <Link to={"/"}>Go Back</Link>
      </>
    );
  }
  return (
    <>
      {checkproducts.name}
      {checkproducts.price}
      {checkproducts.category}

      <Link to={"/"}>Back to Home</Link>
    </>
  );
}

function DynamicRouter() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await axios.get("http://localhost:3000/products");
        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home products={products} />}>
            {" "}
          </Route>
          <Route
            path="/products/:id"
            element={<Details products={products} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default DynamicRouter;
