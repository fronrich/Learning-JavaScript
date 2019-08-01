// Using objects in an object array to make a closet data structure
// Closet
var myCloset = [
  // Section (shelves)
  { // bottoms
    // item
    blueJean: {
      // item name
      name: 'Levi 550s',
      size: '28X30',
      color: 'blue',
      price: 50
    },
    trouser: {
      name: 'Uniqlo Cropped Trousers',
      size: '28X30',
      color: 'red',
      price: 75
    }
  },
  { // tops
    tShirt: {
      name: 'American Colors Polo',
      size: 'S',
      color: 'F8E59A',
      price: 30
    },
    jacket: {
      name: 'Big Jacket',
      size: 'XL',
      color: 'mutli',
      price: 120
    }
  }
]
// A small object to enumerate closet sections
var index = {
  bottoms: 1,
  tops: 2
}
// Clothing Functions
// Finds closet shelf based on array index or string id
// converts enumeration to index if needed
function findShelf(id) {
  return ((typeof id) === 'number') ? // first check if number
  (id < myCloset.length && id >= 0 ? // if number check range
  id : undefined) // only return number in range
  : (index.hasOwnProperty(id) ? // if not number check string
  index[id] : undefined); // only return key of actual index
}

// Test Logs
console.log(findShelf(5)); // out of range
console.log(findShelf(0)); // in range
console.log(findShelf("bottoms")); // in range
console.log(findShelf('buttons')); // out of range
console.log(findShelf(1)); // in range

// sel item for 75% percent of its worth
function sellItem(closet, section, item) {
  pathAsString = closet + '.' + section + '.' + item;
  path = pathAsString.split('.').reduce()
  console.log(pathAsString);
  toReturn = path.name + ' was sold for $' + (path.price * .75);
  delete path;
  return toReturn;
}

console.log(sellItem('myCloset', 'bottoms', 'blueJean'));
