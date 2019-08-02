// Strings and common issues
// Strings are immutable, they cannot be changed
var quotes = "\"\""; // use escape character for quotes (\")to retain syntax while printing quotes
// use (\) for all esapce characters
console.log(quotes);
// Using single quotes for a string also works
var alsoQuotes = '""';
console.log(alsoQuotes);
// Great code hack
var backTicks = `'""'`;
console.log(backTicks);
// Paragraph
var par = "Hi\nThere\nWorld";
console.log(par);
// String variables
// Use .length to get the length of a String
console.log('The String "backTicks" is ' + backTicks.length + ' chracters long.');
// Strings are just character arrays, so to access elements at index [n] use bracket format
// To find last letter use [var.length - 1]
var hello = par[0]; // hello should equal h
console.log('hello = ' + hello);
