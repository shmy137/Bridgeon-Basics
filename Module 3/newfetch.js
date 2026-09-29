// 1. Fetch all users and print only their names.
// 2. Fetch users and print only name and email.
// 3. Do the same task using async/await.
// 4. Fetch users and find the user with a particular email.
// 5. Fetch users and sort them alphabetically by name.
// 6. Fetch users and get only users whose email contains "biz".
// 7. Fetch users and create a new array containing:
// {
//   id,
//   name,
//   email,
//   city
// }

async function userdata() {
  let users = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await users.json();
//   console.log(data[0].name);
    let newdata = data.slice(0,10).map(name => name.address.city)
console.log(newdata)
}

userdata();