// Given an integer array nums, return an array answer such that
// answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = (nums) => {
  const res = [];

  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prod;
    prod *= nums[i];
  }
  console.log("pref => ", res);
  prod = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= prod;
    prod *= nums[j];
  }
  console.log("post => ", res);

  return res;
};

// using division
var productExceptSelf = (nums) => {
  const res = [];
  const pref = [];
  const post = [];

  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    pref[i] = prod;
    prod = prod * nums[i];
  }
  console.log("pref => ", pref);
  prod = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    post[j] = prod;
    prod = prod * nums[j];
  }
  console.log("post => ", post);

  for (let k = 0; k < nums.length; k++) {
    res[k] = pref[k] * post[k];
  }

  return res;
};

// const nums = [1, 2, 3, 4];
const nums = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums));
