What are Object Methods?
Methods are actions that can be performed on objects.

Methods are functions stored as property values.

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
Property	Value
firstName	John
lastName	Doe
age	50
fullName	function() {
  return this.firstName + " " + this.lastName;
}
The this Keyword
In an object method, this refers to the object.

Example 1
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getId: function() {
    return this.id;
  }
};

let number = person.getId();
In the example above, this refers to the person object.

this.id means the id property of the person object.

Example 2
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
In the example above, this refers to the person object.

this.firstName means the firstName property of the person object.

this.lastName means the lastName property of the person object.

Accessing Object Methods
To call an object method, add parentheses ():

Without parentheses you get the function itself.

Syntax
objectName.methodName()
If you call a method with parentheses, it will execute as a function:

Example
name = person.fullName();
If you call a method without parentheses, it will return the function definition:

Example
name = person.fullName;
REMOVE ADS

Adding a Method to an Object
You can add a method to an object by assigning a function to a property:

Example
// Assign person.name to a function
person.name = function () {
  return this.firstName + " " + this.lastName;
};
In the example above, person.name is a property with a function assigned to it.

Adding a JavaScript Method
This example uses the JavaScript toUpperCase() method to convert a text to uppercase:

Example
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};


























JavaScript this Keyword
this in Objects
The this keyword refers to an object.

In JavaScript, this is used to access the object that is calling a method.

this in an Object Method
When used inside an object method, this refers to the object.

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
In the example above:

this.firstName refers to the firstName property of the person object
this.lastName refers to the lastName property of the person object
Why Use this?
The this keyword makes it possible to use the same method with different objects.

Example
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

REMOVE ADS

this Alone
When used alone, this refers to the global object.

In a browser, the global object is the window object.

Example
let x = this;
document.getElementById("demo").innerHTML = x;
In strict mode, this is undefined when used alone.

this in a Function
In a regular function, this also refers to the global object.

Example
function myFunction() {
  return this;
}

document.getElementById("demo").innerHTML = myFunction();
