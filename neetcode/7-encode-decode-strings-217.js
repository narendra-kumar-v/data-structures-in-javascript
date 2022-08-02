// Design an algorithm to encode a list of strings to a string.
// The encoded string is then sent over the network and is decoded back to the original list of strings.

// Input: ["lint","code","love","you"]
// Output: ["lint","code","love","you"]
// Explanation:
// One possible encode method is: "lint:;code:;love:;you"

// Input: ["we", "say", ":", "yes"]
// Output: ["we", "say", ":", "yes"]
// Explanation:
// One possible encode method is: "we:;say:;:::;yes"

/*
 * @param strs: a list of strings
 * @return: encodes a list of strings to a single string.
 */
const DELIMIT = "#";

var encode = (strs) => {
  let res = "";
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    res += str.length + DELIMIT + str;
  }
  return res;
};

function encode(strs) {
  return strs.map((str) => `${str.length}#${str}`).join("");
}

function decode(str) {
  const res = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      ++j;
    }

    const len = Number(str.slice(i, j));
    res.push(str.slice(++j, j + len));
    i = j + len;
  }

  return res;
}

console.log(encode(["lint", "code", "love", "you"]));
console.log(decode(encode(["lint", "code", "love", "you"])));
