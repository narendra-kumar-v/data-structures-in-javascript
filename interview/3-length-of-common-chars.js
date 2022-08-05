// strs = ["aabcc", "acdaa", "abcca"]
// "aabcc" => aac => 3
// "acdaa" => aca => 3
// "abcca" => aca => 3

var commonChars = (words) => {
  let result = [...words[0]];

  for (let i = 1; i < words.length; i++) {
    result = result.filter((char) => {
      const l = words[i].length;
      // replace the first occurrence with empty => char found in the i'th word
      words[i] = words[i].replace(char, "");
      // check if char is removed
      return l > words[i].length; // will be true if char was replaced
    });
    console.log("=> ", result);
  }
  return result.length;
};

console.log(commonChars(["aabcc", "acdaa", "abcca"]));
