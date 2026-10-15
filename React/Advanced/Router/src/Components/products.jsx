import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    description: "A powerful laptop for coding, work, and everyday use.",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
    category: "Electronics",
    description: "A modern smartphone with excellent performance.",
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    category: "Accessories",
    description: "Comfortable headphones for music and calls.",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 1500,
    category: "Accessories",
    description: "A reliable keyboard for your everyday setup.",
  },
];

function Home() {
  return (
    <>
      <h2>Home</h2>
      <h3>View Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
          <p>{product.category}</p>
          <p>{product.description}</p>

          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </>
  );
}

function ProdDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <>
        <h3>Product not found</h3>
        <Link to="/">Back</Link>
      </>
    );
  }
  return (
    <>
      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
      <p>{product.category}</p>
      <p>{product.description}</p>

      <Link to="/">Back</Link>
    </>
  );
}

function NotFound() {
  return (
    <>
      <h3>404</h3>
      <Link to="/">Back</Link> 
    </>
  );
}

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProdDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default Main;
