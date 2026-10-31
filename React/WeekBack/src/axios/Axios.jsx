
import React, { useState, useEffect } from "react";
import axios from "axios";

function Axios() {
  const [users, setUsers] = useState([]);

  // Form states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // Store editing user ID
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:3000/users";

  // GET - Fetch users
  async function fetchUsers() {
    try {
      const response = await axios.get(API);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // POST - Add user
  async function addUser(e) {
    e.preventDefault();

    try {
      const response = await axios.post(API, {
        name,
        username,
        email
      });

      setUsers((prev) => [...prev, response.data]);

      clearForm();
    } catch (error) {
      console.log(error);
    }
  }

  // Select user for editing
  function editUser(user) {
    setEditId(user.id);
    setName(user.name);
    setUsername(user.username);
    setEmail(user.email);
  }

  // PUT - Update user
  async function updateUser(e) {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${API}/${editId}`,
        {
          name,
          username,
          email
        }
      );

      setUsers((prev) =>
        prev.map((user) =>
          user.id === editId ? response.data : user
        )
      );

      clearForm();
    } catch (error) {
      console.log(error);
    }
  }

  // DELETE - Remove user
  async function deleteUser(id) {
    try {
      await axios.delete(`${API}/${id}`);

      setUsers((prev) =>
        prev.filter((user) => user.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  }

  // Clear form
  function clearForm() {
    setName("");
    setUsername("");
    setEmail("");
    setEditId(null);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h2>{editId !== null ? "Edit User" : "Add User"}</h2>

      {/* Form */}
      <form onSubmit={editId !== null ? updateUser : addUser}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">
          {editId !== null ? "Update User" : "Add User"}
        </button>

        {editId !== null && (
          <button type="button" onClick={clearForm}>
            Cancel
          </button>
        )}
      </form>

      <hr />

      {/* User List */}
      <h2>Users List</h2>

      {users.map((user, index) => (
        <div key={user.id}>
          <h3>{index + 1}. {user.name}</h3>

          <p>{user.username}</p>
          <p>{user.email}</p>

          <button onClick={() => editUser(user)}>
            Edit
          </button>

          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </>
  );
}

export default Axios;
