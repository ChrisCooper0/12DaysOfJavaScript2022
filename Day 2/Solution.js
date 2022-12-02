// Write a function that takes an array and reverses its contents

const reverseArray = (arr) => {
  // return arr.reverse()

  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
};

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["top", "right", "bottom", "left"])); // ["left", "bottom", "top", "right"
