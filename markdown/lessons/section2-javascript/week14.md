---
title: "Control Flow - Conditionals and Decision Making"
description: "Master if/else statements, switch cases, and ternary operators for dynamic program behavior"
week: 14
section: 2
prerequisites: ["JavaScript variables", "Data types", "Comparison operators"]
objectives:
  - "Implement conditional logic using if/else statements"
  - "Use switch statements for multiple condition scenarios"
  - "Apply ternary operators for concise conditional expressions"
  - "Combine logical operators for complex conditions"
  - "Handle user input and create interactive experiences"
---

# Week 14: Booleans and Numbers

## Learning Objectives

By the end of this week, students will be able to:

- Identify and work with Number data types
- Write conditional statements to control program flow
- Choose appropriate conditional structures for different scenarios
- Validate user input and provide appropriate feedback
- Combine multiple conditions using logical operators

## Day 1: Introduction to Numbers

### Mandatory Reading:

- [Working With Numbers and Arithmetic](http://localhost:8001/learn/javascript-v9/#lecture-working-with-numbers-and-arithmetic-operators)
- [Working With Arithmetic Operators](http://localhost:8001/learn/javascript-v9/lecture-working-with-numbers-and-arithmetic-operators/what-are-the-different-arithmetic-operators-in-javascript)
- [Working With Numbers and Strings](http://localhost:8001/learn/javascript-v9/lecture-working-with-numbers-and-arithmetic-operators/what-happens-when-you-try-to-do-calculations-with-numbers-and-strings)

### Optional Readings:

- [MDN - Numbers and Arithmetic (with Methods)](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math.html)
- [w3Schools - Numbers](http://localhost:22022/websites/w3schools.com/js/js_numbers.html)
- [w3Schools - Number Methods](http://localhost:22022/websites/w3schools.com/js/js_number_methods.html)
- [w3Schools - Number Properties](http://localhost:22022/websites/w3schools.com/js/js_number_properties.html)

### Assignment

- [Fixing Bugs with Numbers](http://localhost:8001/learn/javascript-v9/lab-debug-type-coercion-errors/debug-type-coercion-errors-in-a-buggy-app)

1. Go through all 16 steps of of this buggy app and resolve all issues.
1. When you are finished copy and paste the code into a new .js file in your quarter 2 labs directory.
1. Open that file in VSCode and add appropriate comments to show understanding of the code.
1. Submit this file to canvas under assignment 2.1.

### Day 2: Working With Operators

### Mandatory Reading:

- [Operator Precedence](http://localhost:8001/learn/javascript-v9/lecture-working-with-operator-behavior/how-does-operator-precedence-work)
- [How do Increment and Decrement Work](http://localhost:8001/learn/javascript-v9/lecture-working-with-operator-behavior/how-do-the-increment-and-decrement-operators-work)
- [What are Compound Assignment Operators](http://localhost:8001/learn/javascript-v9/lecture-working-with-operator-behavior/what-are-compound-assignment-operators-in-javascript-and-how-do-they-work)

### Optional Readings:

- [MDN - Numbers and Arithmetic (with Methods)](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math.html) - Note same link as day 1
- [w3Schools - Arithmetic](http://localhost:22022/websites/w3schools.com/js/js_arithmetic.html)
- [w3Schools - Assignment](http://localhost:22022/websites/w3schools.com/js/js_assignment.html)
- [w3Schools - Operators](http://localhost:22022/websites/w3schools.com/js/js_operators.html)

### Assignment

- [Debug Increment and Decrement Operator App](http://localhost:8001/learn/javascript-v9/lab-debug-increment-and-decrement-operator-errors/debug-increment-and-decrement-operator-errors-in-a-buggy-app)

1. Go through all 8 steps of of this buggy app and resolve all issues.
1. When you are finished copy and paste the code into a new .js file in your quarter 2 labs directory.
1. Open that file in VSCode and add appropriate comments to show understanding of the code.
1. Submit this file to canvas under assignment 2.2.

### Day 3: Comparison and Boolean Operators

****\*\*****WORKING HERE******\*\*******

### Mandatory Reading:

- [What are Booleans](http://localhost:8001/learn/javascript-v9/lecture-working-with-comparison-and-boolean-operators/what-are-booleans-and-how-do-they-work-with-equality-and-inequality-operators)
- [How do Increment and Decrement Work](http://localhost:8001/learn/javascript-v9/lecture-working-with-operator-behavior/how-do-the-increment-and-decrement-operators-work)
- [What are Compound Assignment Operators](http://localhost:8001/learn/javascript-v9/lecture-working-with-operator-behavior/what-are-compound-assignment-operators-in-javascript-and-how-do-they-work)

### Optional Readings:

- [MDN - Numbers and Arithmetic (with Methods)](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math.html) - Note same link as day 1
- [w3Schools - Arithmetic](http://localhost:22022/websites/w3schools.com/js/js_arithmetic.html)
- [w3Schools - Assignment](http://localhost:22022/websites/w3schools.com/js/js_assignment.html)
- [w3Schools - Operators](http://localhost:22022/websites/w3schools.com/js/js_operators.html)

### Assignment

- [Debug Increment and Decrement Operator App](http://localhost:8001/learn/javascript-v9/lab-debug-increment-and-decrement-operator-errors/debug-increment-and-decrement-operator-errors-in-a-buggy-app)

1. Go through all 8 steps of of this buggy app and resolve all issues.
1. When you are finished copy and paste the code into a new .js file in your quarter 2 labs directory.
1. Open that file in VSCode and add appropriate comments to show understanding of the code.
1. Submit this file to canvas under assignment 2.2.

### Day 4: Ternary Operators and Concise Conditionals

**Complexity: Intermediate**

**Morning Session: Ternary Operator Basics**

- Syntax: condition ? valueIfTrue : valueIfFalse
- When to use ternary vs if/else
- Chaining ternary operators

**Code Example:**

```javascript
// Basic ternary operator syntax
let age = 20;
let canVote = age >= 18 ? "Yes" : "No"; // Beginner: Short way to write if/else
console.log(`Can vote: ${canVote}`);

// Ternary vs if/else comparison
// Using if/else:
let temperature = 75;
let clothing;
if (temperature > 80) {
  clothing = "shorts";
} else {
  clothing = "pants";
}

// Same logic with ternary:
let clothing2 = temperature > 80 ? "shorts" : "pants"; // Much shorter!

// Ternary in template literals
let user = { name: "Alice", isLoggedIn: true };
let greeting = `Hello, ${user.isLoggedIn ? user.name : "Guest"}!`;

// Multiple ternary operators (chaining)
let score = 85;
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";

// Advanced: Ternary with function calls
function showWelcomeMessage() {
  return "Welcome to our site!";
}

function showLoginPrompt() {
  return "Please log in to continue.";
}

let isAuthenticated = false;
let message = isAuthenticated ? showWelcomeMessage() : showLoginPrompt();

// Ternary for setting CSS classes (preview of DOM manipulation)
let isActive = true;
let buttonClass = isActive ? "btn-active" : "btn-inactive";

// Complex example: Shopping cart logic
let items = 3;
let subtotal = 45.99;
let hasCoupon = true;

let shipping = items > 0 ? (subtotal > 50 ? 0 : 5.99) : 0;
let discount = hasCoupon ? subtotal * 0.1 : 0;
let total = subtotal + shipping - discount;

console.log(`Items: ${items}`);
console.log(`Subtotal: $${subtotal}`);
console.log(`Shipping: $${shipping}`);
console.log(`Discount: $${discount}`);
console.log(`Total: $${total.toFixed(2)}`);
```

**Activity:** Build a dynamic pricing calculator that applies different rules based on customer type, order size, and promotions.

**Evening Session: Readability and Best Practices**

- When ternary operators improve code
- When they make code harder to read
- Formatting complex ternary expressions

### Day 5: Interactive User Input and Validation

**Complexity: Intermediate to Advanced**

**Morning Session: Handling User Input**

- Getting input from HTML forms
- Using prompt() for simple input (development/testing)
- Validating and sanitizing user input

**Code Example:**

```javascript
// Simple input validation functions
function validateEmail(email) {
  // Beginner: Check if email contains @ symbol and has reasonable length
  if (email.includes("@") && email.length > 5) {
    return true;
  }
  return false;
}

function validatePassword(password) {
  // Check multiple password requirements
  if (password.length < 8) {
    return { valid: false, message: "Password must be at least 8 characters" };
  }
  if (!/[A-Z]/.test(password)) {
    // Advanced: Regular expression for uppercase
    return {
      valid: false,
      message: "Password must contain an uppercase letter",
    };
  }
  if (!/[0-9]/.test(password)) {
    // Advanced: Regular expression for numbers
    return { valid: false, message: "Password must contain a number" };
  }
  return { valid: true, message: "Password is strong" };
}

// User registration validation
function validateRegistration(userData) {
  let errors = [];

  // Name validation
  if (!userData.name || userData.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  }

  // Age validation
  if (userData.age < 13 || userData.age > 120) {
    errors.push("Age must be between 13 and 120");
  }

  // Email validation
  if (!validateEmail(userData.email)) {
    errors.push("Please enter a valid email address");
  }

  // Password validation
  let passwordCheck = validatePassword(userData.password);
  if (!passwordCheck.valid) {
    errors.push(passwordCheck.message);
  }

  // Return validation result
  if (errors.length === 0) {
    return { success: true, message: "Registration successful!" };
  } else {
    return { success: false, errors: errors };
  }
}

// Example usage
let newUser = {
  name: "John Doe",
  age: 25,
  email: "john@example.com",
  password: "SecurePass123",
};

let validationResult = validateRegistration(newUser);

if (validationResult.success) {
  console.log(validationResult.message);
} else {
  console.log("Registration failed:");
  validationResult.errors.forEach((error) => {
    console.log(`- ${error}`);
  });
}

// Advanced: Dynamic form validation
function createUserProfile(formData) {
  // Set defaults for optional fields
  let profile = {
    name: formData.name || "Anonymous",
    theme: formData.theme || "light",
    notifications:
      formData.notifications !== undefined ? formData.notifications : true,
    level: formData.experience || "beginner",
  };

  // Conditional profile setup based on user choices
  if (profile.level === "advanced") {
    profile.features = ["dark-mode", "advanced-tools", "beta-features"];
  } else if (profile.level === "intermediate") {
    profile.features = ["dark-mode", "intermediate-tools"];
  } else {
    profile.features = ["guided-tour", "help-tooltips"];
  }

  return profile;
}
```

**Activity:** Create a comprehensive user registration system with multiple validation rules and helpful error messages.

**Evening Session: Error Handling and User Experience**

- Providing helpful error messages
- Progressive validation
- Accessibility considerations

## Hands-on Exercises

### Exercise 1: Smart Home Control System

Create a control panel simulation that:

- Uses if/else statements for device status
- Implements switch statements for different room controls
- Includes safety checks and validation
- Provides user-friendly feedback

### Exercise 2: Grade Calculator with Multiple Conditions

Build a grade calculator that:

- Takes multiple assignment scores
- Applies different grading scales based on course type
- Handles extra credit and late penalties
- Uses ternary operators for concise logic

### Exercise 3: Interactive Quiz Application

Develop a quiz system featuring:

- Multiple question types (true/false, multiple choice)
- Complex scoring logic with conditionals
- User input validation
- Dynamic feedback based on performance

## Resources

**MDN Documentation:**

- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators)

**W3Schools References:**

- [JavaScript if else](https://www.w3schools.com/js/js_if_else.asp)
- [JavaScript switch](https://www.w3schools.com/js/js_switch.asp)
- [JavaScript comparisons](https://www.w3schools.com/js/js_comparisons.asp)

## Assignment Checklist

**Basic Requirements:**

- [ ] Implemented if/else statements correctly
- [ ] Used switch statements for appropriate scenarios
- [ ] Applied logical operators (&&, ||, !) in conditions
- [ ] Created ternary operators for simple conditionals
- [ ] Handled user input with basic validation

**Intermediate Challenges:**

- [ ] Combined multiple conditions effectively
- [ ] Chose appropriate conditional structures for different problems
- [ ] Implemented comprehensive input validation
- [ ] Used nested conditionals appropriately
- [ ] Created helpful error messages

**Advanced Extensions:**

- [ ] Implemented complex validation logic
- [ ] Used short-circuit evaluation effectively
- [ ] Created reusable validation functions
- [ ] Handled edge cases and error scenarios
- [ ] Optimized conditional logic for performance

---
