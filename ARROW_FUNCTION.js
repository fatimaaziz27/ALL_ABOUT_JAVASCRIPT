Arrow Functions
const multiply = (a, b) => a * b;

Example
const add = (a, b) => {
  return a + b;
};

Shorter Syntax
const multiply = function(a, b) {return a * b}
With Arrow
const multiply = (a, b) => a * b;
With Arrow
const hello = () => "Hello World!";

Before Arrow
const hello = function() {return "Hello World!";}

Without Parantheses
const square = x => x * x;
With Parantheses
const hello = (val) => "Hello " + val;

You can remove the brackets and the return keyword:
Example
const hello = () => "Hello World!";

Arrow Function Parameters
Example
const hello = (val) => "Hello " + val;

If you have only one parameter
Example
const hello = val => "Hello " + val;

No Parameters
With Arrow Function:
const hello = () => "Hello World!";

Examples
// This will return undefined
const myFunction = (x, y) => { x * y };

// This will return undefined
const myFunction = (x, y) => return x * y;

// This will return the expected result
const myFunction = (x, y) => { return x * y };
