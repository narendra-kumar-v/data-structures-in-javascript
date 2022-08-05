const arr2 = [2, 3]; // 2
const arr1 = [1, 2];

const arr3 = ["a", "b"]; // b
const arr4 = ["b", "c"];
const arr5 = ["b", "e", "c"];

const arr6 = ["b", "b", "e"]; // b, e
const arr7 = ["b", "c", "e", "b"];
const arr8 = ["b", "e", "c", "b"];

const inter = (arr1, arr2) => {
  const res = arr1.filter((item) => {
    const len = arr2.length;
    const index = arr2.indexOf(item);
    if (index !== -1) {
      arr2.splice(index, 1);
    }
    return len > arr2.length;
  });
  console.log("common => ", res);
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

intersection(arr1, arr2); //        [2, 3]; 1, 2]; => ["2"]
intersection(arr3, arr4, arr5); //  ["a", "b"] ,["b", "c"], ["b", "e", "c"] => ["b"]
intersection(arr6, arr7, arr8); //  ["b", "b", "e"]; ["b", "c", "e", "b"]; ["b", "e", "b", "c"]; => ["b", "e"]
