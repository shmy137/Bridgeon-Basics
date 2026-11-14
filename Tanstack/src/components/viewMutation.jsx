import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

function ViewMutation() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],

    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/users");

      return response.data;
    },
  });

  if (isLoading) return <p>...loading</p>;
  if (error) return <p>...error : {error.message}</p>;

  return (
    <>
      {data.map((user) => (
        <p key={user.id}>
          {user.name}
          <br></br>
          {user.email}
        </p>
      ))}
    </>
  );
}
export default ViewMutation;
