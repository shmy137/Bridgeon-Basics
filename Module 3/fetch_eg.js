// async function fetchh() {
//   let newfetch = await fetch("https://jsonplaceholder.typicode.com/users");
//   let newdata = await newfetch.json();
//   // console.log(
//   //   newdata.map((name) => {
//   //     return name.name;
//   //   }),
//   // );

//   let neww = newdata.slice(0, newdata.length).map((name) => ({
//     name: name.name,
//     email: name.email,
//   }));
//   console.log(neww);
// }
// fetchh();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) =>
//     res.json().then((txt) => {
//       console.log(
//         txt.slice(0, txt.length).map((name) => {
//           return name.company.catchPhrase;
//         }),
//       );
//     }),
//   )
//   .catch(() => {
//     console.log("faile");
//   });

async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        console.log(data.address.street);
    } catch (error) {
        console.log(error);
    }
}

getData();