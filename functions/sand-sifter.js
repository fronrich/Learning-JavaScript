// given an array of sand grain sizes (100 random grains)
// create a program which will filter out sand
// smaller than a certain threshold

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sandSample = (amount, min, max) => {
  let temp = [];
  for (let i = 0; i <= amount; i++) {
    temp.push(randRange(min, max));
  }
  return temp;
};
console.log(JSON.stringify(sandSample(100, 5, 95)));

// Solution:
// Filter will scan through each number in the sandSample
// each number is denoted as 'int'
let filteredSand = (threshold) => {
  // allow any int less than threshold to pass
  sandSample.filter(int => int < threshold);
}

console.log(JSON.stringify(filteredSand(10)));
