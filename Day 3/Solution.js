// Write a function `endsWithC` that accepts a string as an argument. The function should return a boolean indicating whether or not the string ends with the character 'c' regardless of case.

const endsWithC = (str) => {
  //		return str.slice(-1) === "C" || str.slice(-1) === 'c' ? true : false;
  return str[str.length - 1] === "C" || str[str.length - 1] === "c"
    ? true
    : false;
};

console.log(endsWithC("endswithc")); // true
console.log(endsWithC("endswithC")); // true
console.log(endsWithC("endswithr")); // false
console.log(endsWithC("endswithE")); // false
