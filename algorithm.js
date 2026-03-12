//1. this is for finding the number that add up to the target from array
// const nums = [2, 7, 11, 15];
// const target = 9;
// const twoSum = (nums, target) => {
//   //loop through first number
//   for (let i = 0; i < nums.length; i++) {
//     //loop through the rest of the number the second number
//     for (let j = i + 1; j < nums.length; j++)
//       //if they add up to the target, return their indices
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//   }
// };
// console.log(twoSum(nums, target));

//2. finding the index of target
// const nums = [1, 3, 5, 7, 9];
// const target = 7;

// const findInSrted = (nums, target) => {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     //find the middle index

//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid; //found it
//     } else if (nums[mid] < target) {
//       left = mid + 1; //target is in the right half
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1; //target not found
// };
// console.log(findInSrted(nums, target));

//this is for FizzBuzz
const FizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    //check if multiple of both 3 and 5 first
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
FizzBuzz(30);
