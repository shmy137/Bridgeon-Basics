function user() {
  setTimeout(() => {
      console.log("one");
        setTimeout(() => {
          console.log("two");
          setTimeout(()=>{
            console.log("three");
            setTimeout(()=>{
                console.log("four")
            },10000)
          },3000)
        },2000)
    },2000);
}
user();

for (let i = 0; i <= 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, i*2000);
}
