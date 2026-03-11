//1. this is for reversing the word
// let str = "dinesh budhathoki";
// const reverseString = (str) => {
//   return str.split(" ").reverse().join(" ");
// };
// console.log(reverseString(str));

//2. this is for checking the palindrome
// let forward = "madam";
// const isPalnidrome = () => {
//   let reversed = forward.split("").reverse().join("");
//   return forward === reversed;
// };
// console.log(isPalnidrome(forward));

//3. this is for finding the maximum number
// const findMax = (num) => {
//   return Math.min(...num);
// };
// console.log(findMax(num));

//4. this is for finding the sum of the array
// const arr = [3, 10, 20, 50, 51];

// const sumArray = (arr) => {
//   return arr.reduce((sum, n) => sum + n, 0);
// };
// console.log(sumArray(arr));

//5. this is for remove duplicate
// const dubs = [1, 2, 2, 3, 2, 3, 4];
// const removeDubs = (dubs) => {
//   return [...new Set(dubs)];
// };
// console.log(removeDubs(dubs));

//6. this is for find the missing number
// const number = [1, 2, 3, 5];
// const num = [1, 2, 3, 5];
// const missingNum = (num) => {
//   let n = num.length + 1;
//   let expectedSum = (n * (n + 1)) / 2;
//   let actualSum = num.reduce((sum, n) => sum + n, 0);
//   return expectedSum - actualSum;
// };
// console.log(missingNum(num));

//7. this is for vawel count
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

//8. this is for finding the second largest number
// const num = [10, 20, 5, 8];
// const secondLarge = (num) => {
//   num = [...new Set(num)];
//   num.sort((a, b) => b - a);
//   return num;
// };
// console.log(secondLarge(num));

//9. this is for capitalizing the first letter
// const str = "dinesh budhathoki";
// const capitalize = (str) => {
//   return str
//     .split(" ")
//     .map((w) => w[0].toUpperCase() + w.slice(1))
//     .join(" ");
// };
// console.log(capitalize(str));

//10. this is for finding the index in the array
// const arr = [5, 10, 30, 15];
// const findIndex = (arr, target) => {
//   return arr.indexOf(target);
// };
// console.log(findIndex(arr, 5));

//11. this is for the finding the value of index
// const arr = [5, 10, 30, 15];
// const getValueAtIndex = (arr, index) => {
//   return arr[index];
// };
// console.log(getValueAtIndex(arr, 3));

//12. this is for flattn the array
// const arr = [1, [2, 3], [4]];
// const flatten = (arr) => {
//   return arr.flat();
// };
// console.log(flatten(arr));

//13.this is for rotating the array
const arr = [1, 2, 3, 4];
const rotate = (arr) => {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
};
console.log(rotate(arr));
