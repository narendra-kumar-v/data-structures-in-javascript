const commonElements = (arr1, arr2) => {
  const res = arr1.filter((item) => {
    const len = arr2.length;
    const index = arr2.indexOf(item);
    if (index !== -1) {
      arr2.splice(index, 1);
    }
    return len > arr2.length;
  });
  console.log("common => ", res);
  return res;
};

console.log(commonElements(["a", "b", "c", "c"], ["b", "c", "e", "d", "c"]));
