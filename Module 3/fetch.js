// fetch("https://catfact.ninja/fact")
//   .then((res) => res.json())
//   .then((txt) => {
//     console.log(txt);
//     // newtxt = JSON.parse(txt)
//     // console.log(newtxt)
//     // console.log(newtxt.length)
//   })
//   .catch(() => console.log("api not found"));

async function eg(){
    let txt = await fetch("https://catfact.ninja/fact");
    let newtxt =await txt.json();
    console.log(newtxt)
    console.log(newtxt.length)
}
eg();