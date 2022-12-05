// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D array containing pairs of elements at the same indices. You can assume that the arrays have the same length

const zipper = (arr1, arr2) => {
  let zippedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    zippedArr.push([arr1[i], arr2[i]]);
  }

  return zippedArr;
};

console.log(zipper([1, 2, 3], ["a", "b", "c"]));
// [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]
