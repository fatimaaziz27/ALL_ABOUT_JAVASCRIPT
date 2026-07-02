// Quick Revision Notes ------->



// Arrays
let arr = [];
let arr1 = ["a", "b"];
let arr2 = [1, 2];
let arr3 = ["a", 1];

// Access
console.log(arr1[0]);

// Update
arr1[1] = "c";

// Length
console.log(arr1.length);
console.log(arr1.length - 1);

// Last Element
console.log(arr1[arr1.length - 1]);

// Add to End
arr1.push("d");

// Remove from End
let last = arr1.pop();

// Add to Start
arr1.unshift("z");

// Remove from Start
let first = arr1.shift();

// Object
let obj = {};
obj[2] = "weight";
console.log(obj[2]);



// for Loop
// for (init; condition; increment) { }

// Basic
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Store Values
let rows = [];
for (let i = 0; i < 5; i++) {
  rows.push(i);
}
console.log(rows);

// for...of
let result = "";
for (const row of rows) {
  result += row;
}
console.log(result);

// New Line
result = "";
for (const row of rows) {
  result += row + "\n";
}
console.log(result);

// Pyramid
const char = "#";
rows = [];
for (let i = 1; i <= 5; i++) {
  rows.push(char.repeat(i));
}

result = "";
for (const row of rows) {
  result += row + "\n";
}
console.log(result);
