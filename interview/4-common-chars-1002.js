// Given a string array words, return an array of all characters that show up in all strings
// within the words (including duplicates).
// You may return the answer in any order.

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

var commonChars = (words) => {
  let result = [...words[0]];

  console.log("res => ", result);
  for (let i = 1; i < words.length; i++) {
    result = result.filter((char) => {
      const l = words[i].length;
      // replace the first occurrence with empty => char found in the i'th word
      words[i] = words[i].replace(char, "");
      // check if char is removed
      return l > words[i].length; // will be true if char was replaced
    });
    console.log("res => ", result);
  }
  console.log("final result => ", result);
  return result;
};

commonChars(["bella", "label", "roller"]);
commonChars(["cool", "lock", "cook"]);
