// If statements (conditionals)
// syntax: if (condition) {code}
if (a = b) {
  console.log('a(' + a + ') is equal to b(' + b + ')');
} else {
  console.log('a is not equal to b');
}

// Comparing Objects
// Equality vs Identity
/* The equality operator (==) will attempt to make the data
types the same before making the comparison.
On the other hand, the identity operator (===) requires both
data types to be the same as a prerequisite. */
// Ex.
// 1 == true => true
// 1 === true => false

// Switch statments - shorthand for if statment chains
// Example with alphabet
function alphaIndex(val) {
  let toReturn;
  switch (val) {
    case 1:
      // Put function in here
      toReturn = 'a';
      break; // without break case is overwritten
    case 2:
      toReturn = 'b';
      break;
    case 3:
      toReturn = 'c';
      break;
      // Multiple cases same output syntax
    case 4:
    case 5:
    case 6:
      toReturn = "I wasn't designed for this"
      break;
    default:
      toReturn = 'out of range';
  }

  return toReturn;
}
// should print 'a, b, c , I wasn't designed for this
console.log(alphaIndex(1) + ', ' + alphaIndex(2) + ', ' + alphaIndex(3) + ', ' + alphaIndex(4));
