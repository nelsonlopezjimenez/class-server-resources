# JavaScript Filter() Quiz - Teacher's Answer Key

## Overview
This quiz tests students' understanding of the `Array.filter()` method in JavaScript, progressing from simple array filtering to complex object filtering with nested properties.

---

## Task 1: Filter Even Numbers
**Difficulty:** Easy  
**Concepts:** Basic filter, modulo operator, arrow functions

### ✅ Correct Solution:
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4, 6, 8, 10]
```

### Alternative Solutions:
```javascript
// Using function keyword
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

// More explicit
const evenNumbers = numbers.filter(num => {
    return num % 2 === 0;
});

// Using named function
function isEven(num) {
    return num % 2 === 0;
}
const evenNumbers = numbers.filter(isEven);
```

### Common Student Mistakes:
❌ `numbers.filter(num % 2 === 0)` - Forgetting the arrow function
❌ `numbers.filter(num => num % 2)` - Checking for odd instead of even
❌ `numbers.filter(num => num / 2 === 0)` - Using division instead of modulo

### What to Look For (Grading):
- ✅ Uses `.filter()` method correctly
- ✅ Checks if number is even using `% 2 === 0`
- ✅ Returns correct array: [2, 4, 6, 8, 10]
- ✅ Uses arrow function or regular function properly

---

## Task 2: Filter Strings by Length
**Difficulty:** Easy  
**Concepts:** String properties, comparison operators

### ✅ Correct Solution:
```javascript
const words = ["apple", "banana", "cat", "dog", "elephant", "fish", "giraffe"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords);
// Output: ["banana", "elephant", "giraffe"]
```

### Alternative Solutions:
```javascript
// With explicit return
const longWords = words.filter(word => {
    return word.length > 5;
});

// Using function keyword
const longWords = words.filter(function(word) {
    return word.length > 5;
});
```

### Common Student Mistakes:
❌ `words.filter(word.length > 5)` - Not using callback function
❌ `words.filter(word => word.length >= 5)` - Using >= instead of >
❌ `words.filter(word => word > 5)` - Comparing string to number
❌ `words.filter(word => length > 5)` - Forgetting to access property on word

### What to Look For (Grading):
- ✅ Accesses `.length` property correctly
- ✅ Uses `> 5` (not >= 5)
- ✅ Returns correct array: ["banana", "elephant", "giraffe"]
- ✅ Proper callback function syntax

---

## Task 3: Filter Students by Grade
**Difficulty:** Medium  
**Concepts:** Object property access, filtering objects

### ✅ Correct Solution:
```javascript
const students = [
    { name: "Alice", grade: 92 },
    { name: "Bob", grade: 78 },
    { name: "Charlie", grade: 85 },
    { name: "Diana", grade: 95 },
    { name: "Eve", grade: 72 }
];

const topStudents = students.filter(student => student.grade >= 85);
console.log(topStudents);
// Output: [
//   { name: "Alice", grade: 92 },
//   { name: "Charlie", grade: 85 },
//   { name: "Diana", grade: 95 }
// ]
```

### Alternative Solutions:
```javascript
// With destructuring
const topStudents = students.filter(({ grade }) => grade >= 85);

// More explicit
const topStudents = students.filter(student => {
    return student.grade >= 85;
});
```

### Common Student Mistakes:
❌ `students.filter(grade >= 85)` - Not accessing object property
❌ `students.filter(student => grade >= 85)` - Referencing grade without student.
❌ `students.filter(student => student.grade > 85)` - Using > instead of >=
❌ `students.filter(student => student["grade"] > 85)` - Works but bracket notation is less common

### What to Look For (Grading):
- ✅ Accesses object property using dot notation (student.grade)
- ✅ Uses correct comparison (>= 85)
- ✅ Returns array of objects (not just names)
- ✅ Includes Charlie (grade 85) in results

---

## Task 4: Filter Products by Multiple Conditions
**Difficulty:** Medium  
**Concepts:** Multiple conditions, logical AND operator

### ✅ Correct Solution:
```javascript
const products = [
    { name: "Laptop", price: 999, inStock: true },
    { name: "Mouse", price: 25, inStock: true },
    { name: "Keyboard", price: 45, inStock: false },
    { name: "Monitor", price: 200, inStock: true },
    { name: "USB Cable", price: 10, inStock: true },
    { name: "Headphones", price: 60, inStock: true }
];

const affordableInStock = products.filter(product => product.inStock && product.price < 50);
console.log(affordableInStock);
// Output: [
//   { name: "Mouse", price: 25, inStock: true },
//   { name: "USB Cable", price: 10, inStock: true }
// ]
```

### Alternative Solutions:
```javascript
// Condition order reversed (still correct)
const affordableInStock = products.filter(product => product.price < 50 && product.inStock);

// More explicit with parentheses
const affordableInStock = products.filter(product => (product.inStock) && (product.price < 50));

// Multi-line
const affordableInStock = products.filter(product => {
    return product.inStock && product.price < 50;
});

// With intermediate variable
const affordableInStock = products.filter(product => {
    const isInStock = product.inStock;
    const isAffordable = product.price < 50;
    return isInStock && isAffordable;
});
```

### Common Student Mistakes:
❌ `products.filter(product => product.inStock || product.price < 50)` - Using OR instead of AND
❌ `products.filter(product => product.inStock && product.price <= 50)` - Using <= instead of <
❌ `products.filter(product => product.inStock, product.price < 50)` - Using comma instead of &&
❌ Only checking one condition

### What to Look For (Grading):
- ✅ Uses && (AND operator) correctly
- ✅ Checks both conditions (inStock and price)
- ✅ Excludes Keyboard (not in stock)
- ✅ Excludes Headphones (price >= 50)
- ✅ Returns exactly 2 products: Mouse and USB Cable

---

## Task 5: Filter Nested Object Properties
**Difficulty:** Hard  
**Concepts:** Nested object access, multiple conditions with nested properties

### ✅ Correct Solution:
```javascript
const users = [
    { name: "John", age: 25, address: { city: "New York", country: "USA" } },
    { name: "Maria", age: 17, address: { city: "Miami", country: "USA" } },
    { name: "Chen", age: 30, address: { city: "Beijing", country: "China" } },
    { name: "Sarah", age: 22, address: { city: "Los Angeles", country: "USA" } },
    { name: "Ahmed", age: 19, address: { city: "Dubai", country: "UAE" } }
];

const adultUSUsers = users.filter(user => user.age >= 18 && user.address.country === "USA");
console.log(adultUSUsers);
// Output: [
//   { name: "John", age: 25, address: { city: "New York", country: "USA" } },
//   { name: "Sarah", age: 22, address: { city: "Los Angeles", country: "USA" } }
// ]
```

### Alternative Solutions:
```javascript
// With destructuring
const adultUSUsers = users.filter(({ age, address }) => {
    return age >= 18 && address.country === "USA";
});

// More explicit
const adultUSUsers = users.filter(user => {
    const isAdult = user.age >= 18;
    const isUSA = user.address.country === "USA";
    return isAdult && isUSA;
});

// Condition order reversed
const adultUSUsers = users.filter(user => user.address.country === "USA" && user.age >= 18);
```

### Common Student Mistakes:
❌ `users.filter(user => user.age >= 18 && user.country === "USA")` - Wrong property path
❌ `users.filter(user => user.age >= 18 || user.address.country === "USA")` - Using OR instead of AND
❌ `users.filter(user => user.address.country = "USA")` - Using assignment (=) instead of comparison (===)
❌ `users.filter(user => user.age > 18 && user.address.country === "USA")` - Using > instead of >=
❌ Forgetting to check both conditions

### What to Look For (Grading):
- ✅ Correctly accesses nested property (user.address.country)
- ✅ Uses === for string comparison
- ✅ Checks age >= 18 (not just > 18)
- ✅ Uses && (AND) operator
- ✅ Excludes Maria (age 17)
- ✅ Excludes Chen and Ahmed (not USA)
- ✅ Returns exactly 2 users: John and Sarah

---

## Grading Rubric

### Per Task Scoring (20 points each = 100 points total)

| Criteria | Points | Description |
|----------|--------|-------------|
| **Correct Output** | 10 | Produces the exact expected result |
| **Proper filter() Usage** | 5 | Uses filter() method correctly |
| **Code Quality** | 3 | Clean, readable code with proper syntax |
| **Understanding** | 2 | Shows understanding of concept (not just trial/error) |

### Overall Grade Scale

| Points | Grade | Performance |
|--------|-------|-------------|
| 90-100 | A | Excellent - Mastery of filter() |
| 80-89 | B | Good - Solid understanding |
| 70-79 | C | Satisfactory - Basic understanding |
| 60-69 | D | Needs improvement |
| 0-59 | F | Does not meet requirements |

---

## Extension Challenges (Bonus)

For advanced students who complete all 5 tasks:

### Bonus 1: Chaining Methods
```javascript
// Filter AND map together
const students = [
    { name: "Alice", grade: 92 },
    { name: "Bob", grade: 78 },
    { name: "Charlie", grade: 85 }
];

// Get names of students with grade >= 85
const topStudentNames = students
    .filter(student => student.grade >= 85)
    .map(student => student.name);
// Output: ["Alice", "Charlie"]
```

### Bonus 2: Filter with External Function
```javascript
// Reusable filter functions
const isEven = num => num % 2 === 0;
const isOdd = num => num % 2 !== 0;
const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.filter(isPrime)); // [2, 3, 5, 7]
```

### Bonus 3: Complex Object Filtering
```javascript
// Filter orders by status and total
const orders = [
    { id: 1, items: [{price: 10}, {price: 20}], status: "shipped" },
    { id: 2, items: [{price: 100}], status: "pending" },
    { id: 3, items: [{price: 5}, {price: 15}], status: "shipped" }
];

const shippedOverTwenty = orders.filter(order => {
    const total = order.items.reduce((sum, item) => sum + item.price, 0);
    return order.status === "shipped" && total > 20;
});
```

---

## Common Teaching Points

### 1. Filter Returns a New Array
```javascript
const original = [1, 2, 3, 4, 5];
const filtered = original.filter(num => num > 3);

console.log(original);  // [1, 2, 3, 4, 5] - unchanged!
console.log(filtered);  // [4, 5]
```

### 2. Filter vs Map vs Reduce
```javascript
const numbers = [1, 2, 3, 4, 5];

// filter: returns some items (same type)
const evens = numbers.filter(n => n % 2 === 0);  // [2, 4]

// map: transforms all items
const doubled = numbers.map(n => n * 2);  // [2, 4, 6, 8, 10]

// reduce: combines into single value
const sum = numbers.reduce((acc, n) => acc + n, 0);  // 15
```

### 3. Callback Function Must Return Boolean
```javascript
// ✅ CORRECT - returns true/false
array.filter(item => item > 5)

// ❌ WRONG - doesn't return boolean
array.filter(item => {
    item > 5;  // No return statement!
})

// ✅ CORRECT - explicit return
array.filter(item => {
    return item > 5;
})
```

### 4. Filter with Index and Array Parameters
```javascript
// callback receives: (element, index, array)
const numbers = [1, 2, 3, 4, 5];

// Filter elements at even indices
const atEvenIndex = numbers.filter((num, index) => index % 2 === 0);
// [1, 3, 5]

// Filter elements less than their index
const lessThanIndex = numbers.filter((num, index) => num < index);
// [1, 2]
```

---

## Assessment Notes

### What Students Should Learn:
1. ✅ `filter()` creates a new array
2. ✅ Callback function returns true/false
3. ✅ Can filter arrays of primitives and objects
4. ✅ Can use multiple conditions with && and ||
5. ✅ Can access nested object properties
6. ✅ Original array is never modified

### Red Flags (Check for Understanding):
- ⚠️ Student modifies original array
- ⚠️ Student uses filter() but doesn't return boolean
- ⚠️ Student confuses filter() with map()
- ⚠️ Student uses == instead of ===
- ⚠️ Student doesn't understand callback functions

### Discussion Questions:
1. "When would you use filter() vs map()?"
2. "Why does filter() return a new array instead of modifying the original?"
3. "Can you filter an array to return nothing? What happens?"
4. "How would you filter items that DON'T match a condition?"

---

## Quick Reference: filter() Syntax

```javascript
// Basic syntax
array.filter(callback(element[, index[, array]])[, thisArg])

// Most common usage
array.filter(element => condition)

// With all parameters
array.filter((element, index, array) => {
    return condition;
})

// Examples
[1,2,3,4,5].filter(n => n > 3)           // [4, 5]
['a','bb','ccc'].filter(s => s.length > 1)  // ['bb', 'ccc']
[{x:1},{x:2}].filter(obj => obj.x === 2)  // [{x:2}]
```

---

**This quiz comprehensively tests filter() understanding from basics to advanced nested object filtering. Perfect for a fullstack web development course!** 🎓
