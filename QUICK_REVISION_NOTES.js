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




// Order of Operations
// PEMDAS

// Function
function greet() {}
greet();

// Return
function hello() {
  return "Hello!";
}
console.log(hello());

// Parameters
function add(a, b) {
  return a + b;
}
console.log(add(3, 3));

// Local Variable
function getName() {
  const name = "Camper";
  return name;
}
console.log(getName());

// Pyramid Function
const char = "#";
function padRow(row, total) {
  return " ".repeat(total - row) +
         char.repeat(2 * row - 1) +
         " ".repeat(total - row);
}

// for Loop Pyramid
let rows = [];
for (let i = 1; i <= 5; i++) {
  rows.push(padRow(i, 5));
}
console.log(rows.join("\n"));

// while Loop
rows = [];
while (rows.length < 5) {
  rows.push(padRow(rows.length + 1, 5));
}

// Reverse Pyramid
rows = [];
for (let i = 5; i > 0; i--) {
  rows.push(padRow(i, 5));
}

// Diamond
rows = [];
for (let i = 1; i <= 5; i++) rows.push(padRow(i, 5));
for (let i = 4; i > 0; i--) rows.push(padRow(i, 5));

// unshift()
rows = [];
for (let i = 1; i <= 5; i++) {
  rows.unshift(padRow(i, 5));
}

// Toggle Direction
let inverted = true;
rows = [];
for (let i = 1; i <= 5; i++) {
  inverted ? rows.unshift(padRow(i, 5))
           : rows.push(padRow(i, 5));
}
