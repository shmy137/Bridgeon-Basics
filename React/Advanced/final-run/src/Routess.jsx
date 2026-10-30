import { BrowserRouter, Routes, Route, Outlet, Link, Navigate } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <h2>Admin Panel</h2>

      <nav>
        <Link to="/admin">Dashboard</Link> 
        <Link to="/admin/users">Users</Link>
      </nav>

      <Outlet />
    </div>
  );
}

function Dashboard() {
  return <h3>Dashboard Content</h3>;
}

function Users() {
  return <h3>Users Content</h3>;
}

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/admin" replace></Navigate>}
        ></Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
