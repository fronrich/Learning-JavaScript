//You can assign the contents of one variable to the contents of another
var x;
var y = 10;
x = y;

// You can use arithmetic when assigning and redefining variables
// Operators
// + - add
// - - subtract
// * - multiply
// / - divide
// % - modulous (remainder)

var a = x + y; // this should be 20
var b = a * x; // this should be 200

// Use string concatonation to display variables and their respective values
console.log("x = " + x + ", y = " + y);
console.log("a = " + a);
console.log("b = " + b);

// Primatives are not reference objects
// Since y is making a copy of x, and not pointing to x, x is not affected
// by changes in y;

y++; // shorthand for add 1 to y
console.log("x = " + x + ", y = " + y);
y--; // shorthand for subtract 1 from y
// to add, subtract, multiply, or divide more than 1 from a value, use the syntax var += value;
// substitue a "-" sign for subtraction
// substitue a "*" sign for multiplication
// substitue a "/" sign for division

// unlike java, the number type divides properly (no int division by default)
console.log("3 / 2 =" + (3 / 2));

// decimals work too (more formally known as floating point numbers)
c = 2.0;
// Defualts to least amount of floating points with arithmetic
var d = c * y;
console.log("d = " + d);
