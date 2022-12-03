// Compare two integers given as strings and return if the first string is less, greater or equal to the second string

const compareIntegers = (a, b) => {
  if (parseInt(a) === parseInt(b)) {
    return "equal";
  }

  return parseInt(a) < parseInt(b) ? "less" : "greater";
};

console.log(compareIntegers("12", "23")); // less
console.log(compareIntegers("87", "70")); // greater
console.log(compareIntegers("100", "100")); // equal
