import axios from "axios";
import React, { useEffect, useState } from "react";

function Axios() {
  const [user, setUsers] = useState([]);
  const [prod, setProd] = useState([]);
  const [note, setnote] = useState([]);

  const [page, setPage] = useState(1);
  const [totalpage, setTotalPages] = useState(1);

  const perPage = 2;
  useEffect(() => {
    async function fetchUsers() {
      try {
        let response1 = await axios.get("http://localhost:3000/users?", {
          params: {
            _page: page,
            _per_page: perPage,
          },
        });
        let response2 = await axios.get("http://localhost:3000/products");
        let response3 = await axios.get("http://localhost:3000/notes");
        setUsers(response1.data.data);
        setTotalPages(response1.data.pages)
        setProd(response2.data);
        setnote(response3.data);
        console.log(response1.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, [page]);

  return (
    <div>
      <h1>users Data</h1>

      {/* {Object.entries(user).map(([collection, items]) => (
        <div key={collection}>
          <h2>{collection}</h2> */}

      {Array.isArray(user) ? (
        user.map((item) => (
          <div key={item.id}>
            {Object.entries(item).map(([key, value]) => (
              <p key={key}>
                {key} :{" "}
                {typeof value === "object"
                  ? JSON.stringify(value)
                  : String(value)}
              </p>
            ))}
            <hr />
          </div>
        ))
      ) : (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      )}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>

      <p>page:{page} of {totalpage}</p>
      <button disabled={page === totalpage} onClick={() => setPage(page +1)}>
        NExt
      </button>
      {/* 
      {Array.isArray(prod) ? (
        prod.map((item) => (
          <div key={item.id}>
            {Object.entries(item).map(([key, value]) => (
              <p key={key}>
                {key} :{" "}
                {typeof value === "object"
                  ? JSON.stringify(value)
                  : String(value)}
              </p>
            ))}
            <hr />
          </div>
        ))
      ) : (
        <pre>{JSON.stringify(items, null, 2)}</pre>
      )}
      {Array.isArray(note) ? (
        note.map((item) => (
          <div key={item.id}>
            {Object.entries(item).map(([key, value]) => (
              <p key={key}>
                {key} :{" "}
                {typeof value === "object"
                  ? JSON.stringify(value)
                  : String(value)}
              </p>
            ))}
            <hr />
          </div>
        ))
      ) : (
        <pre>{JSON.stringify(items, null, 2)}</pre>
      )} */}

      {/*
   </div>
   ))} */}
    </div>
  );
}

export default Axios;
