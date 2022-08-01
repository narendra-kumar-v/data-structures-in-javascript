// Write a function, isPrime, that takes in a number as an argument.
// The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

const isPrime = (n) => {
  if (n < 2) return false;

  console.log("sqrt of ", n, " => ", Math.sqrt(n));

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

console.log(isPrime(4));
console.log(isPrime(9));
console.log(isPrime(5));
