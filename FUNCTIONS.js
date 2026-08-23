// From Basic ---->
// Code 1:
  function sayHello() {
  return "Hello World";
}
let greeting = sayHello();
document.getElementById("demo").innerHTML = greeting;

// Code 2:
function add(a, b) {
  return a + b;
}
let sum1 = add(5, 5);
let sum2 = add(50, 50);

// Code 3:
function sayHello() {
  return "Hello World";
}
let greeting = sayHello();

// Code 4:
// Default Parameter Values
function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5);

// Parameters vs. Arguments

// Parameters are the names listed in the function definition.
function multiply(a, b) {
  return a * b;
}
let result = multiply(4, 5);

// Arguments are the real values passed to, and received by the function.
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
//       OR
x = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// Code 5:
// Return Func
function multiply(a, b) {
  return a * b;
}
let result = multiply(4, 5);


// Note that the order of operations rule PEMDAS—Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction—applies
// SYNTAX ------->
// function name(parameter) {
// }

// step 1
function padRow() {
}
padRow();

// step 2
function padRow() {
}
const call = padRow();

// step 3
function padRow() {
}
const call = padRow();
console.log(call);

// step 4
function padRow() {
  return "Hello!";
}
const call = padRow();
console.log(call);

// With Parameters

// SYNTAX ------->
// function sayName(firstName, lastName) {
//   return "John Doe";
// }
// sayName("Camper", "Cat");

function addTwoNumbers(num1,num2) {
  return num1 + num2;
}
const call = addTwoNumbers(3,3);
console.log(call);

function getName() {
  const name = "Camper cat";
  return name;
}

// SYNTAX ------->
// console.log(getName()); // "Camper cat"
// const capturedReturnValue = getName();
// console.log(capturedReturnValue); // "Camper cat"
// console.log(name); // reference error

function padRow(name) {
  const test = "Testing";
  
  return test;
}
const call = padRow("CamperChan");
console.log(call);


// Building a Pyramid Generator With JavaScript 

const character = "#";
const count = 27;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <+ count; i++) {
  rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);

// CODE 2 ---->

const character = "#";
const count = 27;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);

// CODE 3 ---->

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);


// CODE 4 ---->

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}
let result = ""
for (const row of rows) {
  result = result + row + "\n";
}
console.log(result);

// CODE 5 ---->

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
for (let i = 1; i <= count; i++) {
  rows.unshift(padRow(i, count));
}
let result = ""
for (const row of rows) {
  result = result + row + "\n";
}
console.log(result);

// CODE 6 ---->

const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}
let result = ""
for (const row of rows) {
  result = result + row + "\n";
}
console.log(result);
