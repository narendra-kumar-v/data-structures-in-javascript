// Write a function, maxValue, that takes in array of numbers as an argument.
// The function should return the largest number in the array.

const maxValue = (nums) => {
  let max = -Infinity;
  for (const num of nums) {
    if (max < num) {
      max = num;
    }
  }
  return max;
};

// const nums = [4, 7, 2, 8, 10, 9];
// const nums = [10, 5, 40, 40.3];
const nums = [-5, -2, -1, -11];

console.log(maxValue(nums));
