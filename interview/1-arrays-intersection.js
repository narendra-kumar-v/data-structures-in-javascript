const arr2 = [2, 3];
const arr1 = [1, 2];
const arr3 = ["a", "b"];
const arr4 = ["b", "c"];
const arr5 = ["b", "e", "c"];
const arr6 = ["b", "b", "e"];
const arr7 = ["b", "c", "e"];
const arr8 = ["b", "e", "c"];

const inter = (arr1, arr2) => {
  const res = arr1.filter((item) => {
    return arr2.some((el) => el === item);
  });
  return [...new Set(res)];
};

const intersection = (...arrays) => {
  const len = arrays.length;

  if (len < 2) return result;

  let res = arrays[0];
  let index = 1;
  while (index < len) {
    console.log(res, " | ", arrays[index]);
    res = inter(res, arrays[index++]);
    console.log("=> ", res);
  }
  console.log("=>> final result = ", res, "\n");
  return res;
};

intersection(arr1, arr2);
intersection(arr3, arr4, arr5);
intersection(arr6, arr7, arr8);
intersection(arr3, arr4, arr5, arr6, arr7, arr8);
