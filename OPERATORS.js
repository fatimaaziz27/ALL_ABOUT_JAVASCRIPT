// JavaScript operators include:

// - Arithmetic Operators
// - Assignment Operators
// - Comparison Operators
// - Logical Operators
// - Bitwise Operators
// - Ternary Operator
// - Type Operators
// - Nullish Coalescing Operator (`??`)
// - Optional Chaining Operator (`?.`)


// Arithmetic Operators

// | Operator | Example | Output |
// | + | 5 + 3 | 8 |
// | - | 5 - 3 | 2 |
// | * | 5 * 3 | 15 |
// | / | 6 / 2 | 3 |
// | % | 5 % 2 | 1 |
// | ** | 2 ** 3 | 8 |
// | ++ | i++ | Adds 1 |
// | -- | i-- | Subtracts 1 |

// Example ---->
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);

// Assignment Operators

// | Operator | Example | Equivalent To |
// | = | x = 5 | Assign value |
// | += | x += 2 | x = x + 2 |
// | -= | x -= 2 | x = x - 2 |
// | *= | x *= 2 | x = x * 2 |
// | /= | x /= 2 | x = x / 2 |
// | %= | x %= 2 | x = x % 2 |

// Example ----->

let x = 10;
x += 5;
console.log(x); // 15

x -= 3;
console.log(x); // 12

x *= 2;
console.log(x); // 24

x /= 4;
console.log(x); // 6

// Comparison Operators

// | Operator | Description |
// | == | Equal value |
// | === | Equal value and type |
// | != | Not equal |
// | !== | Not equal value or type |
// | > | Greater than |
// | < | Less than |
// | >= | Greater than or equal |
// | <= | Less than or equal |

// Example ------>

console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(10 > 5);     // true
console.log(10 <= 5);    // false

// Logical Operators

// | Operator | Description |
// | && | Logical AND |
// | || | Logical OR |
// | ! | Logical NOT |

// Example ------>

let age = 20;

console.log(age > 18 && age < 30); // true
console.log(age > 25 || age < 30); // true
console.log(!(age > 18));          // false

// Bitwise Operators

// | Operator | Description |
// | & | AND |
// | | | OR |
// | ^ | XOR |
// | ~ | NOT |
// | << | Left Shift |
// | >> | Right Shift |

// Example ----->

console.log(5 & 1);
console.log(5 | 1);

// Ternary Operator
// Syntax
// condition ? valueIfTrue : valueIfFalse;

// Example ----->

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// Type Operators

// | Operator | Description |
// | `typeof` | Returns the data type |
// | `instanceof` | Checks if an object belongs to a class |

// Example ---->

console.log(typeof "Hello"); // string
console.log(typeof 100);     // number
console.log(typeof true);    // boolean

// Nullish Coalescing Operator (`??`)

// Example ----->

let username = null;
console.log(username ?? "Guest");

// Output
// Guest

// Optional Chaining (`?.`)

// Example

let user = {};
console.log(user.address?.city);

// Output
// undefined
