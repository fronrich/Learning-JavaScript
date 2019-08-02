// Objects - defined as variables with properties
// use Object.freeze(objName) to make objects immutable

var fishBowl = {
  'size': 'big', // syntax for defining properties of object
  'fish': 5
};
// accessing object properties
console.log(fishBowl.size); // should print 'big'
var size = fishBowl['size'];
console.log(size); // brackets work too as properties are enumerated
// modifying object properties
fishBowl.size = 'small';
console.log(fishBowl.size); // should print 'small'
// add properties
// come up with a new var nameTag
fishBowl.isClean = true;
console.log(fishBowl.isClean);
// delete property
delete fishBowl.size;
// Objects as key : val dictionary
// use over switch Function
var kicks = {
  // Use of an object array (nested objects)
  redBottoms: {
    'color': 'red', // variable names can be strings, but do not have to be
    number: 2,
    shoe: 'balenciagas'
  },

  blueBottoms: {
    color: 'red',
    number: 50,
    shoe: 'gucci'
  }
}
// Copy of the object for testing purposes
var kicksCopy = JSON.parse(JSON.stringify(kicks)); // Quick copy function chain

//
function hasProp(obj, prop) {
  // .hasOwnProperty returns true or false on whether obj has property
  return (obj.hasOwnProperty(prop)) ? "I've got it!" : "Don't have it sorry"
}

// mutator function must be placed outside object
function getPrice(obj) {
  obj.price = obj.number * obj.shoe.length;
  return obj.price;
}
// redBottoms
console.log(hasProp(kicks.redBottoms, 'price'));
console.log('These shoes cost $' + getPrice(kicks.redBottoms));
console.log(hasProp(kicks.redBottoms, 'price'));
// blueBottoms
console.log(hasProp(kicks.blueBottoms, 'price'));
console.log('These shoes cost $' + getPrice(kicks.blueBottoms));
console.log(hasProp(kicks.blueBottoms, 'price'));
