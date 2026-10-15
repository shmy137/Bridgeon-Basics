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
      <h1>Our Products</h1>
      <p>Select for more details</p>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <h3>{product.price}</h3>

            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </>
  );
}

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <>
        <h3>Product Not Found</h3>
        <Link to="/">Back to Home</Link>
      </>
    );
  }

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <h3>{product.price}</h3>

      <Link to="/">Back to Home</Link>
    </>
  );
}

function NotFound() {
  return (
    <>
      <h3>Product not found</h3>
      <Link to="/"> Back to Home</Link>
    </>
  );
}

function DynUPar() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default DynUPar;
