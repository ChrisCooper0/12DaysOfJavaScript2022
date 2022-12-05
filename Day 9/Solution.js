// Write a function `commonElements` that accepts two arrays as arguments. The function should return a new array containing the elements that are found in both of the input arrays

const commonElements = (arr1, arr2) => {
  let commonArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonArr.push(arr1[i]);
    }
  }

  return commonArr;
};

console.log(commonElements(["a", "b", "c", "d"], ["c", "d", "e", "f"])); // ['c', 'd']
console.log(commonElements([1, 4, 5, 7], [5, 8, 3, 1])); // [1, 5]
