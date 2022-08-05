const arr6 = ["b", "b", "e"];

var unique = (arr) => {
  return [...new Set()];
};

var unique = (arr) => {
  //   const map = new Map();
  const map = {};
  for (let item of arr) {
    // if (!map.has(item)) {
    if (!map.hasOwnProperty(item)) {
      //   map.set(item);
      map[item] = true;
    }
  }
  console.log(map);
  //   return [...map.keys()];
  return Object.keys(map);
};

var unique = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

console.log(unique(arr6));
console.log(unique([1, 2, 3, 2, 4, 5, 3, , 4, 1]));
console.log(unique([null, undefined, 1, true, "a", "c", null, undefined, false, true, 2, 3, 1]));
