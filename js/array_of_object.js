// // 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5

// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4

// // 3 bottles of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5

// // Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4

// // Some cheap candy:
// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3


// function getTotalPrice(groceries) {
//     let sum = 0;
//     for (i = 0; i < groceries.length; i++) {
//         sum += groceries[i].quantity * groceries[i].price
//     }
//     return Math.round(sum*100)/100;
// }
// console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.50 }]));
// getTotalPrice= [
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
// ]
// let total = getTotalPrice.reduce((sum, total) => {
//     return sum + (total.price * total.quantity);
// }, 0)
// console.log(total);