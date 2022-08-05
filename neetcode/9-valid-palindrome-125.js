// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.

//Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama";
// Output: true;

// Input: s = "race a car";
// Output: false;

// Input: s = " ";
// Output: true;

// Input: s = " ss ";
// Output: true;

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const alphanum = "abcdefghijklmonpqrstuvwxyz0123456789";

  let str = "";
  const lower = s.toLowerCase();
  for (let char of lower) {
    if (alphanum.includes(char)) {
      str += char;
    }
  }
  console.log(str);

  let p1 = 0,
    p2 = str.length - 1;
  while (p1 < p2) {
    console.log({ [p1]: str[p1], [p2]: str[p2] });
    if (str[p1] !== str[p2]) return false;
    p1++;
    p2--;
  }

  return true;
};

isPalindrome("A man, a plan, a canal: Panama");
