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
// let day = 5;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Moday";
//     break;

//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;

//   default:
//     dayName = "Weekend";
// }
// console.log(dayName);

//Evet listeners
// Event listener are the funtions they wait for or respond to specific events that occur int the browser such as user interactions(cancelIdleCallback, key pressess) or system events (page loading, resizoing)

// Element.addEventListener(getEffectiveConstraintOfTypeParameter, callbackFunction)

// For example

// const button = document.getElementById("myButton");
// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

//Closures in Javascript
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((c) => c + 1);
//     }, 100);
//     return () => clearInterval(timer);
//   }, []);
//   return <div>{count}</div>;
// };
// const str = "dinesh";
// const arr1 = str.split("");
// console.log(arr1);

//spread operator

// const str = "dinesh";
// const char = [...str];
// console.log(char);

//converting array into string
// const fruits = ["apple", "banana", "orange"];
// const fruits1 = fruits.toString(" ");
// console.log(fruits1);

// call aply bind
// function greet(greeting, punctuatioon) {
//   console.log(`${greeting}, ${this.name}${punctuatioon}`);
// }
// const Person = { name: "Dinesh" };
// greet.call(Person, "hellow", "!");

//Json parsing
// const string = { name: "dinesh", age: "25" };
// const user = JSON.stringify(string);
// console.log(user);

//Asynchronouse code is handled
// console.log("start");
// setTimeout(() => {
//   console.log("Timeout", 0);
// });
// Promise.resolve().then(() => console.log("promise"));
// console.log("end");

//Javascript Timing methods
// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);
// const timerId = setTimeout(() => {}, 1000);
// clearTimeout(timerId);

// let counter = 0;
// const intervalId = setInterval(() => {
//   counter++;
//   console.log(`Tick ${counter}`);
//   if (counter >= 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);
// const now = new Date();
// console.log(now);
// const date1 = new Date(2023, 0, 1);
// const date2 = new Date(2023, 5, 15);
// const diff = date2 - date1;
// console.log(diff / (1000 * 60 * 60 * 24));

// const updateCountdown = () => {
//   const now = new Date();
//   const newYear = new Date(now.getFullYear() + 1, 0, 1);
//   const diff = newYear - now;
//   const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
//   console.log(`${days} days until new year!`);
// };
const num = [1, 2, 3];
// const doubled = num.map((num) => num * 2);
// console.log(doubled);
const filtered = num.filter((number) => number > 1);
console.log(filtered);
