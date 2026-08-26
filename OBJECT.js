// Object Methods
// Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};


// The this Keyword
// Example 1
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getId: function() {
    return this.id;
  }
};
let number = person.getId();


// Example 2
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};


// Accessing Object Methods
// Syntax
// objectName.methodName()
// Example
name = person.fullName();


// Adding a method to an object by assigning a function to a property:
// Example
// Assign person.name to a function
person.name = function () {
  return this.firstName + " " + this.lastName;
};


// Adding a JavaScript Method
// toUpperCase() method 
// Example
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};


// this Keyword
// Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};


// The this keyword makes it possible to use the same method with different objects.
// Example
const person1 = {
  name: "John",
  hello: function() {
    return "Hello " + this.name;
  }
};
const person2 = {
  name: "Anna",
  hello: function() {
    return "Hello " + this.name;
  }
};
document.getElementById("demo").innerHTML = person1.hello();


// JavaScript Display Objects
// Example
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// Add Properties
let text = person.name + "," + person.age + "," + person.city;


// Using a For .. In Loop
// Example
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};


// Using Object.values()
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// Create an Array
const myArray = Object.values(person);
// Stringify the Array
let text = myArray.toString();


// Using Object.entries()
// Example
const fruits = {Bananas:300, Oranges:200, Apples:500};
let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}


// Using JSON.stringify()
// The result will be a string written in JSON notation:
// {"name":"John","age":50,"city":"New York"}
// Example
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// Stringify Object
let text = JSON.stringify(person);


// JavaScript Object Constructors
// Object Type Person
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}


// JavaScript Object this.
// Example
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");


// Property Default Values
// Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}


// Adding a Property to an Object
// Example
myFather.nationality = "English";


// Adding a Property to a Constructor
// Example
Person.prototype.nationality = "English";


// Constructor Function Methods
// Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}


// Adding a Method to an Object
// Example
myMother.changeName = function (name) {
  this.lastName = name;
}


// Adding a Method to a Constructor
// Adding a new method to a constructor must be done to the constructor function prototype:
// Example
Person.prototype.changeName = function (name) {
  this.lastName = name;
}
myMother.changeName("Doe");
