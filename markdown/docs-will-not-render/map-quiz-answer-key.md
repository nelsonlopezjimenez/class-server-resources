# JavaScript Map() Quiz - Teacher's Answer Key

## Overview
This 10-task quiz tests students' understanding of the `Array.map()` method in JavaScript, progressing from simple transformations to complex object manipulations.

**Difficulty Distribution:**
- Easy: Tasks 1-3 (30%)
- Medium: Tasks 4-6 (30%)
- Hard: Tasks 7-10 (40%)

---

## Task 1: Double All Numbers
**Difficulty:** Easy  
**Concepts:** Basic map, arithmetic operations

### ✅ Correct Solution:
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// Output: [2, 4, 6, 8, 10]
```

### Alternative Solutions:
```javascript
// Function keyword
const doubled = numbers.map(function(num) {
    return num * 2;
});

// More explicit arrow function
const doubled = numbers.map(num => {
    return num * 2;
});

// Named function
function double(num) {
    return num * 2;
}
const doubled = numbers.map(double);
```

### Common Student Mistakes:
❌ `numbers.map(num * 2)` - Forgetting the arrow function
❌ `numbers.map(num => num + 2)` - Adding instead of multiplying
❌ `numbers.forEach(num => num * 2)` - Using forEach instead of map
❌ Not returning a value from the callback

---

## Task 2: Convert Strings to Uppercase
**Difficulty:** Easy  
**Concepts:** String methods, map with built-in functions

### ✅ Correct Solution:
```javascript
const words = ["hello", "world", "javascript"];
const uppercase = words.map(word => word.toUpperCase());
console.log(uppercase);
// Output: ["HELLO", "WORLD", "JAVASCRIPT"]
```

### Alternative Solutions:
```javascript
// Method reference
const uppercase = words.map(String.prototype.toUpperCase.call);

// Explicit return
const uppercase = words.map(word => {
    return word.toUpperCase();
});
```

### Common Student Mistakes:
❌ `words.map(word => word.toUppercase())` - Wrong method name (case)
❌ `words.map(word => word.uppercase())` - Method doesn't exist
❌ `words.map(word => toUpperCase(word))` - Not a standalone function
❌ `words.map(toUpperCase)` - Incorrect syntax

---

## Task 3: Square All Numbers
**Difficulty:** Easy  
**Concepts:** Exponentiation, mathematical operations

### ✅ Correct Solution:
```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared);
// Output: [1, 4, 9, 16, 25]
```

### Alternative Solutions:
```javascript
// Using exponentiation operator
const squared = numbers.map(num => num ** 2);

// Using Math.pow
const squared = numbers.map(num => Math.pow(num, 2));
```

### Common Student Mistakes:
❌ `numbers.map(num => num * 2)` - Doubling instead of squaring
❌ `numbers.map(num => num ^ 2)` - Using XOR operator instead of power
❌ `numbers.map(num => num + num)` - Adding instead of multiplying

---

## Task 4: Extract Names from Objects
**Difficulty:** Medium  
**Concepts:** Object property access, data extraction

### ✅ Correct Solution:
```javascript
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const names = users.map(user => user.name);
console.log(names);
// Output: ["Alice", "Bob", "Charlie"]
```

### Alternative Solutions:
```javascript
// Destructuring
const names = users.map(({ name }) => name);

// Bracket notation
const names = users.map(user => user['name']);
```

### Common Student Mistakes:
❌ `users.map(name)` - Not accessing property
❌ `users.map(user => name)` - Using undefined variable
❌ `users.map(user => user)` - Returning whole object
❌ Returning objects instead of just the name string

---

## Task 5: Add Full Name Property
**Difficulty:** Medium  
**Concepts:** Object spreading, property concatenation

### ✅ Correct Solution:
```javascript
const people = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" }
];
const withFullName = people.map(person => ({
    ...person,
    fullName: person.firstName + ' ' + person.lastName
}));
console.log(withFullName);
// Output: [
//   { firstName: "John", lastName: "Doe", fullName: "John Doe" },
//   { firstName: "Jane", lastName: "Smith", fullName: "Jane Smith" }
// ]
```

### Alternative Solutions:
```javascript
// Template literals
const withFullName = people.map(person => ({
    ...person,
    fullName: `${person.firstName} ${person.lastName}`
}));

// Without spread
const withFullName = people.map(person => {
    return {
        firstName: person.firstName,
        lastName: person.lastName,
        fullName: person.firstName + ' ' + person.lastName
    };
});

// Object.assign
const withFullName = people.map(person => 
    Object.assign({}, person, {
        fullName: person.firstName + ' ' + person.lastName
    })
);
```

### Common Student Mistakes:
❌ Forgetting parentheses around object literal: `person => {fullName: ...}` (thinks it's function body)
❌ Not including original properties (firstName, lastName)
❌ Concatenating without space: `firstName + lastName`
❌ Mutating original object instead of creating new one

---

## Task 6: Calculate Total Prices with Tax
**Difficulty:** Medium  
**Concepts:** Object transformation, arithmetic with properties

### ✅ Correct Solution:
```javascript
const products = [
    { name: "Laptop", price: 1000, tax: 100 },
    { name: "Mouse", price: 25, tax: 2.5 },
    { name: "Keyboard", price: 50, tax: 5 }
];
const withTotal = products.map(product => ({
    ...product,
    totalPrice: product.price + product.tax
}));
console.log(withTotal);
// Output: [
//   { name: "Laptop", price: 1000, tax: 100, totalPrice: 1100 },
//   { name: "Mouse", price: 25, tax: 2.5, totalPrice: 27.5 },
//   { name: "Keyboard", price: 50, tax: 5, totalPrice: 55 }
// ]
```

### Alternative Solutions:
```javascript
// Destructuring
const withTotal = products.map(({ name, price, tax }) => ({
    name,
    price,
    tax,
    totalPrice: price + tax
}));
```

### Common Student Mistakes:
❌ Forgetting to spread original properties
❌ Using multiplication instead of addition
❌ Wrong formula: `price * tax` instead of `price + tax`

---

## Task 7: Format Birth Years to Ages
**Difficulty:** Hard  
**Concepts:** Date calculations, external variable usage

### ✅ Correct Solution:
```javascript
const users = [
    { name: "Alice", birthYear: 1995 },
    { name: "Bob", birthYear: 1988 },
    { name: "Charlie", birthYear: 2000 }
];
const currentYear = 2025;
const withAge = users.map(user => ({
    ...user,
    age: currentYear - user.birthYear
}));
console.log(withAge);
// Output: [
//   { name: "Alice", birthYear: 1995, age: 30 },
//   { name: "Bob", birthYear: 1988, age: 37 },
//   { name: "Charlie", birthYear: 2000, age: 25 }
// ]
```

### Alternative Solutions:
```javascript
// Using Date object
const currentYear = new Date().getFullYear();
const withAge = users.map(user => ({
    ...user,
    age: currentYear - user.birthYear
}));

// Inline calculation
const withAge = users.map(user => ({
    ...user,
    age: 2025 - user.birthYear
}));
```

### Common Student Mistakes:
❌ Wrong formula: `birthYear - currentYear` (negative age)
❌ Not spreading original properties
❌ Using `birthYear + age` instead of subtraction

---

## Task 8: Extract Nested City Names
**Difficulty:** Hard  
**Concepts:** Nested object access, property extraction

### ✅ Correct Solution:
```javascript
const users = [
    { name: "Alice", address: { city: "New York", country: "USA" } },
    { name: "Bob", address: { city: "London", country: "UK" } },
    { name: "Charlie", address: { city: "Tokyo", country: "Japan" } }
];
const cities = users.map(user => user.address.city);
console.log(cities);
// Output: ["New York", "London", "Tokyo"]
```

### Alternative Solutions:
```javascript
// Destructuring nested property
const cities = users.map(({ address: { city } }) => city);

// Bracket notation
const cities = users.map(user => user['address']['city']);
```

### Common Student Mistakes:
❌ `users.map(user => user.city)` - Wrong property path
❌ `users.map(user => address.city)` - Undefined variable
❌ `users.map(user => user.address)` - Returning whole address object
❌ Not understanding nested object access

---

## Task 9: Calculate Discounted Prices
**Difficulty:** Hard  
**Concepts:** Percentage calculations, formula application

### ✅ Correct Solution:
```javascript
const products = [
    { name: "Laptop", price: 1000, discount: 0.1 },
    { name: "Phone", price: 500, discount: 0.15 },
    { name: "Tablet", price: 300, discount: 0.2 }
];
const withDiscount = products.map(product => ({
    ...product,
    discountedPrice: product.price - (product.price * product.discount)
}));
console.log(withDiscount);
// Output: [
//   { name: "Laptop", price: 1000, discount: 0.1, discountedPrice: 900 },
//   { name: "Phone", price: 500, discount: 0.15, discountedPrice: 425 },
//   { name: "Tablet", price: 300, discount: 0.2, discountedPrice: 240 }
// ]
```

### Alternative Solutions:
```javascript
// Alternative formula
const withDiscount = products.map(product => ({
    ...product,
    discountedPrice: product.price * (1 - product.discount)
}));

// More explicit
const withDiscount = products.map(product => {
    const discountAmount = product.price * product.discount;
    const finalPrice = product.price - discountAmount;
    return {
        ...product,
        discountedPrice: finalPrice
    };
});
```

### Common Student Mistakes:
❌ `price - discount` - Forgetting to multiply
❌ `price * discount` - Only calculating discount amount
❌ `price + (price * discount)` - Adding instead of subtracting
❌ Wrong order of operations

---

## Task 10: Create Indexed Objects
**Difficulty:** Hard  
**Concepts:** Index parameter, object creation

### ✅ Correct Solution:
```javascript
const names = ["Alice", "Bob", "Charlie", "Diana"];
const withIds = names.map((name, index) => ({
    id: index + 1,
    name: name
}));
console.log(withIds);
// Output: [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
//   { id: 4, name: "Diana" }
// ]
```

### Alternative Solutions:
```javascript
// Shorthand property
const withIds = names.map((name, index) => ({
    id: index + 1,
    name
}));

// Without parentheses (less common)
const withIds = names.map((name, index) => {
    return {
        id: index + 1,
        name: name
    };
});
```

### Common Student Mistakes:
❌ `id: index` - Starting from 0 instead of 1
❌ Not using second parameter (index)
❌ `map(name => ...)` - Forgetting index parameter
❌ Wrong object syntax

---

## Grading Rubric

### Per Task Scoring (10 points each = 100 points total)

| Criteria | Points | Description |
|----------|--------|-------------|
| **Correct Output** | 5 | Produces exact expected result |
| **Proper map() Usage** | 3 | Uses map() correctly (not forEach, filter, etc.) |
| **Code Quality** | 2 | Clean, readable code with proper syntax |

### Overall Grade Scale

| Points | Grade | Performance |
|--------|-------|-------------|
| 90-100 | A | Excellent - Mastery of map() |
| 80-89 | B | Good - Solid understanding |
| 70-79 | C | Satisfactory - Basic understanding |
| 60-69 | D | Needs improvement |
| 0-59 | F | Does not meet requirements |

---

## Key Concepts Students Must Understand

### 1. Map Creates a New Array
```javascript
const original = [1, 2, 3];
const doubled = original.map(n => n * 2);

console.log(original);  // [1, 2, 3] - unchanged!
console.log(doubled);   // [2, 4, 6]
```

### 2. Map vs Filter vs ForEach
```javascript
const numbers = [1, 2, 3, 4, 5];

// map: transforms ALL items (same length)
const doubled = numbers.map(n => n * 2);  // [2, 4, 6, 8, 10]

// filter: returns SOME items (can be shorter)
const evens = numbers.filter(n => n % 2 === 0);  // [2, 4]

// forEach: does something with items (returns undefined)
numbers.forEach(n => console.log(n));  // undefined
```

### 3. Callback Must Return a Value
```javascript
// ✅ CORRECT - returns value
array.map(item => item * 2)

// ❌ WRONG - doesn't return
array.map(item => {
    item * 2;  // No return statement!
})

// ✅ CORRECT - explicit return
array.map(item => {
    return item * 2;
})
```

### 4. Map with Index and Array Parameters
```javascript
// Callback receives: (element, index, array)
const letters = ['a', 'b', 'c'];

// Add index to each element
const indexed = letters.map((letter, index) => 
    `${index}: ${letter}`
);
// ["0: a", "1: b", "2: c"]

// Access full array
const withTotal = letters.map((letter, index, array) => ({
    letter,
    index,
    total: array.length
}));
```

### 5. Object Literal Syntax in Arrow Functions
```javascript
// ❌ WRONG - JavaScript thinks {} is function body
const bad = array.map(item => { name: item })

// ✅ CORRECT - wrap in parentheses
const good = array.map(item => ({ name: item }))

// ✅ ALSO CORRECT - explicit return
const alsoGood = array.map(item => {
    return { name: item };
})
```

---

## Extension Challenges (Bonus)

### Bonus 1: Chaining Methods
```javascript
// Chain map with filter
const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(n => n % 2 === 0)  // Get evens: [2, 4]
    .map(n => n * n);           // Square them: [4, 16]
```

### Bonus 2: Complex Transformations
```javascript
// Convert array of arrays to objects
const data = [
    ['Alice', 25],
    ['Bob', 30],
    ['Charlie', 35]
];

const users = data.map(([name, age]) => ({ name, age }));
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ]
```

### Bonus 3: Conditional Mapping
```javascript
// Apply different transformations based on condition
const numbers = [1, 2, 3, 4, 5];

const transformed = numbers.map(n => 
    n % 2 === 0 ? n * 2 : n * 3
);
// Evens doubled, odds tripled
// [3, 4, 9, 8, 15]
```

---

## Teaching Discussion Questions

1. **"What's the difference between map() and forEach()?"**
   - map() returns a new array; forEach() returns undefined
   - Use map() when you want to transform data
   - Use forEach() when you just want side effects

2. **"Why does map() return a new array instead of modifying the original?"**
   - Immutability principle
   - Prevents accidental mutations
   - Easier to reason about code
   - Functional programming paradigm

3. **"When would you use map() instead of a for loop?"**
   - More concise and readable
   - Declarative (what) vs imperative (how)
   - Better for functional composition
   - Modern JavaScript best practice

4. **"Can map() change the type of elements?"**
   - Yes! Common use case
   - Example: numbers to strings, objects to numbers
   - That's the power of transformation

---

## Common Red Flags to Watch For

### Conceptual Issues:
- ⚠️ Student uses forEach() instead of map()
- ⚠️ Student modifies original array
- ⚠️ Student doesn't return a value from callback
- ⚠️ Student confuses map() with filter()

### Syntax Issues:
- ⚠️ Forgetting parentheses around object literals
- ⚠️ Not using arrow function syntax correctly
- ⚠️ Wrong callback parameter names
- ⚠️ Accessing wrong object properties

### Logic Issues:
- ⚠️ Wrong mathematical operations
- ⚠️ Incorrect nested property access
- ⚠️ Off-by-one errors with index
- ⚠️ Not spreading original object properties

---

## Quick Reference: map() Syntax

```javascript
// Basic syntax
array.map(callback(element[, index[, array]])[, thisArg])

// Most common usage
array.map(element => transformation)

// With all parameters
array.map((element, index, array) => {
    return transformation;
})

// Examples
[1,2,3].map(n => n * 2)                    // [2, 4, 6]
['a','b'].map(s => s.toUpperCase())        // ['A', 'B']
[{x:1}].map(obj => obj.x)                  // [1]
['a','b'].map((s, i) => `${i}: ${s}`)      // ['0: a', '1: b']
```

---

## Assessment Notes

### What Students Should Learn:
1. ✅ map() creates a new array
2. ✅ map() transforms each element
3. ✅ Always returns a value from callback
4. ✅ Can work with primitives and objects
5. ✅ Can access index and original array
6. ✅ Original array never modified

### Success Indicators:
- ✓ Completes 8+ tasks correctly
- ✓ Uses proper arrow function syntax
- ✓ Understands object spreading
- ✓ Can work with nested properties
- ✓ Applies correct transformations

---

**This quiz comprehensively tests map() understanding from basic transformations to complex object manipulations. Perfect for fullstack web development students!** 🎓
