// Allows for the repeated execution of code
var x = 20;
var array = [];
while(x > -40) {
  array.push(x);
  x--;
}
console.log(JSON.stringify(array));

// like while loop but will always loop at least once
do  {
  array.push(x);
  x--;
} while(x > -40)

console.log(JSON.stringify(array));
// This still exectues because of "do"
do  {
  array.push(x);
  x--;
} while(x > 40)

console.log(JSON.stringify(array));
