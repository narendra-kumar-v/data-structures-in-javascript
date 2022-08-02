// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

var topKFrequent = (nums, k) => {
  const map = {};
  const result = [];

  for (const num of nums) {
    if (num in map) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }
  console.log("count map => ", map);

  const freq = new Array(nums.length + 1).fill(0).map(() => []);

  for (let [key, val] of Object.entries(map)) {
    freq[val].push(key);
  }
  console.log(freq);

  for (let i = freq.length - 1; i >= 0; i--) {
    const elArr = freq[i];
    if (elArr.length > 0) {
      elArr.forEach((el) => result.push(el));
      if (k === result.length) return result;
    }
  }
  return result;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

console.log(topKFrequent(nums, k));
