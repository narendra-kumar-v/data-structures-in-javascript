// Find common chars between strings with duplicates

// const str1 = "aabc"
// const str2 = "abcca"
// o/p => aac

const commonChars = (str1, str2) => {
  let res = [...str1];

  res = res.filter((char) => {
    const len = str2.length;

    str2 = str2.replace(char, "");
    return len > str2.length;
  });

  return res;
};

const commonCharsWithNoDuplicates = (str1, str2) => {
  return [...new Set(commonChars(str1, str2))];
};

console.log(commonChars("aabc", "acca"));
console.log(commonCharsWithNoDuplicates("aabc", "acca"));
