// 1. Write two functions: toArray(), which converts a number to an array of its digits. toNumber(),
//  which converts an array of digits back to a number. (Score 2)
//    Examples:  ● toArray(235) ➞ [2, 3, 5] ● toNumber([2, 3, 5]) ➞ 235
//   ● toArray(0) ➞ [0]  ● toNumber([0]) ➞ 0


let str = [1,2,3]
console.log(str.join(""))

let strr = 0;
console.log(String(strr).split(""))
// console.log(String(strr).split(""));


// 2. Create a function that accepts an object where keys are item names and values are the number of
//  times they were sold. The function should return the name of the item that was sold the least
//  Examples :  ● leastSoldItem( {shoes: 120, shirts: 90, pants: 150, hats: 75} ) ➞ “hats”
//  ● leastSoldItem( { phones: 300, laptops: 450, tablets: 250, watches: 100} ) ➞ “watches” 
// ● leastSoldItem( {pens: 500, pencils: 499, erasers: 300}) ➞ “erasers” 

// function leastSoldItem(items) {
//     min = 0;
//     item = ""
//     for (let x in items) {
//         // console.log(Math.max(items[x]))
//         if (items[x] < min || min== 0) {
//             min = items[x];
//             item = x
//         }
//     }
//     console.log(item)

// }

// leastSoldItem({ shoes: 120, shirts: 90, pants: 150, hats: 75 })
// leastSoldItem( { phones: 300, laptops: 450, tablets: 250, watches: 100} )





// 3. Write a function that accepts a string and moves all the uppercase (capital) 
// letters to the end of the string, while preserving the order of both uppercase and lowercase letters. 
// (Score 2). Examples :  ● moveCapital("hElloWOrld") ➞ "hrlldoEWO" 
// ● moveCapital("JavaScript") ➞ "avaJScript"
// ● moveCapital("PboyTHon") ➞ "yonPTH" 


// function moveCapital(str){
//     capital = [];
//     small = [];
//     for(i=0;i<str.length;i++){
//         if(str[i] >="A" && str[i]<="Z"){
//             capital.push(str[i])
//         }
//         else{
//             small.push(str[i]);
//         }
//     }
//     return small.join("")+capital.join("")
// }

// console.log( moveCapital("hElloWOrld"));





// 4. ● Get all employee names using map().
//  ● Filter employees whose salary is less than 50,000.
//   ● Find the employee with the highest salary.
//   ● Calculate the average salary. (Score 3) 
// let employees = [
//     {
//         name: "Alice",
//         salary: 45000
//     },
//     {
//         name: "Bob",
//         salary: 62000
//     },
//     {
//         name: "Charlie",
//         salary: 38000
//     },
//     {
//         name: "Diana",
//         salary: 75000
//     }
// ];

// let names = employees.map((name) => { return name.name; })
// let sal = employees.filter((sal) => { return sal.salary > 50000 })

// let highest = function highh(employees) {
//     high = 0;
//     name = "";
//     for (let x in employees) {
//         if (employees[x].salary > high) {
//             high = employees[x].salary;
//             name = employees[x].name;
//         }
//     }
//     return high + "" + name
// }


// let avg = employees.reduce((sum, sal) => {
//     sum = sum + sal.salary
//     return sum;
// }, 0) / employees.length
// console.log(names)
// console.log(sal)
// console.log(highest(employees))
// console.log(avg)

// console.log(employees)

















