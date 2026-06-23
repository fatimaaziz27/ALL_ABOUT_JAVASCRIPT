// for (iterator; condition; iteration) {
//   logic;
// }

// for (let index = 100; "second"; "third") {
// }

const count = 8;
for (let i = 0; i < count; i = i + 1) {
  console.log(i);
}

const count = 8;
const rows = [];
for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}
console.log(rows);

// for (const value of iterable) {
// }

const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = ""

for (const row of rows) {
  result = result + row;
}

console.log(result);

//     OR

const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);

// For Pyramid Generator

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i))
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
