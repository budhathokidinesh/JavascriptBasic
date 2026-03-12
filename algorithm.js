//1. this is for finding the number that add up to the target from array
const nums = [2, 7, 11, 15];
const target = 9;
const twoSum = (nums, target) => {
  //loop through first number
  for (let i = 0; i < nums.length; i++) {
    //loop through the rest of the number the second number
    for (let j = i + 1; j < nums.length; j++)
      //if they add up to the target, return their indices
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
  }
};
console.log(twoSum(nums, target));
