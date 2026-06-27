// For Creating a Function ---->
// Note that the order of operations rule PEMDAS—Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction—applies
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
