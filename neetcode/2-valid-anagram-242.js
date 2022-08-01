// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

var isAnagram = (s, t) => {
  const sMap = {};
  const tMap = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    if (sMap.hasOwnProperty(sChar)) {
      sMap[sChar] = sMap[sChar] + 1;
    } else {
      sMap[sChar] = 1;
    }
    if (tMap.hasOwnProperty(tChar)) {
      tMap[tChar] = tMap[tChar] + 1;
    } else {
      tMap[tChar] = 1;
    }

    console.log(sMap, " | ", tMap);
  }

  for (let k in sMap) {
    if (sMap[k] !== tMap[k]) return false;
  }

  return true;
};

var isAnagram = (s, t) => {
  console.log([...s], " => ", [...t]);
  for (let c of Object.entries({ ...s })) {
    console.log(c);
  }
  return s.split("").sort().join("") === t.split("").sort().join("");
};

const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s, t));
