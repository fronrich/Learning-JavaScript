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

// Functional Programming

// Anonymous Functions
var apple = function() {
  return new Date();
}
// the function above can be written as an arrow function
var apple = () => new Date();
// arrow functions allow for the compression of functions
var area = (length, width) =>
  (length * width > 100 ? 'big' : 'small') +
  ' with size of ' + length * width;
console.log(area(50, 3)); // Should be big
console.log(area(5, 3)); // Should be small

// Use default parameters for optional fields
const increment = (
  function() {
    return function increment(number, value = 1) {
      return number + value;
    }
  }
)(); // Those last 2 brackets make this an arrow function
console.log(increment(5,2)); // Should print 7
console.log(increment(2)); // Should print 3

// Using rest (...) Operators
// Allows for infinite parameters
function addAll(...args) {
  let runningTotal = 0;
  for(let i = 0; i < args.length; i++)
    runningTotal += args[i];
  return runningTotal;
}

console.log(addAll(10, 10, 10, 15));
