// console.log("from script file");

// let button = document.querySelector("#btn");

// button.ondblclick = function(){
// alert("njekki pottiko!? ")
// }

// let title= document.getElementById("p");
// title.innerHTML = `<b>${title.textContent}</b>`;

// let verthe = document.getElementById("eg");
// verthe.onclick = function(){
//     // document.body.style.backgroundColor = "red";
//     p.innerHTML = "noooooooo!!!!!!!!!";
//     p.style.color= "red";
// }

// let result = Math.floor(Math.random() * 10) + 1;
// console.log(result);

// let students = [

//     {
//         name : "shaamir",
//         age:20
//     },
//     {
//         name: "mansoor",
//         age:40

//     },
//     {    name:"fathima",
//         age:15
//     },
//     {    name:"shabana",
//         age:15
//     },
//     {
//         name : "mehza" ,
//         age:13
//     },
// ]
// console.log(students.sort(  (a,b) =>
//      a.age - b.age));

// let newp = document.createElement("p");
// newp.textContent = "heeelolo";

// document.body.appendChild(newp);

// let bt = document.querySelectorAll("button")[1];
// bt.onclick = function () {
//   newp.style.color = "blue";
// };

// let newbtn = document.createElement("button");
// newbtn.textContent = "plus";

// let newbtnn = document.createElement("button");
// newbtnn.textContent = "minus";

// document.body.appendChild(newbtn);
// document.body.appendChild(newbtnn);

// let egg = document.querySelector("#gett");

// let count = 0;
// newbtn.onclick = function () {
//   count++;
//   egg.textContent = "count" + count;
// };
// newbtnn.onclick = function () {
//   if (count > 0) {
//     count--;
//     egg.textContent = "count" + count;
//   } else {
//     count = 0;
//   }
// };

// let img = document.querySelector("img");
// let value = img.setAttribute("src","user-shaamir3.jpg");
// let value2 = img.setAttribute("alt","user-shaamir");
// let value3 = img.removeAttribute("alt")










// console.log(value)

// let eg = function(){
//     count = 0;
//     if(newbtn.onclick){
//         count++;
//     }
//     if(newbtnn.onclick){
//         count --;
//     }
//     return count;
// }
// console.log("count");







let btn = document.querySelector("#btnn");
let secbtn = document.querySelector("#secbtn");

btn.onclick = function (){
    secbtn.classList.toggle("hidden")
}





















