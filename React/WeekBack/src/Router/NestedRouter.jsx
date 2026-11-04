import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function Products() {
  return (
    <>
      <h1>Products Page</h1>

      <Link to="/products/list">Product List</Link>
      <br />
      <Link to="/products/details">Product Details</Link>

      <hr />

      <Outlet />
    </>
  );
}

function ProductList() {
  return <h2>Product List is displayed!</h2>;
}

function ProductDetails() {
  return <h2>Product Details are displayed!</h2>;
}

function NestedRouter() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />}>
          <Route path="list" element={<ProductList />} />
          <Route path="details" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NestedRouter;