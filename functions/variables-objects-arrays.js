// JavaScript has case-sensitive variables

/* Javascript uses dynamic typing as seen here
Data Types:
undefined
null
boolean
string
symbol
number
object
*/

// Disallows compilation of code with bad hygine
"use strict";

// Assigning variables

// The scope is detrmined by functions on var
// var is global until overwritten beyond scope
var greeting = "Hello World"; // Global variable of type string.
// A let variable cannot be declared twice
// let is as local as possible
let happy = true; // Local variable of type boolean.
// Basically let but read-only (final)
// You can mutate arrays declared with const
const pi = 3.14; // Local Final variabe of type number.

// Declaring variables
// you can declare variables to assign values to them later
var a;
var b;
var c;

/* Final varibales cannot be changed without a compilation error */

/* using console.log allows you to print a message into the console
The console can be viewed using the inspect tool within your web browser */
console.log(greeting); // This is an in-line comment

// Arrays - also dynamically typed
// Arrays are mutable by modifying their indexes
// adding brackets [][][] allows you to modify different
// dimensions of the array
var nameTag = ['Vim', 19];
// Nested arrays are possible
nameTag = [nameTag,
  nameTag
]; // pointers to original nameTag
console.log(nameTag);
console.log(JSON.stringify(nameTag)); // use JSON.stringify(array) as a toString Function
// Functional Queue and stack using arrays
// Use .push(var) to append to end of arrays
// Use .pop() to remove the last element and return that value
// Use .shift() to remove and return the first element
// Use .unshift(var) to append to front of element

// Use arrayOne.concat(arrayTwo) to combine arrays
