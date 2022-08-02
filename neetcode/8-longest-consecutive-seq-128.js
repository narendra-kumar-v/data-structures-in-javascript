// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  console.log(set);

  let longest = 0;
  for (const n of nums) {
    if (!set.has(n - 1)) {
      let len = 1;
      while (set.has(n + len)) {
        len++;
      }
      console.log("len => ", len);
      longest = Math.max(len, longest);
    }
  }
  return longest;
};

// const nums = [100, 4, 200, 1, 3, 2];
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutive(nums));
