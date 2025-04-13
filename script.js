// console.log("hellow world");
// alert("hi there click ok to complete");

// ========var, let , const==============
// var name; //creating the a variabe
// name = "dinesh budhathoki"; //assigning value
// console.log(name);
// console.log(name);
// console.log(name);
// let add = "sydney";
// console.log(name, add);
// name = "sam";
// console.log(name);
// const age = 20;
// console.log(age);

// =========Arithmetic operation========
// let a = 5;
// ++a;
// console.log(++a);
// console.log(a);
//===maths object====
// const answer = Math.round(5.6);
// const answer = Math.pow(8, 2);
// const answer = Math.sqrt(64);
// const answer = Math.floor(5.5);
// const answer = Math.random() * 100;
// const val = Math.round(answer); //0-0.99999
// console.log(val);

//======comparison======
// const v1 = 5;
// const v2 = 4;
// const result = v1 < v2;
// console.log(result);

//====reference data types=====//
// const user = {
//   FName: "Dinesh",
//   Number: 32,
// };
// console.log(user);
// const u1 = user;
// user.FName = "sam";
// console.log(user);
// console.log(u1);

//====safe number range -2^53-1 to 2^53 - 1==== //
// const num = 23_342_252;
// console.log(num);
// const num = "12.222a";
// const val = parseFloat(num);
// isNaN(num);
// console.log(typeof val, val, isNaN(num));

//==String==//
// Escape character
// const str = ' Hi I am"Dinesh Budhathoki",' + " I live in Perth right now.";
// const val = str.toUpperCase();
// console.log(str);
// console.log(typeof str);
// const val = str[21];
// const val = str.charAt(20);
// const val = str.replace("Dinesh", "Sam");
// const val = str.lastIndexOf("e");
// console.log(str.length);
// const val = str.substring(3, 8);
// const val = str.includes("Dinesh");
// const val = str.search("Dinesh");
// const val = str.trim();
// const val = str.split(" ").join();
// const val = str.concat(
//   " I am planning to go Melbourne as soon as I get my permanent residency."
// );
// console.log(val);

// ======Conditional statements =======///
// 1. If else
//Truthy: true, 2, -4, " ", {}, []' ()=>{}
//Falsy: false, 0, NaN, "", null, undefined
// const val = " ";
// if (val) {
//   //statement 1
//   console.log("You have passed in examm. Congratulations!!");
//   //statement 2
//   //statement 3
// }
// const age = 40;
// age < 50 && console.log("Welcome");
// const vip = false;
// if ((age >= 18 && age < 50) || vip === true) {
//   console.log("Welcome to the drink club");
// } else {
//   console.log("Fuck off!!!");
// }
// const pet = "dog";
// if (pet === "cat") {
//   console.log("Meow");
// } else if (pet === "dog") {
//   console.log("woof woof");
// } else {
//   console.log("jpt");
// }
//====switch========//
// switch (pet) {
//   case "cat":
//     console.log("Meoww");
//     break;
//   default:
//     console.log("hi");
// }
// =====ternary===///
// const age = 50;
// age < 50 ? console.log("Welcome") : console.log("Go home");

//=======Array=============//
// const fruits = ["Apple", "zzzz", "aaaa", "banana", "orange", "mango"];
// fruits.push("Watermelon");
// fruits.unshift("Watermelon");
// adding
// fruits.splice(2, 0, "Watermelon");
// const val = fruits[10];
//deleting the items
// const val = fruits.pop();
// const val = fruits.shift();
// const val = fruits.indexOf("banana");
// const val = fruits.toString().split(",");
// const val = fruits.join("-").split("-");
// console.log(fruits);
// console.log(fruits.sort());

//======FOR LOOPS======////
// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// =====While loop====//
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//====do while loop===//
// let i =0;
// do{
//     console.log(i);
//     i++;
// } while (i < 10);
//==== JS specific Array Loops====///
//for /of for (x of cars)-> for array
// const fruits = ["Apple", "zzzz", "aaaa", "banana", "orange", "mango"];
// console.log(fruits);
// const upperFruits = [];
// for (let item of fruits) {
//   upperFruits.push(item.toUpperCase());
// }
// console.log(upperFruits);

//for loop
// for (i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }
//===forEach===
// fruits.forEach((fruits, index) => {
//   console.log(index, fruits);
// });

///====map=====//
// const newData = fruits.map((item, i) => {
//   //   console.log(item, i);
//   //   return "SKU_" + item.toUpperCase();
//   if (item.includes("n")) {
//     return item;
//   }
// });
// const newData = fruits.filter((item, i) => {
//   console.log(item, i);
//   return item.includes("n");
//   //   if (item.includes("n")) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
// });
// const newData = fruits.filter((item, i) => item.includes("n"));
// console.log(newData);
//====Reduce======///
// const money = [10, 100, 120, 365, 3000, 4500];
// const total = money.reduce((subTtl, item) => {
//   return subTtl + item;
// }, 1000);
// console.log(total);
//===Every====//
// const result = fruits.every((item) => {
//   console.log(item);
//   return item.includes("n");
// });
// const result = money.every((num) => {
//   return num >= 10;
// });
// console.log(result);
// const result = money.includes(10);
// const result = money.find((item) => item === 100);
// const result = money.indexOf(100);
// console.log(result);
// const num = new Array(50).fill(1, 100);
// console.log(loveArg);

//======Challange 1======/////
// Creating 50 random numners ranging from 1 to 100
// 0-100
// console.log(num);
// const arg = [];
// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   arg[i] = num;
//   //   arg.push(num);
// }
// console.log(arg);
// arg.sort((a, b) => b - a);

// // sum of total numbers
// const total = arg.reduce((acc, num) => {
//   return acc + num;
// }, 0);
// console.log("total:", total);
// // dividing into even and odd number
// const evenArg = arg.filter((item) => item % 2 === 0);
// // console.log(evenArg);
// const oddArg = arg.filter((item) => item % 2 !== 0);
// console.log("Even Array:", evenArg, "OddArray:", oddArg);
// //removing duplicate items
// // const uniqueArg = [...new Set(arg)];
// const uniqueArg = [];
// for (let i = 0; i < arg.length; i++) {
//   if (!uniqueArg.includes(arg[i])) {
//     uniqueArg.push(arg[i]);
//   }
// }
// console.log(uniqueArg);

//====Challange 2=====///
// const arg = [];
// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   arg[i] = num;

// const uniqueArg = [];
// for (let i = 0; uniqueArg.length < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (!uniqueArg.includes(num)) {
//     uniqueArg.push(num);
//   }
//   console.log(i);
// }
// console.log(uniqueArg);
//   arg.push(num);
// let randomNumbers = [];
// for (let i = 0; i < 50; i++) {
//   let randomNumber = Math.floor(Math.random() * 100) + 1;
//   randomNumbers.push(randomNumber);
// }
// console.log("Random Numbers:", randomNumbers);
// // random numbers in desending order
// randomNumbers.sort((a, b) => b - a);
// console.log("Decending order:", randomNumbers);
// // sum of total numbers
// const total = randomNumbers.reduce((subTtl, item) => {
//   return subTtl + item;
// }, 0);
// console.log("Sum:", total);
// // splitiing random numbers into odd and even
// let oddNumbers = [];
// let evenNumbers = [];

// randomNumbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   } else {
//     oddNumbers.push(number);
//   }
// });

// console.log("Random Numbers:", randomNumbers);
// console.log("Even Numbers:", evenNumbers);
// console.log("Odd Numbers:", oddNumbers);
// // removing duplication
// if (!randomNumbers.includes(randomNumbers)) {
//   randomNumbers.push(randomNumbers);
// }
// console.log("No repeated:", randomNumbers);

//====JS Data manipulation======//
// const person = {
//   name: "Dinesh Budhathoki",
//   phone: 984288,
//   isMarried: true,
//   hasPet: undefined,
//   gender: null,
//   skills: ["Html", "css", "Javascript", ["flexbox", "grid system"]],
//   parents: {
//     f: "Harry",
//     m: "Merry",
//   },
//   bio: () => {
//     return "Hi there";
//   },
// };
// const data = person.name;
// person.name = "Dbudhathki";
// const data = person.skills[3][1];
// const data = person.parents.f;
// person.adress = "2C small street, Beechboro WA";
// person.parents.md = "2024";
// person.skills.push("HEHE");
// person.phone = undefined;
// delete person.phone;
// delete person.parents.f;
// person.skills[3].pop();
// default//
// const { name, phone, parents, room = "N/A" } = person;
// console.log(name, phone, room);
// console.log(data);

// rest//
// const { name, phone, parents, ...rest } = person;
// console.log(rest);
// spread
// const career = {
//   title: "Software Engineer",
//   salary: "200k",
// };
// // const combo = { person, title: "Software Engineer", salary: "200k" };
// const combo = { ...career, ...person };
// console.log("Combo:", combo);

// Copying the object
// const person = {
//   name: "Dinesh Budhathoki",
//   phone: 984288,
//   isMarried: true,
//   hasPet: undefined,
//   gender: null,
//   skills: ["Html", "css", "Javascript", ["flexbox", "grid system"]],
//   parents: {
//     f: "Harry",
//     m: "Merry",
//   },
//   bio: () => {
//     return "Hi there";
//   },
// };
// const p1 = person;
// const p1 = Object.assign({}, person); // This is called shallow copying because in shallow copying only the top level element are copied.
// const p1 = {...person};
// person.parents.f = "Dinesh";
// console.log(person);
// console.log(p1);
// const p1 = JSON.parse(JSON.stringify(person)); // this is deep copying
// person.parents.f = "Dinesh";
// console.log(person);
// // console.log(p1);
// for (let key in person) {
//   //   console.log(key);
//   console.log(key, person[key]);
// }
// const personArg = Object.entries(person);// for everything
// const personArg = Object.keys(person);
// console.log(personArg);
///====Date manipulation======/
// const today = Date();
// const today = new Date("2020-8-29");
// const today = Date.now();
// const data = today.getDate();
// const data = today.toISOString();
// today.setDate(today.getDate() + 10);
// console.log(today);

//======Chalange======////
// const millisecPerDay = 24 * 60 * 60 * 1000;
// const checkExp = ({ name, exp }) => {
//   const today = Date.now();
//   const expTs = new Date(exp).getTime();
//   const diffDay = Math.floor((expTs - today) / millisecPerDay);
//   // return AB is expired 4 days ago
//   // return you have 10 days to use this product
//   //   console.log(diffDay);
//   if (diffDay < 1) {
//     return `${name} is expired ${Math.abs(diffDay)} days ago.`;
//   } else {
//     return `You have still ${diffDay} days to use ${name}`;
//   }
// };
// const foods = [
//   {
//     name: "Tune",
//     exp: "2024-07-12",
//   },
//   {
//     name: "Milk",
//     exp: "2024-07-26",
//   },
// ];
// foods.map((food) => {
//   const result = checkExp(food);
//   console.log(result);
// });
////====Function===///
// function sayHi(name, adress) {
//   const str = `Hellow there, this is ${name}, nice to meet you. I live in ${adress}.`;
//   // "Hi I am " + name + " nice to meet you.I live in " + adress;
//   console.log(str);
// }
//===ES6 function===///
// const sayHi = (name, add) => {
//   const str = `Hellow there, this is ${name}, nice to meet you. I live in ${add}.`;
//   //   // "Hi I am " + name + " nice to meet you.I live in " + adress;
//   console.log(str);
// };
// sayHi("Dinesh", "perth");
// sayHi("Umesh", "Sydney");
// sayHi("Prem", "Melbourne");

// const DineshBio = "DInesh lives in Perth";
// const SamBio = "Sam lives in Melbourne";
// const willBio = "Will lives in UK";
// console.log(DineshBio, SamBio, willBio);

// const userList = [
//   {
//     name: "Dinesh",
//     location: "Perth",
//     career: "Software Engineer",
//     Interest: "Loves coding and visiting new places.",
//   },
//   {
//     name: "Sam",
//     location: "Sydney",
//     career: "Footballar",
//     Interest: "loves playng football",
//   },
// ];
// const career = ({ career, Interest }) => {
//   console.log(cr);
//   return `He is ${career} and loves coding and ${Interest}`;
// };
// // console.log(userList);
// const personBio = ({ name, location = "na", ...rest }) => {
//   console.log(rest);
//   // const { name, location } = person;
//   let str = `${name} is from ${location}, and likes to code.`;
//   if (rest.career) {
//     str += career(rest);
//   }
//   return str;
// };
// // const data = personBio();
// // console.log(data);
// // const func = () => {};
// userList.forEach((item, i) => {
//   const data = personBio(item);
//   console.log(data);
// });
///====Function====///
// let value = toCelsius(77);
// function toCelsius(farenheit) {
//   // console.log(toCelsius);
//   return (5 / 9) * (farenheit - 32);
// }
// let x = toCelsius(77);
// let text = "The temperature is " + x + " Celcius";
// console.log(text);

// Error handalling======//

// try {
//   if ("Condition true") {
//     throw new Error("hacked");
//   }
//   // your code

//   console.log("first");
// } catch (error) {
//   console.log(error.message);
//   if (error.message === "hacked") {
//     //Emergency message to engineers
//     console.log("Emergency alert text to eng");
//   }
// } finally {
//   console.log("This block will always run");
// }
// console.log("This works");

////====SCheduling=====///
//1. SetTimeout
// console.log("I am before setTimeout");
// const counter = setTimeout(() => {
//   console.log(" I am from inside the setTimeOut");
// }, 3000); // 1S
// //1. clearTimeout
// clearTimeout(counter);

//3. Set Interval
// let counter = 100;
// const countDown = setInterval(() => {
//   console.log("special event in ", counter--);
//   if (counter === 0) {
//     clearInterval(countDown);
//     console.log("Happy Birthday ");
//   }
// }, 100);
///// Fun Challange

// const yoyo = () => console.log("0. " + (5 + 6));

// console.log("1. log");

// setTimeout(() => {
//   console.log("2. inside frist set timeout");
// }, 5000);

// console.log("3. after first setTime out");

// const sayHey = () => {
//   console.log("4. inside sayhey");
//   yoyo();
// };

// setTimeout(() => {
//   console.log("5. inside second set timeout");
// }, 0);

// sayHey();

// console.log("6. last clg");

// What is the order of the output ?
// let counter = 0;
// for (var i = 0; i < 5; i++) {
//   function print() {
//     console.log(i + "but counter is " + counter++);
//   }
//   setTimeout(print, 0);
// }

//=====OOP====///
// const person = {
//   name: "Dinesh",
//   add: "Sydney",
//   bio() {
//     console.log(this);
//     return `Hey this is ${this.name}, lives in ${this.add}`;
//   },
// };
// console.log(person.bio());

// // Factory function
// function aboutPerson(name, add) {
//   return {
//     name,
//     add,
//     bio() {
//       // console.log(this);
//       return `Hey this is ${this.name}, lives in ${this.add}`;
//     },
//   };
// }
// const dineshOb = aboutPerson("Dinesh", "Perth");
// const samOb = aboutPerson("Sam", "Perth");
// console.log(dineshOb, samOb, samOb.bio(), dineshOb.bio());

//===constructor functions
// const str = new String();
// const newStr = "";
// console.log(newStr === str);

// function AboutPerson(name, add) {
//   this.name = name;
//   this.add = add;
// }
// AboutPerson.prototype.bio = function () {
//   return `Hey this is ${this.name}, lives in ${this.add}`;
// };
// const dineshOb = new AboutPerson("Dinesh", "Perth");
// console.log(dineshOb.bio( ));

//==Class based OOP==//
// class person {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//     this.key = "abcd";
//   }
//   bio() {
//     return `Hey this is ${this.name}, lives in ${this.add}`;
//   }
//   nameUpper() {
//     this.name = this.name.toUpperCase();
//     this.add = this.add.toUpperCase();
//   }
// }
// const dineshOb = new person(" Dinesh", "Perth");
// dineshOb.nameUpper();
// console.log(dineshOb.bio());
///====THIS KEYWORD USE CASES====///
// function f() {
//   console.log(this);
// }
// f();
//===PROCEDUAL PP===//
// const dineshOb = {
//   name: "Dinesh",
//   add: "Perth",
//   dob: "03-07-1992",
// };
// function bio(p) {
//   return `This is ${p.name} from ${p.add} and I am  ${getAge(p.dob)} years old`;
// }
// function getAge(dob) {
//   return new Date().getFullYear() - new Date(dob).getFullYear();
// }
// function birthDay(p) {
//   return `Happy birthday ${p.name}! Now you are now ${
//     getAge(p.dob) + 1
//   } years old`;
// }
// console.log(birthDay(dineshOb));
//====ENCAPSULATION====//
// class Person {
//   #dob;
//   constructor(obj) {
//     this.name = obj.name;
//     this.add = obj.add;
//     this.#dob = obj.dob;
//   }
//   bio() {
//     return `This is ${this.name} from ${this.add} and I am  ${this.#getAge(
//       this.#dob
//     )} years old`;
//   }
//   #getAge() {
//     return new Date().getFullYear() - new Date(this.#dob).getFullYear();
//   }
//   birthDay() {
//     return `Happy birthday ${this.name}! Now you are now ${
//       this.#getAge(this.#dob) + 1
//     } years old`;
//   }
// }
// const dineshInfo = new Person(dineshOb);
// console.log(dineshInfo.birthDay());

///====INHERITANCE===///
// class Living {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//   }
//   bio() {
//     return `This is ${this.name} from ${this.add}.`;
//   }
// }
// class Person extends Living {
//   constructor(obj) {
//     super(obj.name, obj.add);
//     this.dob = obj.dob;
//     this.career = obj.career;
//   }

//   myCareer() {
//     return `Their career is ${this.career}`;
//   }
// }
// const p1 = {
//   name: "Dnesh",
//   add: "Perth",
//   career: "Software Engineer",
// };
// const P1Info = new Person(p1);
// console.log(P1Info.myCareer());
// class animal extends Living {
//   constructor(obj) {
//     super(obj.name, obj.add);
//     this.strength = obj.strength;
//   }

//   power() {
//     return `${this.name} can  ${this.strength}`;
//   }
// }

// const p2 = {
//   name: "Sam",
//   add: "Melbourne",
//   career: "Cleaner",
// };
// const p3 = {
//   name: "Prem",
//   add: "Sydney",
//   career: "CA",
// };
// const monkey1 = {
//   name: "mky1",
//   add: "Sydney",
//   strength: "Jump between trees of 10m apart",
// };
// const mkInfo = new animal(monkey1);
// console.log(mkInfo);

///===POLYMORPHISM====////

// class Student extends Person {
//   constructor(s1) {
//     super(s1);
//   }
//   myCareer() {
//     return `Currently they are  ${this.career}`;
//   }
// }
// const s1 = {
//   name: "Sam",
//   add: "nework",
//   career: "Studying Bachlor of IT",
// };
// const s1Info = new Student(s1);
// console.log(s1Info.myCareer());

//====Abstraction #2====//
// Livng class
// class Living {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//     if (new.target === Living) {
//       throw new Error("Can not instantiate an abstract class directly.");
//     }
//   }
//   bio() {
//     return `This is ${this.name} from ${this.add}.`;
//   }
// }
// //Person class
// class Person extends Living {
//   constructor(obj) {
//     super(obj.name, obj.add);
//     this.dob = obj.dob;
//     this.career = obj.career;
//   }

//   myCareer() {
//     return `Their career is ${this.career}`;
//   }
// }
// const p1 = {
//   name: "Dnesh",
//   add: "Perth",
//   career: "Software Engineer",
// };
// const P1Info = new Person(p1);
// console.log(P1Info.myCareer());
// const p1Obj = new Living("DInesh", "Perth");
// console.log(p1Obj.bio());

///=== CHALLANGE===///
// class Car {
//   constructor(model, engineOn) {
//     this.model = model;
//     this.engineOn = false;
//   }
//   startEngine() {
//     this.engineOn = true;
//     return `${this.model} Engine is started. Ready to move`;
//   }
//   drive() {
//     if (this.engineOn === false) {
//       return `Please start the engine first`;
//     } else {
//       return `${this.model} is now moving`;
//     }
//   }
//   stopeEngine() {
//     this.engineOn = false;
//     return `${this.model} engine stopped`;
//   }
// }

// const myCar = new Car("Tesla");
// // console.log(myCar.startEngine());
// console.log(myCar.drive());
// console.log(myCar.stopeEngine());

//===pure function==//
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 4));

///===NON-Pure Function
// let counter = 0;
// const add = (a, b) => {
//   total = a + b;
//   return total;
// };
// console.log(add(2, 4));
// console.log(add(2, 4));
// console.log(add(2, 4));
// console.log(add(2, 4));
// console.log(add(2, 4));

// First- class and higher -order functions

// const add = (a, b) => {
//   return a + b;
// };
// const substract = (a, b) => {
//   return a - b;
// };
// const multiSqr = (val, expo) => {
//   return Math.pow(val, expo);
// };
// const calculator = (func, x, y) => {
//   return func(x, y);
// };
// const result = calculator(add, 2, 3);
// console.log(result);
// console.log(multiSqr(3, 112));
// const calc2 = (a, b) => {
//   const ttl = a + b;
//   const multiSqr = (expo) => {
//     return Math.pow(ttl, expo);
//   };
//   return multiSqr;
// };
// const data = calc2(2, 3)(2);
// // const data = total(2);
// console.log(data);
///====function composition====///
// const calc3 = (a, b, c) => multiSqr(add(a, b), c);
// console.log(calc3(2, 4, 2));

//===RECUSRION FUNCTION=====//
// debugger;
// let i = 0;
// const counter = () => {
//   console.log(i++);
//   if (i === 10) {
//     return;
//   }
//   counter();
// };
// console.log(counter());
// // console.log(i);
