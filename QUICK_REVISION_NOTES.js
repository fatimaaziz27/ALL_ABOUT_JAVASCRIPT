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




// SYNTAX ------->
// if (condition) {
//   logic
// }

if (true) {
  console.log("Condition is true");
}


if ("") {
  console.log("Condition is true");
} else if (5 < 10) {
  console.log("5 is less than 10");
} else {
  console.log("This is the else block");
}




// Methods = Functions inside objects

// Object Method
const person = {
  greet() { return "Hello!"; }
};
person.greet();

// String Methods
let text = "JavaScript";
text.length;
text.toUpperCase();
text.toLowerCase();
text.includes("Script");
text.slice(0, 4);
text.replace("Java", "Type");
text.repeat(2);
text.trim();

// Array Methods
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
arr.includes(2);
arr.indexOf(2);
arr.join("-");
arr.reverse();

// Object Methods
const student = { name: "Ali", age: 20 };
Object.keys(student);
Object.values(student);
Object.entries(student);

// Math Methods
Math.random();
Math.floor(4.9);
Math.ceil(4.1);
Math.round(4.5);
Math.max(1, 5, 3);
Math.min(1, 5, 3);
Math.sqrt(64);

// Date Methods
const today = new Date();
today.getFullYear();
today.getMonth();
today.getDate();
today.getDay();





// JavaScript Operators

// Arithmetic
let a = 10, b = 3;
a + b; a - b; a * b; a / b;
a % b; a ** b;
a++; b--;

// Assignment
let x = 10;
x += 5; x -= 2;
x *= 2; x /= 2;
x %= 3;

// Comparison
5 == "5";
5 === "5";
5 != "5";
5 !== "5";
10 > 5;
10 < 5;
10 >= 5;
10 <= 5;

// Logical
true && false;
true || false;
!true;

// Bitwise
5 & 1;
5 | 1;
5 ^ 1;
~5;
5 << 1;
5 >> 1;

// Ternary
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";

// Type
typeof "Hello";
typeof 100;
[] instanceof Array;

// Nullish
let user = null;
user ?? "Guest";

// Optional Chaining
let obj = {};
obj.address?.city;
