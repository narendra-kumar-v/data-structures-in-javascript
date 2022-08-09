// Given five positive integers, find the minimum and maximum values that can be calculated by
// summing exactly four of the five integers. Then print the respective minimum and maximum values
// as a single line of two space-separated long integers.

// Example
// arr = [1 2 3 4 5]
// The minimum sum is  and the maximum sum is . The function prints => 10 14

// arr = [1 3 5 7 9]
// o/p => 16 24

// arr = [7 69 2 221 8974]
// o/p => 299 9271

function miniMaxSum(arr) {
  const len = arr.length;
  // console.log(arr);
  const sorted = arr.sort(); // n * log(n)
  // console.log(sorted);

  let sum = 0;
  for (let i = 1; i < len - 1; i++) {
    sum += arr[i];
  }
  const min = sum + sorted[0];
  const max = sum + sorted[len - 1];
  console.log(min, max);
  console.log();
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 5, 7, 9];
const arr3 = [7, 69, 2, 221, 8974];

miniMaxSum(arr1);
miniMaxSum(arr2);
miniMaxSum(arr3);
