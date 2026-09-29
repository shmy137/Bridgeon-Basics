async function dat(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users")

    const newdata = await data.json();

    let names = newdata.slice(0,10).map(name => name.name);
    // console.log(names)
    let sortedname = names.sort((a,b)=> b.localeCompare(a))
    console.log(sortedname);
}
dat()