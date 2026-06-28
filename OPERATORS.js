// Arithmetic Operators

// | Operator | Description | Example | Output |
// | + | 5 + 3 | 8 |
// | - | 5 - 3 | 2 |
// | * | 5 * 3 | 15 |
// | / | 6 / 2 | 3 |
// | % | 5 % 2 | 1 |
// | ** | 2 ** 3 | 8 |
// | ++ | i++ | Adds 1 |
// | -- | i-- | Subtracts 1 |

### Example

```javascript
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);
```

---

## 2. Assignment Operators

Used to assign values to variables.

| Operator | Example | Equivalent To |
|----------|---------|---------------|
| `=` | `x = 5` | Assign value |
| `+=` | `x += 2` | `x = x + 2` |
| `-=` | `x -= 2` | `x = x - 2` |
| `*=` | `x *= 2` | `x = x * 2` |
| `/=` | `x /= 2` | `x = x / 2` |
| `%=` | `x %= 2` | `x = x % 2` |

### Example

```javascript
let x = 10;

x += 5;
console.log(x); // 15

x -= 3;
console.log(x); // 12

x *= 2;
console.log(x); // 24

x /= 4;
console.log(x); // 6
```

---

## 3. Comparison Operators

Used to compare two values.

| Operator | Description |
|----------|-------------|
| `==` | Equal value |
| `===` | Equal value and type |
| `!=` | Not equal |
| `!==` | Not equal value or type |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

### Example

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(10 > 5);     // true
console.log(10 <= 5);    // false
```

---

## 4. Logical Operators

Used with Boolean values.

| Operator | Description |
|----------|-------------|
| `&&` | Logical AND |
| `||` | Logical OR |
| `!` | Logical NOT |

### Example

```javascript
let age = 20;

console.log(age > 18 && age < 30); // true
console.log(age > 25 || age < 30); // true
console.log(!(age > 18));          // false
```

---

## 5. Bitwise Operators

Operate on binary numbers.

| Operator | Description |
|----------|-------------|
| `&` | AND |
| `|` | OR |
| `^` | XOR |
| `~` | NOT |
| `<<` | Left Shift |
| `>>` | Right Shift |

### Example

```javascript
console.log(5 & 1);
console.log(5 | 1);
```

---

## 6. Ternary Operator

A shorthand for `if...else`.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

### Example

```javascript
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

---

## 7. Type Operators

| Operator | Description |
|----------|-------------|
| `typeof` | Returns the data type |
| `instanceof` | Checks if an object belongs to a class |

### Example

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 100);     // number
console.log(typeof true);    // boolean
```

---

## 8. Nullish Coalescing Operator (`??`)

Returns the right value only if the left value is `null` or `undefined`.

### Example

```javascript
let username = null;

console.log(username ?? "Guest");
```

**Output**

```
Guest
```

---

## 9. Optional Chaining (`?.`)

Safely accesses object properties without causing an error if a property doesn't exist.

### Example

```javascript
let user = {};

console.log(user.address?.city);
```

**Output**

```
undefined
```

---

# Summary

JavaScript operators include:

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Bitwise Operators
- Ternary Operator
- Type Operators
- Nullish Coalescing Operator (`??`)
- Optional Chaining Operator (`?.`)

These operators are used for calculations, comparisons, logical operations, assigning values, checking data types, and writing cleaner JavaScript code.
