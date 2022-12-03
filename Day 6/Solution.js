// Given an integer x, return true if x is palindrome integer
// An integer is a palindrome when it reads the same backward as forward

const isPalindrome = (x) => {
  return x.toString() === x.toString().split("").reverse().join("");
};

console.log(isPalindrome(12321)); // true
console.log(isPalindrome(12324)); // false
