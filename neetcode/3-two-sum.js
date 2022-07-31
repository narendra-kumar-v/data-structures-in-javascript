// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function (nums, target) {
  const map = {};
  if (nums.length < 2) return [];
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    console.log(map);
    if (map.hasOwnProperty(compliment)) {
      return [map[compliment], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
