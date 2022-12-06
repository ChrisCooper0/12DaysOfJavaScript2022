// Write a function `inRange(min, max, n)` that accepts three numbers as arguments. The function should return a boolean indicating if `n` is between `min` and `max` inclusive

const inRange = (min, max, n) => {
  return n >= min && n <= max;
};

console.log(inRange(5, 13, 8)); // true
console.log(inRange(5, 13, 29)); // false
console.log(inRange(100, 125, 100)); // true
console.log(inRange(100, 125, 99)); // false
