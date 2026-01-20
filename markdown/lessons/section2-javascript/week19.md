---
publishDate: 01-20-2026
title: "Callback Functions"
description: "Learn how to create callback functions, use .map, .filter, and other array/object methods."
week: 19
section: 2
---

# Week 19: Higher Order Functions and Callbacks

## Learning Objectives

By the end of this week, students will be able to:

- Create and run higher order functions and callbacks
- Learn how to filter, map, and reduce arrays
- Chain methods

## Day 1: Higher Order Functions and Callbacks

Now that you've learned the basic building blocks of JavaScript, we’re going to build on your knowledge with a focus on data manipulation. This week, we’ll explore powerful built-in array methods: `.map()`, `.filter()`, `.every()`, and `.some()`. These methods allow you to process arrays without relying heavily on conditional statements or creating individual variables. You’ll learn how to use them to transform data and check for specific conditions within your arrays. Get ready to unlock some really interesting coding possibilities!

### Mandatory Reading:

- [What Is a Callback Function, and How Does It Work with the forEach Method?](http://localhost:8001/learn/javascript-v9/lecture-working-with-higher-order-functions-and-callbacks/what-is-a-callback-function-and-how-does-it-work-with-the-foreach-method)
- [What Are Higher-Order Functions?](http://localhost:8001/learn/javascript-v9/lecture-working-with-higher-order-functions-and-callbacks/what-are-higher-order-functions)
- [What Is the Map Method, and How Does It Work?](http://localhost:8001/learn/javascript-v9/lecture-working-with-higher-order-functions-and-callbacks/what-is-the-map-method-and-how-does-it-work)
- [What Is the Filter Method, and How Does It Work?](http://localhost:8001/learn/javascript-v9/lecture-working-with-higher-order-functions-and-callbacks/what-is-the-filter-method-and-how-does-it-work)
- [What Is the Reduce Method, and How Does It Work?](http://localhost:8001/learn/javascript-v9/lecture-working-with-higher-order-functions-and-callbacks/what-is-the-reduce-method-and-how-does-it-work)
- [What Is Method Chaining, and How Does It Work?](http://localhost:8001/learn/javascript-v9/lecture-working-with-higher-order-functions-and-callbacks/what-is-method-chaining-and-how-does-it-work)
- [How Do the every() and some() Methods Work?](http://localhost:8001/learn/javascript-v9/lecture-working-with-higher-order-functions-and-callbacks/how-do-the-every-and-some-methods-work)

### Optional Readings:

- [MDN - Array Methods](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array.html) - Pay close attention to Map, Filter, Sort, Every, and Some.
- [w3Schools - JSON](http://localhost:22022/websites/w3schools.com/js/js_json.html)
- [w3Schools - Array Methods](http://localhost:22022/websites/w3schools.com/jsref/jsref_obj_array.html)

### Lab 19.1

- [Build a Book Organizer](http://localhost:8001/learn/javascript-v9/lab-book-organizer/build-a-book-organizer)

1. Go through all 9 steps to Build a Book Organizer.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 19.1.A.

AND

- [Implement a Sorted Index Finder](http://localhost:8001/learn/javascript-v9/lab-sorted-index-finder/lab-sorted-index-finder)

1. Go through all 12 steps to Implement a Sorted Index Finder.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 19.1.B.

AND

- [Build a Symmetric Difference Function](http://localhost:8001/learn/javascript-v9/lab-symmetric-difference/lab-symmetric-difference)

1. Go through all 8 steps to Build a Symmetric Difference Function.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 19.1.C.

## Day 2: More Higher Functions

### Mandatory Reading:

Same as Day 1.

### Optional Readings:

Same as Day 1.

### Lab 19.2

- [Implement a Value Remover Function](http://localhost:8001/learn/javascript-v9/lab-value-remover-function/implement-a-value-remover-function)

1. Go through all 7 steps to Implement a Value Remover Function.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 19.2.A.

And

- [Implement a Matching Object Filter](http://localhost:8001/learn/javascript-v9/lab-matching-object-filter/implement-a-matching-object-filter)

1. Go through all 8 steps to Implement a Matching Object Filter..
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 19.2.B.

And

- [Build a Prime Number Sum Calculator](http://localhost:8001/learn/javascript-v9/lab-prime-number-sum-calculator/build-a-prime-number-sum-calculator)

1. Go through all 8 steps to Build a Prime Number Sum Calculator.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 19.2.C.

### Day 3: Even more Higher Function

### Mandatory Reading:

Same as Day 1.

### Lab 19.3

- [Implement a Range-Based LCM Calculator](http://localhost:8001/learn/javascript-v9/lab-range-based-lcm-calculator/implement-a-range-based-lcm-calculator)

1. Go through all 7 steps to Implement a Range-Based LCM Calculator.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 19.3.A

AND

- [Create a Deep Flattening Tool](http://localhost:8001/learn/javascript-v9/lab-deep-flattening-tool/create-a-deep-flattening-tool)

1. Go through all 7 steps to Create a Deep Flattening Tool.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 19.3.B

AND

- [Build an All-True Property Validator](http://localhost:8001/learn/javascript-v9/lab-all-true-property-validator/build-an-all-true-property-validator)

1. Go through all 10 steps to Build an All-True Property Validator.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 19.3.C

## Day 4: Higher Functions Quiz

### Mandatory Readings:

[JavaScript Higher Order Functions Review](http://localhost:8001/learn/javascript-v9/review-javascript-higher-order-functions/review-javascript-higher-order-functions)

### Quiz:

- Log into Canvas and navigate to this section's class page
- Click on Quizzes
  - Take the Week 19: Higher Functions

## Assignment 19: Using Methods

For this assignment you will need to complete several requirements.

**Instructions:**

1. Create a new .js file in your section 2 Assignment folder.
1. Open that file in VSCode.
1. Create pseudocode for your application before you start coding.
1. Add Code to meet the criteria below.
1. Don't forget to properly comment your code/file.
1. Submit the file to assignment 19.

```js
// Use these variables to solve all problems in this assignment
const people = [
  { name: "John", age: 30 },
  { name: "Marry", age: 15 },
  { name: "Alice", age: 57 },
  { name: "Bobbi", age: 5 },
  { name: "Charlie", age: 35 },
  { name: "Nick", age: 87 },
  { name: "Jolene", age: 55 },
];
```

1. **`map` (5 Points):** create a new array containing only the names of the people in the `people` array. Print the result to the console log.

1. **`filter` (5 Points):** Using the same `people` array as above, create a new array containing only the people who are older than 55. Print the result to the console log.

1. **`reduce` (5 Points):** Using the `people` array from above, calculate the total age of all the people in the array. Print the result to the console log.

1. **`every()` (5 Points):** Using the `people` array above, check if every one is above the age of 18. Print the result to the console log.

1. **`some()` (5 Points):** Using the `people` array above, check if anyone is above the age of 55. Print the result to the console log.

1. **Understanding Chaining Methods (10 points):**

Add code to the above example, so that after chaining multiple methods obj.value is equal to 19. I.E. obj.increment() will print out 6, obj.increment().double() will print out 12.

**MUST USE ALL 3 METHODS AT LEAST ONCE**

```js
let obj = {
  value: 5,
  increment: function () {
    this.value++;
    return this;
  },
  decrement: function () {
    this.value--;
    return this;
  },
  double: function () {
    this.value *= 2;
    return this;
  },
};

//ADD CODE HERE

console.log(obj.value);
```

1. **Creating Chaining Methods (15 points):** Using the `people` array from above and any method(s) necessary to return an array of people's names converted to uppercase over the age of 18 in alphabetical order. I.E. result should be `["ALICE", "CHARLIE", "JOHN", "JOLENE", "NICK"]`

1. **Fix Method Chaining (50 points, 10 each)**

These code blocks contain buggy logic. Fix the logic so that the expected outcome is achieved.

```javascript
// Intended: Converts an array of numbers to an array of their square roots with a precision of 2..

// Expected: [ 1, 1.41, 1.73, 2, 2.24 ]
// Actual: [ 1, 2, 3, 4, 5 ]
console.log(
  [1, 2, 3, 4, 5].filter((num) => parseInt(Math.sqrt(num).toPrecision(2)))
);
```

```javascript
// Intended: Filters an array of strings to keep only those that start with the letter 'A'.

// Expected: ['Apple', 'Apricot']
//  Actual: [ true, true, true ]
console.log(["Apple", "Banana", "Apricot"].map((str) => str.includes("A")));
```

```javascript
// Intended: Calculates the sum of all numbers in an array.

// Expected: 10
// Actual: 4
console.log([1, 2, 3, 4].reduce((currentValue) => currentValue));
```

```javascript
// Intended: Checks if any number in an array is even.

// Expected: true.
// Actual: false
console.log([3, 4, 5, 6].every((num) => num / 2 === 0));
```

```javascript
// Intended: Checks if all numbers in an array are positive.

// Expected: true
// Actual: false
console.log([1, 2, 3].some((num) => num < 0));
```
