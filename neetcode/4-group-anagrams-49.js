// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Time: O(n * max(w) * log(max(w))) => n = strs.length; w => max length of longest word in strs
// Space: (n * max(w))
var groupAnagrams = function (strs) {
  // Brute Force
  const result = [];
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort().join("");

    if (map.has(sorted)) {
      map.get(sorted).push(strs[i]);
    } else {
      map.set(sorted, [strs[i]]);
    }
  }

  console.log("map => ", map);
  for (let [k, v] of map) {
    result.push(v);
  }

  return result;
};

// Optimal Solution using hashing technique
// Time: O(n * max(w))
// Space: O(n * max(w))

const CODES = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

const hashWord = (word) => {
  const hash = new Array(26).fill(0);
  for (const ch of word) {
    ++hash[CODES[ch]];
  }
  return hash.toString();
};

var groupAnagrams = (words) => {
  const map = {};
  for (const word of words) {
    const hash = hashWord(word);
    console.log(word, " => ", hash);

    if (!(hash in map)) {
      map[hash] = [];
    }
    map[hash].push(word);
  }
  console.log("map => ", map);

  const groups = [];
  for (const k in map) {
    groups.push(map[k]);
  }
  return groups;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat", "aaa"];

console.log(groupAnagrams(strs));
