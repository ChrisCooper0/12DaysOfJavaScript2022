// Write a function that takes an object with two properties as an argument
// It should return the value of the property with key country

const accessProperties = (obj) => {
  // Dot notation
  // return obj.country;

  // Bracket notation
  return obj["country"];
};

console.log(accessProperties({ continent: "Asia", country: "Japan" })); // Japan
console.log(accessProperties({ country: "France", continent: "Europe" })); // France
