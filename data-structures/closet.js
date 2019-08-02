// Using objects in an object array to make a closet data structure
// Main Closet boject
var closet = [
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
  size: 2,
  bottoms: 0,
  tops: 1
}
// Clothing Functions
// Finds closet shelf based on array index or string id
// converts enumeration to index if needed
function findShelf(sectionId) {
  return ((typeof sectionId) === 'number') ? // first check if number
  (sectionId < closet.length && sectionId >= 0 ? // if number check range
  sectionId : undefined) // only return number in range
  : (index.hasOwnProperty(sectionId) ? // if not number check string
  index[sectionId] : undefined); // only return key of actual index
}

// Test Logs
console.log(findShelf(5)); // out of range
console.log(findShelf(0)); // in range
console.log(findShelf('bottoms')); // in range
console.log(findShelf('buttons')); // out of range
console.log(findShelf(1)); // in range

// add section
// abstractly unsorted
function renovateAdd(sectionId) {
  let section = {}; // blank section object
  closet.push(section);
  // When using strings, bracket notation
  // Prevent logic errors when assigning undeclared properties
  index[sectionId] = index.size;
  index.size++;
  return "Added " + sectionId + " to closet."
}

console.log(index.hasOwnProperty('socks'));
console.log(renovateAdd('socks'));
console.log(index.hasOwnProperty('socks') + ":" + index['socks']);
