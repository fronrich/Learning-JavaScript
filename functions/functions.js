// Functions - basically java methods with dynamic return type
function addFour(a, b, b, d) {
  return a + b + c + d; // return not nessesary
}
console.log(addFour(1, 2, 3, 4)); // Should print 10

// Math.random function - generates a random decimal
console.log(Math.random());
// generates a whole number between 0-19
console.log(Math.floor(Math.random() * 20));

// Generates random whole numbers within a range
function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randRange(10, 20));

// parseInt allows you to convert string to integer
console.log(parseInt("900281"));

// Can convert radix as well
function toBaseTen(bitString) {
  return parseInt(bitString, 2);
}
console.log(toBaseTen(10010110));
