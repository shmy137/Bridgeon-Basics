import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

function UseMutation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const mutation = useMutation({
    mutationFn: async (newUser) => {
      const response = await axios.post("http://localhost:3000/users", newUser);
      return response.data;
    },
  });

  

  function handleSubmit(e) {
    e.preventDefault();

    mutation.mutate({
      name,
      email,
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Adding..." : "Add user"}
        </button>
      </form>

      {mutation.isSuccess && <p>USer Added</p>}
      {mutation.isError && <p> {mutation.error.message}</p>}
    </div>
  );
}

export default UseMutation;
