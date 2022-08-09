// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

var twoSum = (numbers, target) => {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    console.log({ sum, l, r });
    if (sum > target) r--;
    else if (sum < target) l--;
    else return [l++, r++];
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
