import { useQuery } from "@tanstack/react-query";
import React from "react";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (!response.ok) {
        throw new Error("failed");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
