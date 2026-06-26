//                      Array

let array = [];
let array = ["first", "second"];
let array = [1, 2];
let array = ["first", 2];

let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);

let obj = ["name","age","height"]
obj [2] = "weight";
console.log(obj);

console.log(rows.length);
console.log(rows.length - 1);

let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);
console.log(rows);
// output
// [ 'London', 'New York', 'Mumbai' ]
// [ 'London', 'New York', 'Mexico City' ]
// [ 'Naomi', 'Quincy', 'CamperChan' ]

let cities = ["london","new york","mumbai"];
console.log(cities);
cities[2] = "mexico"
console.log(cities);
cities[3] = "karachi";
console.log(cities);
// // output
// [ 'london', 'new york', 'mumbai' ]
// [ 'london', 'new york', 'mexico' ]
// [ 'london', 'new york', 'mexico', 'karachi' ]

let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push(12);
console.log(rows);

rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(popped);
console.log(rows);

let pushed = rows.push("freeCodeCamp");
console.log(pushed);
let popped = rows.pop();
console.log(popped);
console.log(rows);
