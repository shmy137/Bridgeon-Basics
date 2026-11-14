import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
function UseQuery() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["users",page],

    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`,
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

      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        Previous
      </button>
      <button disabled={page === 4} onClick={() => setPage((prev) => prev + 1)}>
        Next
      </button>
    </div>
  );
}

export default UseQuery;
