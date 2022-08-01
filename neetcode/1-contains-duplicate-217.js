// Given an integer array nums,
// return true if any value appears at least twice in the array,
// and return false if every element is distinct.

var containsDuplicate = (nums) => {
  const map = new Map();

  for (let num of nums) {
    console.log(map);
    if (map.has(num)) {
      return true;
    } else {
      map.set(num, true);
    }
  }

  return false;
};

var containsDuplicate = (nums) => {
  const numMap = new Map(nums.map((num) => [num]));
  console.log(numMap);
  return numMap.size !== nums.length;
};

var containsDuplicate = (nums) => {
  const numsSet = new Set(nums);
  console.log(numsSet);
  return numsSet.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1, 4, 5, 5, 7]));
