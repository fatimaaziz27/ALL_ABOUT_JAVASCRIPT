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
