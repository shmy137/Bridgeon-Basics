// import React, { useState } from "react";
// import axios from "axios";

// function Axios() {
//   const [post, setPost] = useState([]);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/notes");
//       setPost(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <h2>Axios</h2>

//     </div>
//   );
// }

// export default Axios;

import axios from "axios";
import React, { useEffect, useState } from "react";

// function Axios() {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     console.log("useEffect component is running");
//     async function fetchNotes() {
//       try {
//         const response = await axios.get("http://localhost:3000/notes");

//         console.log(response.data);
//         setNotes(response.data);
//       } catch (error) {
//         console.log("error:", error);
//       }
//     }

//     fetchNotes();
//   }, []);

//   async function addNote() {
//     console.log("addNote component is running");

//     try {
//       const response = await axios.post("http://localhost:3000/notes", {
//         title: "Demo",
//         content: "this a demo content  2345678",
//       });

//       console.log(response.data);
//       setNotes((prev) => [...prev, response.data]);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <h2>My App</h2>
//       <button
//         onClick={() => {
//           console.log("worked");
//           addNote();
//         }}
//       >
//         Add Note
//       </button>

//       {notes.map((note) => (
//         <div key={note.id}>
//           <br />
//           <p>{note.title}</p>
//           <p>{note.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

function Axios() {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await axios.get("http://localhost:3000/notes", {
          params: {
            _page: page,
            _per_page: 3,
          },
        });
        setNotes(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("next");
      }
    }
    fetchNotes();
  }, [page]);
  async function addNotes() {
    try {
      const response = await axios.post("http://localhost:3000/notes", {
        title: "demo",
        content: "this a fake demo content",
      });
      setNotes((prev) => [...prev, response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  async function putNotes(id) {
    try {
      const response = await axios.put("http://localhost:3000/notes/1", {
        title: "hello",
        content: "dummy fake content",
      });

      setNotes((prev) =>
        prev.map((note) => (note.id === id ? response.data : note)),
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h2>Myapp</h2>

      <button onClick={putNotes}>Add Content</button>
      <br />
      {notes.map((note) => (
        <div key={note.id}>
          <p>{note.title}</p>
          <p>{note.content}</p>
          <br />
          <br />
        </div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>

      <span>Page {page}</span>

      <button onClick={() => setPage(page + 1)}>Next</button>
    </>
  );
}

export default Axios;
