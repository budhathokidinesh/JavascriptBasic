// Operator
//loops
// for (let i = 1; i <= 5; i++) {
//   console.log("Number:", i);
// }
// const fruits = [1, 2, 3, 4, 5];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[2]);
// }

// const cartItems = ["T-shirt", "Shoes", "watch"];
// for (let i = 0; i < cartItems.length; i++) {
//   console.log(`Item ${i + 1}: ${cartItems[i]}`);
// }

//while loop
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// let tasks = ["task1", "task2", "task3"];
// while (tasks.length > 0) {
//   let current = tasks.shift();
//   console.log("processing", current);
// }

//for each
// const fruits = ["apple", "banana", "cherry"];
// fruits.forEach((fruit, index) => {
//   console.log(`${index + 1}: ${fruit}`.toUpperCase());
// });

//map
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

// const users = [
//   { id: 1, name: "Dinesh" },
//   { id: 2, name: "sam" },
//   { id: 3, name: "prem" },
//   { id: 4, name: "alex" },
// ];
// const names = users.map((user) => user.name);
// console.log(names);

//Filter
// const numbers = [1, 2, 3, 4, 5, 6];
// const even = numbers.filter((num) => num % 2 === 0);
// console.log(even);
// const products = [
//   { name: "Tshirt", inStock: true },
//   { name: "Tshirt", inStock: false },
//   { name: "Tshirt", inStock: true },
// ];
// const available = products.filter((product) => product.inStock);
// console.log(available);

//Reduce method
// const numbers = [1, 2, 3, 4, 5, 19];
// const max = numbers.reduce((a, b) => (a > b ? a : b));
// const min = numbers.reduce((a, b) => (a > b ? b : a));
// console.log(max);
// console.log(min);

//Constructor in details
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const person2 = new Person("Dinesh", 30);
// console.log(person2);

//switch statement
let day = 5;
let dayName;

switch (day) {
  case 1:
    dayName = "Moday";
    break;

  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;

  default:
    dayName = "Weekend";
}
console.log(dayName);
