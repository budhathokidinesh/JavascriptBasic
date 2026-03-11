//this is for reversing the word
// let str = "dinesh budhathoki";
// const reverseString = (str) => {
//   return str.split(" ").reverse().join(" ");
// };
// console.log(reverseString(str));

//this is for checking the palindrome
// let forward = "madam";
// const isPalnidrome = () => {
//   let reversed = forward.split("").reverse().join("");
//   return forward === reversed;
// };
// console.log(isPalnidrome(forward));

//this is for finding the maximum number

// const findMax = (num) => {
//   return Math.min(...num);
// };
// console.log(findMax(num));

//this is for finding the sum of the array
// const arr = [3, 10, 20, 50, 51];

// const sumArray = (arr) => {
//   return arr.reduce((sum, n) => sum + n, 0);
// };
// console.log(sumArray(arr));

//this is for remove duplicate
// const dubs = [1, 2, 2, 3, 2, 3, 4];
// const removeDubs = (dubs) => {
//   return [...new Set(dubs)];
// };
// console.log(removeDubs(dubs));

//this is for find the missing number
// const number = [1, 2, 3, 5];
// const num = [1, 2, 3, 5];
// const missingNum = (num) => {
//   let n = num.length + 1;
//   let expectedSum = (n * (n + 1)) / 2;
//   let actualSum = num.reduce((sum, n) => sum + n, 0);
//   return expectedSum - actualSum;
// };
// console.log(missingNum(num));

// const str = "dinesh";
// const vowelCount = (str) => {
//   let vowel = "aeiou";
//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowel.includes(char)) count++;
//   }
//   return count;
// };
// console.log(vowelCount(str));

//this is for finding the second largest number
// const num = [10, 20, 5, 8];
// const secondLarge = (num) => {
//   num = [...new Set(num)];
//   num.sort((a, b) => b - a);
//   return num;
// };
// console.log(secondLarge(num));

//this is for capitalizing the first letter
// const str = "dinesh budhathoki";
// const capitalize = (str) => {
//   return str
//     .split(" ")
//     .map((w) => w[0].toUpperCase() + w.slice(1))
//     .join(" ");
// };
// console.log(capitalize(str));

//this is for finding the index in the array
// const arr = [5, 10, 30, 15];
// const findIndex = (arr, target) => {
//   return arr.indexOf(target);
// };
// console.log(findIndex(arr, 5));

//this is for the finding the value of index
const arr = [5, 10, 30, 15];
const getValueAtIndex = (arr, index) => {
  return arr[index];
};
console.log(getValueAtIndex(arr, 3));
