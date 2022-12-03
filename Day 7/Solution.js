// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should return a string containing the first character of each word in the sentence

const makeAcronym = (str) => {
  let words = str.split(" ");
  let acronym = "";

  for (let i = 0; i < words.length; i++) {
    acronym += words[i][0];
  }

  return acronym.toUpperCase();
};

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("Same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("Don't over think stuff")); // DOTS
