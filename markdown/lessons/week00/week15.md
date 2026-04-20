# Week 3 — April 20
## CIS 242 JavaScript — Introduction to Functions, Events & Debugging

---

## Overview

This week introduces one of the most important building blocks of JavaScript:
**functions**. By the end of the week students will be able to define and call
functions, understand how methods relate to functions, recognize different
function types, wire up user events, and use browser tools to find and fix bugs.

**Daily schedule:** 3 hours × 4 days  
**Assumed background:** variables, data types, basic operators, conditionals, loops

---

---

# Day 1 — Defining and Calling Functions

## Hour 1 — What Is a Function and Why Does It Matter?

### The Big Idea

Before functions, every program was a single long list of instructions executed
top to bottom. Functions let you **name a block of code** and run it whenever
you need it — from anywhere.

> **Metaphor for beginners:** a function is a recipe. You write the recipe once.
> Every time you want the dish, you call the recipe by name. You don't rewrite
> the instructions each time.

> **For advanced students:** a function is a first-class value in JavaScript —
> it can be stored in a variable, passed as an argument, or returned from another
> function. This makes functions the foundation of nearly every pattern in the
> language.

---

### Anatomy of a Function Declaration

```js
// KEYWORD  NAME        PARAMETERS
function    greet       (name) {
  // BODY — code that runs when the function is called
  alert("Hello, " + name + "!");
}
// calling the function
greet("Ana");   // → Hello, Ana!
greet("Leo");   // → Hello, Leo!
```

**Breaking it down:**

| Part | What it is |
|---|---|
| `function` | keyword that tells JS we are defining a function |
| `greet` | the name — use it to call the function later |
| `(name)` | parameter — a placeholder for the value passed in |
| `{ ... }` | the body — runs every time the function is called |
| `greet("Ana")` | calling the function with the argument "Ana" |

**Parameter vs Argument:**
- **Parameter** — the variable name in the definition: `name`
- **Argument** — the actual value passed in the call: `"Ana"`

---

### Your First Function — Live Demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Day 1 Demo</title>
</head>
<body>
  <h3>CIS 242 — Functions</h3>
  <div id="output"></div>

  <script>
    // --- DEFINE ---
    // This function takes a name and writes a greeting to the page.
    // Note: nothing happens yet — we are just writing the recipe.
    function greet(name) {
      document.getElementById("output").innerHTML += "<p>Hello, " + name + "!</p>";
    }

    // --- CALL ---
    // Now the function runs — once for each name.
    greet("Ana");
    greet("Leo");
    greet("Nelson");
  </script>
</body>
</html>
```

> **Common beginner mistake:** defining a function and wondering why nothing
> happens. A function definition is a promise — it does nothing until called.

---

### No Parameters, No Return Value — Simplest Form

```js
// function with no parameters — does the same thing every time
function sayHello() {
  alert("Hello, World!");
}

sayHello(); // call it
sayHello(); // call it again — same result
```

This is the simplest possible function. Good starting point.

---

### Multiple Parameters

```js
function add(a, b) {
  alert(a + b);
}

add(3, 4);    // → 7
add(10, 20);  // → 30
```

> **For advanced students:** JS does not enforce the number of arguments.
> Calling `add(3)` is legal — `b` is `undefined`, and `3 + undefined = NaN`.
> This is why input validation matters.

---

## Hour 2 — Return Values

### Functions That Give Something Back

So far functions have *done* things (alerted, written to the page). A function
can also *produce* a value and hand it back to whoever called it.

```js
// WITHOUT return — does something, gives nothing back
function showDouble(n) {
  alert(n * 2);
}

// WITH return — produces a value, caller decides what to do with it
function double(n) {
  return n * 2;  // sends the result back
}

// now the caller can use the result
let result = double(5);  // result = 10
alert(result);           // → 10
alert(double(7));        // → 14  (use directly without storing)
```

> **Metaphor:** a function without `return` is a vending machine that dispenses
> the snack directly. A function with `return` puts the snack on a tray and
> hands it to you — you decide what to do with it.

---

### Return Stops the Function

```js
function checkAge(age) {
  if (age < 0) {
    return; // exit early — no value returned, just stops
  }
  if (age >= 18) {
    return "adult";
  }
  return "minor";
}

alert(checkAge(25));   // → adult
alert(checkAge(10));   // → minor
alert(checkAge(-1));   // → undefined (empty return)
```

> **Key insight:** once `return` is hit, the rest of the function body does not
> run. Use early returns to handle edge cases before the main logic.

---

### Practical Example — Grade Calculator

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Grade Calculator</title>
</head>
<body>
  <h3>Grade Calculator</h3>
  <label for="score">Enter score (0-100):</label>
  <input type="number" id="score" min="0" max="100">
  <button type="button" id="checkBtn">Get Grade</button>
  <p id="result"></p>

  <script>
    // This function RETURNS a letter grade — it doesn't display anything.
    // Keeping display logic separate from calculation logic is good practice.
    function getLetterGrade(score) {
      if (score >= 90) return "A";
      if (score >= 80) return "B";
      if (score >= 70) return "C";
      if (score >= 60) return "D";
      return "F";
    }

    function checkGrade() {
      const score = parseFloat(document.getElementById("score").value);

      if (isNaN(score)) {
        document.getElementById("result").textContent = "Please enter a number.";
        return;
      }

      // call the function and use the returned value
      const grade = getLetterGrade(score);
      document.getElementById("result").textContent = "Your grade is: " + grade;
    }

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById("checkBtn").addEventListener('click', checkGrade);
    });
  </script>
</body>
</html>
```

---

## Hour 3 — Scope: Where Variables Live

### Local vs Global

```js
let name = "global";  // global — visible everywhere

function showName() {
  let name = "local";  // local — only visible inside this function
  alert(name);         // → "local"
}

showName();
alert(name);  // → "global" — the local one didn't change this
```

> **Beginner analogy:** global variables are on a whiteboard everyone can see.
> Local variables are on a sticky note inside one person's notebook — no one
> else can read or change them.

---

### Why Local Scope Matters

```js
// BAD — using globals inside functions creates hidden dependencies
let total = 0;

function addTax() {
  total = total * 1.1;  // modifies a global — risky if called twice
}

// BETTER — function takes what it needs, returns the result
function addTax(amount) {
  return amount * 1.1;  // pure — same input always gives same output
}

let price    = 100;
let withTax  = addTax(price);  // price unchanged, withTax = 110
```

> **For advanced students:** functions that only depend on their parameters and
> don't modify external state are called **pure functions**. They are easier to
> test, debug, and reuse. Aim for pure functions whenever possible.

---

### Day 1 Lab Exercise

**Starter task (beginner):** write a function `multiply(a, b)` that returns
`a * b`. Call it with three different pairs of numbers and display the results.

**Extended task (intermediate):** write a function `celsiusToFahrenheit(c)` that
returns the converted temperature. Display the conversion for 0°C, 100°C,
and -40°C.

**Challenge (advanced):** write a function `isLeapYear(year)` that returns
`true` or `false`. A year is a leap year if divisible by 4, except century
years must also be divisible by 400.

---

---

# Day 2 — Methods, Function Types, and Events

## Hour 1 — Methods Are Functions

### Functions Attached to Objects

A **method** is simply a function that belongs to an object. You have been
using methods since lesson 1 without necessarily calling them that.

```js
// these are all METHOD CALLS — functions attached to objects
"hello".toUpperCase()       // String method
Math.round(3.7)             // Math object method
document.getElementById()   // document object method
console.log("hi")           // console object method
```

The pattern is always: `object.methodName(arguments)`

---

### Defining Your Own Methods

```js
// object with a method
const calculator = {
  brand: "CIS242",

  // method — a function as a property value
  add(a, b) {
    return a + b;
  },

  multiply(a, b) {
    return a * b;
  }
};

alert(calculator.add(3, 4));       // → 7
alert(calculator.multiply(3, 4));  // → 12
alert(calculator.brand);           // → "CIS242"
```

---

### `this` Inside a Method

Inside a method, `this` refers to the object the method belongs to.

```js
const car = {
  make:  "Toyota",
  model: "Camry",
  year:  2022,

  describe() {
    // 'this' = the car object
    return this.year + " " + this.make + " " + this.model;
  }
};

alert(car.describe());  // → "2022 Toyota Camry"
```

> **For advanced students:** `this` is one of the trickiest concepts in JS
> because its value depends on HOW a function is called, not where it is
> defined. Arrow functions do not have their own `this` — they inherit it from
> the surrounding scope.

---

## Hour 2 — Types of Functions

JavaScript has several ways to define functions. All produce a function, but
they differ in syntax, behavior, and use cases.

### 1 — Function Declaration

```js
// hoisted — can be called BEFORE the definition in the file
greet("Ana");  // works even though greet is defined below

function greet(name) {
  alert("Hello, " + name);
}
```

> **Hoisting:** function declarations are moved to the top of their scope
> before execution. The engine sees them before running any code.

---

### 2 — Function Expression

```js
// NOT hoisted — must be defined before calling
const greet = function(name) {
  alert("Hello, " + name);
};

greet("Ana");  // works — defined above
```

The function has no name of its own — it is stored in the variable `greet`.
This is called an **anonymous function expression**.

---

### 3 — Arrow Function

```js
// compact syntax — great for short functions
const double = (n) => n * 2;

// same as:
const double = function(n) { return n * 2; };

// multiple lines need braces and explicit return
const addTax = (amount, rate) => {
  const tax = amount * rate;
  return amount + tax;
};
```

**When to use arrows:**
- Short one-liner functions
- Callbacks inside `.map()`, `.filter()`, `.forEach()`
- When you want to inherit `this` from the surrounding scope

---

### 4 — Named Function Expression

```js
// useful for recursion and stack traces
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);  // can call itself by name inside
};

alert(factorial(5));  // → 120
```

---

### Side-by-Side Comparison

```js
// All four do the same thing — add two numbers

// 1. Declaration
function add1(a, b) { return a + b; }

// 2. Expression
const add2 = function(a, b) { return a + b; };

// 3. Arrow
const add3 = (a, b) => a + b;

// 4. Named expression
const add4 = function add(a, b) { return a + b; };

alert(add1(2, 3));  // 5
alert(add2(2, 3));  // 5
alert(add3(2, 3));  // 5
alert(add4(2, 3));  // 5
```

> **Pedagogy note:** students often ask "which one should I use?" The answer
> depends on context. Teach declarations and expressions first. Introduce
> arrows when covering callbacks and array methods. Named expressions are
> advanced — introduce last.

---

## Hour 3 — User Events and Event Handlers

### What Is an Event?

An **event** is something that happens in the browser:
- User clicks a button
- User types in a field
- Page finishes loading
- Mouse moves over an element

JavaScript can **listen** for events and run a function when they occur.

---

### Three Ways to Handle Events

```html
<!-- WAY 1: HTML attribute — avoid in production -->
<button onclick="sayHi()">Click</button>

<!-- WAY 2: DOM property — one handler only -->
<button id="btn1">Click</button>
<script>
  document.getElementById("btn1").onclick = sayHi;
</script>

<!-- WAY 3: addEventListener — preferred -->
<button id="btn2">Click</button>
<script>
  document.getElementById("btn2").addEventListener('click', sayHi);
</script>
```

> **For beginners:** Way 1 is the easiest to read and fine for demos. Way 3
> is what you will use in real projects.

> **For advanced students:** `addEventListener` allows multiple handlers on one
> element, supports removal with `removeEventListener`, and gives access to the
> event object via the callback parameter.

---

### Common Events Reference

| Event | Fires when |
|---|---|
| `click` | element is clicked |
| `dblclick` | element is double-clicked |
| `change` | form field value changes (and loses focus) |
| `input` | field value changes (immediately, every keystroke) |
| `submit` | form is submitted |
| `keydown` | key is pressed |
| `keyup` | key is released |
| `mouseover` | mouse enters element |
| `mouseout` | mouse leaves element |
| `focus` | element gains focus |
| `blur` | element loses focus |
| `load` | page/image finishes loading |
| `DOMContentLoaded` | HTML parsed, DOM ready (before images load) |

---

### The Event Object

Every event handler receives an **event object** automatically — it contains
information about what happened.

```js
document.getElementById("myBtn").addEventListener('click', function(event) {
  // event.target = the element that was clicked
  alert("You clicked: " + event.target.id);

  // event.type = what kind of event
  alert("Event type: " + event.type);
});

// with arrow function
document.getElementById("myBtn").addEventListener('click', (e) => {
  alert("Clicked: " + e.target.textContent);
});
```

---

### Full Event Demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Events Demo</title>
</head>
<body>
  <h3>CIS 242 — Events</h3>

  <input type="text" id="nameInput" placeholder="Type your name">
  <button type="button" id="greetBtn">Greet</button>
  <button type="button" id="clearBtn">Clear</button>
  <p id="output"></p>

  <script>
    function greet() {
      const name = document.getElementById("nameInput").value.trim();
      if (!name) {
        document.getElementById("output").textContent = "Please enter a name.";
        return;
      }
      document.getElementById("output").textContent = "Hello, " + name + "!";
    }

    function clearOutput() {
      document.getElementById("nameInput").value = "";
      document.getElementById("output").textContent = "";
    }

    // live feedback as user types — 'input' fires on every keystroke
    document.getElementById("nameInput").addEventListener('input', (e) => {
      document.getElementById("output").textContent =
        e.target.value ? "Typing: " + e.target.value : "";
    });

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById("greetBtn").addEventListener('click', greet);
      document.getElementById("clearBtn").addEventListener('click', clearOutput);
    });
  </script>
</body>
</html>
```

---

### Day 2 Lab Exercise

**Beginner:** create a page with a button that changes its own text when clicked
(from "Click Me" to "Clicked!").

**Intermediate:** create a text input and a paragraph. As the user types, update
the paragraph in real time using the `input` event. Add a character counter
showing how many characters have been typed.

**Advanced:** create a color picker (three inputs for R, G, B values 0–255).
As any input changes, update the background color of a div in real time using
`rgb()`. Add a label showing the current hex code.

---

---

# Day 3 — Debugging: Finding and Fixing Errors

## Hour 1 — What Is Debugging?

### The Three Types of Errors

```js
// TYPE 1: SYNTAX ERROR
// Code cannot be parsed — typo in the language itself
// Browser refuses to run the file at all
function greet( {   // missing closing parenthesis
  alert("hi");
}
// → SyntaxError: Unexpected token '{'

// TYPE 2: RUNTIME ERROR
// Code is valid syntax but fails during execution
function greet(name) {
  alert(name.toUpperCase());  // works if name is a string
}
greet(undefined);
// → TypeError: Cannot read properties of undefined

// TYPE 3: LOGIC ERROR
// Code runs without errors but produces the wrong result
function add(a, b) {
  return a * b;  // should be + not *
}
alert(add(2, 3));  // → 6, but we expected 5
// No error message — this is the hardest type to find
```

> **Analogy:** Syntax errors are spelling mistakes — caught immediately.
> Runtime errors are instructions you can't follow (like "turn the invisible
> key"). Logic errors are like following a map that has north and south flipped
> — you arrive somewhere, just not where you intended.

---

### The Debugging Mindset

Good debugging is methodical, not random. The process:

```
1. Reproduce the bug reliably
        ↓
2. Read the error message carefully (if there is one)
        ↓
3. Identify WHERE in the code the problem occurs
        ↓
4. Form a hypothesis about WHY
        ↓
5. Test the hypothesis (don't change multiple things at once)
        ↓
6. Fix, verify, move on
```

> **For beginners:** the most common mistake is changing multiple things at once
> in a panic. Change one thing, test, then decide.

---

## Hour 2 — Browser DevTools

### Opening DevTools

| Browser | Shortcut |
|---|---|
| Chrome / Edge | `F12` or `Ctrl+Shift+I` |
| Firefox | `F12` or `Ctrl+Shift+I` |
| Safari | `Cmd+Option+I` (enable in preferences first) |

---

### The Console Tab — Your Best Friend

```js
// console.log — print any value
console.log("reached this point");
console.log("value of x:", x);
console.log("user object:", user);

// console.warn — yellow warning (non-fatal)
console.warn("This function is deprecated");

// console.error — red error (non-fatal, just logged)
console.error("Something went wrong:", errorMessage);

// console.table — display arrays/objects as a table
const students = [
  { name: "Ana", grade: 92 },
  { name: "Leo", grade: 85 }
];
console.table(students);
```

> **For beginners:** `console.log` is the sticky note method — you leave notes
> for yourself to check what values look like at any point in the program.

> **For advanced students:** `console.log` is a valid professional debugging
> tool used daily in industry. The stigma against it is overstated.
> That said, the debugger (next section) is faster for complex problems.

---

### The Debugger — Pause and Inspect

The debugger lets you **freeze execution mid-run** and inspect everything.

```js
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    debugger;  // execution pauses here — open DevTools to use
    total += item.price * item.quantity;
  }
  return total;
}
```

**With the debugger paused you can:**
- See the current value of every variable in scope
- Step forward one line at a time
- Step into function calls
- Watch specific expressions

> **Pedagogy note:** have students set a breakpoint on the grade calculation
> from Day 1 and step through it with different inputs. Seeing values change
> in real time is more memorable than any explanation.

---

### Setting Breakpoints Without Code Changes

1. Open DevTools → Sources tab
2. Click the line number — a blue marker appears
3. Run the code — execution pauses at that line
4. Use Step Over (F10), Step Into (F11), Continue (F8)

This is cleaner than adding `debugger` statements to the code.

---

### The Network Tab — See Every Request

```js
// this fetch call — what actually happened?
fetch('https://api.example.com/users')
  .then(res => res.json())
  .then(data => console.log(data));
```

In the Network tab you can see:
- Every HTTP request made by the page
- Status code (200 = OK, 404 = not found, 500 = server error)
- Request headers, response headers
- Response body — the actual data returned
- How long each request took

> **For MERN context:** the Network tab becomes essential in CIS 243 when
> debugging Express API routes and fetch calls from the frontend.

---

## Hour 3 — Debugging Logic Errors

### The Console.log Technique

Logic errors produce no error messages — you have to find them by tracing values.

```js
// Bug: function should return average but returns wrong value
function average(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {  // bug: <= instead of <
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// Step 1: add console.log to trace
function average(numbers) {
  let sum = 0;
  console.log("starting average, numbers:", numbers);

  for (let i = 0; i <= numbers.length; i++) {
    console.log("i =", i, "numbers[i] =", numbers[i], "sum so far =", sum);
    sum += numbers[i];
  }

  console.log("final sum:", sum, "length:", numbers.length);
  return sum / numbers.length;
}

average([10, 20, 30]);
// Output reveals: when i=3, numbers[3] = undefined → NaN sneaks into sum
// Fix: i < numbers.length  (strict less than, not <=)
```

---

### Comparing Expected vs Actual

```js
// Technique: write what you EXPECT, then check ACTUAL

function celsiusToFahrenheit(c) {
  return c * 9 / 5 + 32;
}

// Expected: 0°C → 32°F, 100°C → 212°F, -40°C → -40°F
console.log("0°C →",   celsiusToFahrenheit(0),    "expected 32");
console.log("100°C →", celsiusToFahrenheit(100),  "expected 212");
console.log("-40°C →", celsiusToFahrenheit(-40),  "expected -40");
```

> **Teaching tip:** show students that writing expected values next to actual
> ones is a manual form of unit testing. This is the conceptual foundation of
> Jest, which they will use in CIS 243.

---

### Testing in Multiple Browsers

```js
// Some APIs behave differently across browsers

// navigator.userAgent — tells you which browser is running
console.log(navigator.userAgent);

// Example: checking for browser support before using an API
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  alert("Geolocation is not supported by this browser.");
}
```

**Key browsers to test:**
- Chrome (most common, V8 engine)
- Firefox (SpiderMonkey engine — different behavior on some edge cases)
- Safari (JSCore engine — especially important for iOS)
- Edge (same V8 as Chrome but different platform defaults)

> **For the classroom:** at minimum test Chrome and Firefox. Safari matters
> most for mobile web development. Edge is important for enterprise clients.

---

### Day 3 Lab Exercise

**Beginner:** open the DevTools console and deliberately write three errors —
one syntax, one runtime, one logic. Read each error message and explain what
it says.

**Intermediate:** the following function has a logic error. Use `console.log`
to find it and fix it:
```js
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      count++;
    }
  }
  return count;
}
// Bug: countVowels("Hello World") returns 3, but should return 4
// Hint: what about uppercase vowels?
```

**Advanced:** use the Sources tab debugger (no `console.log`) to trace through
the `average()` function from the lecture and identify the off-by-one error.
Document each step: what line paused, what variables showed, what the fix was.

---

---

# Day 4 — Closures, Callbacks, and Mobile Considerations

## Hour 1 — Closures

### What Is a Closure?

A closure happens when an inner function **remembers variables from its outer
function** even after the outer function has finished running.

```js
// the outer function runs once and is "done"
function makeCounter() {
  let count = 0;  // this variable lives on because of the closure

  // the inner function closes over 'count'
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();  // makeCounter runs, returns the inner function
alert(counter());  // → 1
alert(counter());  // → 2
alert(counter());  // → 3
// count is NOT accessible from outside — it is private
```

> **Analogy for beginners:** makeCounter is like a factory that creates a
> counter machine. Each machine has its own internal tally that nobody can
> see or reset from outside — only the machine's button can increment it.

---

### Why Closures Matter

```js
// Without closures — count is global, anyone can mess with it
let count = 0;
function increment() { count++; }

// With closures — count is private, protected
function makeCounter(start) {
  let count = start || 0;
  return {
    increment() { count++; },
    decrement() { count--; },
    value()     { return count; }
  };
}

const c1 = makeCounter(0);
const c2 = makeCounter(10);  // independent counter

c1.increment();
c1.increment();
c2.decrement();

alert(c1.value());  // → 2
alert(c2.value());  // → 9  (independent from c1)
```

> **For advanced students:** closures are the mechanism behind module patterns,
> React hooks (`useState` uses closures internally), memoization, and partial
> application. Understanding closures deeply unlocks most advanced JS patterns.

---

## Hour 2 — Callback Functions

### Functions as Arguments

Because functions are values in JS, you can pass them to other functions.
A function passed as an argument to be called later is a **callback**.

```js
// function that accepts a callback
function runTwice(callback) {
  callback();
  callback();
}

// passing a named function as a callback
function sayHi() {
  alert("Hi!");
}

runTwice(sayHi);  // alerts "Hi!" twice

// passing an anonymous function as a callback
runTwice(function() {
  alert("Hello!");
});

// passing an arrow function as a callback
runTwice(() => alert("Hey!"));
```

---

### Callbacks with Arguments

```js
function applyToAll(numbers, operation) {
  const results = [];
  for (const n of numbers) {
    results.push(operation(n));  // call the callback with each number
  }
  return results;
}

const doubled  = applyToAll([1, 2, 3, 4], n => n * 2);
const squared  = applyToAll([1, 2, 3, 4], n => n * n);
const asString = applyToAll([1, 2, 3, 4], n => "Item " + n);

console.log(doubled);   // [2, 4, 6, 8]
console.log(squared);   // [1, 4, 9, 16]
console.log(asString);  // ["Item 1", "Item 2", "Item 3", "Item 4"]
```

> **For advanced students:** `applyToAll` is a simplified version of the
> built-in `Array.map()`. Understanding this helps demystify how map, filter,
> and reduce work internally.

---

### Callbacks in the Real World — Event Listeners

```js
// addEventListener takes a callback — runs when the event fires
document.getElementById("btn").addEventListener('click', function(event) {
  // this function is a callback
  // it runs later — not now, not when registered, only when clicked
  alert("Button clicked at: " + event.timeStamp);
});
```

> **Key insight for beginners:** when you register an event listener you are
> not calling the function. You are saying "here is the function — please call
> it for me when this event happens."

---

### setTimeout and setInterval — Time-Based Callbacks

```js
// setTimeout — run callback ONCE after a delay (ms)
setTimeout(() => {
  alert("This appears after 2 seconds");
}, 2000);

// setInterval — run callback REPEATEDLY on an interval
let count = 0;
const timer = setInterval(() => {
  count++;
  document.getElementById("counter").textContent = count;

  if (count >= 10) {
    clearInterval(timer);  // stop after 10 iterations
  }
}, 1000);  // every 1 second
```

> **Note:** `setTimeout` and `setInterval` are provided by the **runtime**
> (browser or Node), not by JavaScript itself. They are not in the JS spec —
> as discussed in the runtime lecture.

---

## Hour 3 — JavaScript and Mobile Devices

### How JS Runs on Mobile

Mobile browsers use the same JS engines as desktop:
- Chrome for Android → V8
- Safari for iOS → JavaScriptCore

The JS language itself works identically. The differences are in:
- **Screen size** — layout, touch targets
- **Touch events** — no mouse on most phones
- **Performance** — mobile CPUs are slower, battery matters
- **Network** — often slower, higher latency

---

### Touch Events

```js
const btn = document.getElementById("myBtn");

// Mouse events still fire on mobile (with ~300ms delay)
btn.addEventListener('click', handleClick);

// Touch events fire immediately — no delay
btn.addEventListener('touchstart', (e) => {
  e.preventDefault();  // prevent the delayed click from also firing
  handleClick();
});

// Getting touch coordinates
btn.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];  // first finger
  console.log("Touch at:", touch.clientX, touch.clientY);
});
```

---

### Mobile-Friendly Patterns

```js
// Detect touch support
const isTouchDevice = ('ontouchstart' in window);

// Responsive font size with viewport units (CSS, but driven by JS)
document.body.style.fontSize = window.innerWidth < 600 ? "18px" : "16px";

// Listen for orientation change
window.addEventListener('orientationchange', () => {
  console.log("Orientation:", window.screen.orientation.angle);
});

// Resize handler — recalculate layout
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  if (width < 768) {
    console.log("Mobile layout");
  } else {
    console.log("Desktop layout");
  }
});
```

---

### Performance on Mobile

```js
// BAD — heavy DOM manipulation in a loop
for (let i = 0; i < 1000; i++) {
  document.getElementById("list").innerHTML += "<li>Item " + i + "</li>";
  // causes 1000 reflows — very slow on mobile
}

// BETTER — build string first, update DOM once
const items = [];
for (let i = 0; i < 1000; i++) {
  items.push("<li>Item " + i + "</li>");
}
document.getElementById("list").innerHTML = items.join("");
// one reflow — much faster on any device
```

> **For advanced students:** this is the same reason React's virtual DOM
> exists — batching DOM updates into a single operation is a massive
> performance win on constrained devices.

---

### Viewport Meta Tag — Required for Mobile

```html
<!-- Without this, mobile browsers zoom out to show the "desktop" site -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This one line is required for any page that needs to work on mobile.

---

### Day 4 Lab Exercise

**Beginner:** create a simple stopwatch — a start button begins counting
seconds using `setInterval`, a stop button clears the interval.

**Intermediate:** create a page with a text input. Every time the user types
a character, log the keystroke to a visible `<div>` using the `keydown` event.
Show the key name (`event.key`) and whether Shift was held (`event.shiftKey`).

**Advanced (closure challenge):** create a function `makeMultiplier(factor)`
that returns a new function. The returned function takes a number and
multiplies it by `factor`. Create multipliers for ×2, ×5, and ×10 and use
them to build a conversion table displayed on the page.

---

---

# Week 3 Summary

## What We Covered

| Day | Topics |
|---|---|
| Day 1 | Defining functions, calling functions, parameters, return values, scope |
| Day 2 | Methods, function types (declaration/expression/arrow), events, event object |
| Day 3 | Error types, DevTools console, debugger/breakpoints, network tab, logic errors |
| Day 4 | Closures, callbacks, setTimeout/setInterval, mobile events, performance |

## Key Concepts to Remember

**Functions:**
- A function definition does nothing until called
- Parameters are placeholders; arguments are actual values
- `return` sends a value back and stops the function
- Local variables are invisible outside their function

**Function Types:**
- Declarations are hoisted; expressions are not
- Arrow functions are concise and inherit `this`
- Methods are functions attached to objects

**Events:**
- `addEventListener` is the preferred pattern
- The event object carries information about what happened
- `e.target` is the element that fired the event

**Debugging:**
- Syntax errors = bad grammar; runtime errors = impossible instruction; logic errors = wrong map
- `console.log` is valid and widely used
- Breakpoints in DevTools let you freeze and inspect execution

**Closures and Callbacks:**
- Inner functions remember outer variables — even after the outer function is done
- A callback is a function passed to another function to be called later
- Event listeners and setTimeout both use callbacks

**Mobile:**
- Touch events fire faster than click events
- Batch DOM updates — never modify the DOM inside a tight loop
- Always include the viewport meta tag

---

## Vocabulary List

| Term | Definition |
|---|---|
| Function | A named, reusable block of code |
| Parameter | A placeholder variable in a function definition |
| Argument | The actual value passed when calling a function |
| Return value | The value a function sends back to its caller |
| Scope | Where a variable is visible and accessible |
| Method | A function that is a property of an object |
| Hoisting | JS moving declarations to the top of scope before execution |
| Event | Something that happens in the browser (click, keypress, load) |
| Event handler | A function that runs in response to an event |
| Callback | A function passed to another function to be called later |
| Closure | An inner function that remembers its outer function's variables |
| Debugging | The process of finding and fixing errors in code |
| Breakpoint | A marker that pauses code execution in the debugger |
| Runtime error | An error that occurs while the program is running |
| Logic error | Code that runs without error but produces wrong results |

---

## Looking Ahead — Week 4

Next week introduces **arrays and objects** in depth, followed by
**DOM manipulation** — combining everything from weeks 1–3 to dynamically
build and update web pages without page reloads. This is the foundation
for understanding how React works in quarter 3.

# Week 15 Item-1 assign3-1

# Assign3-1: Controlling Program Flow

## Week 3 : April 20

## Lesson Plan

### Step 1. Lesson 4:

In ~/Desktop/Quarter2/Assignments/ folder add a folder week3. Inside the folder create the following file: example\_continue.html. Add the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example: continue Statement</title>
  </head>
  <body>
    <h3>CIW JavaScript Specialist</h3>
    <hr />
    <div id="years"></div>
    <h3 id="count"></h3>

    <script>
      /*
      continue skips the rest of the loop body for the current iteration
      and jumps back to the loop condition.
      Here: skip any year NOT divisible by 4 — only leap years get through.
      NOTE: this is a simplified leap year check (real rule also excludes
      century years unless divisible by 400).
    */
      let leapYears = 0;
      let curYear = 2001;
      const results = [];

      while (curYear <= 2100) {
        curYear++;
        if (curYear % 4) continue; // not divisible by 4 — skip it
        leapYears++;
        results.push(curYear);
      }

      document.getElementById("years").textContent = results.join(" ");
      document.getElementById(
        "count"
      ).textContent = `The number of leap years from 2001 to 2100 is: ${leapYears}`;
    </script>
  </body>
</html>
```

## Step 2: Render the file

It will display the number of lear years from 2001 to 2100 as shown:

![leap\_years\_25.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064949/preview)

### Challenge 1: Modify example\_continue.html to display the non-leap years.

![userName\_datenow.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064956/preview)

**HINT** Add the code:

```js
let nonLeapYears = 0;
curYear = 2001;
while (curYear <= 2100) {
  curYear++;
  if (curYear % 4 === 0) continue; // divisible by 4 — skip it
  // ...... Add your code HERE


}
```

### Take a screenshot of the output and submit

## Step 3: create a file example\_doWhile.html file

Write the following html code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example: do...while Loop - Fixed</title>
</head>
<body>
  <h3>CIW JavaScript Specialist</h3>
  <hr>
  <div id="output"></div>

  <script>
    /*
      Fixed version: the original used document.write() inside a function
      called via onload — which wipes the entire page after it has loaded.
      Fix: collect output into an array, render via innerHTML.
    */
    function dowhiletest() {
      let num = 0;
      const lines = [];
      do {
        lines.push(num);
        num++;
      } while (num < 10);
      document.getElementById("output").innerHTML = lines.join("<br>");
    }

    window.addEventListener('load', dowhiletest);
  </script>
</body>
</html>
```

### Render the file

This will display the number 0 to 9 using a do-while loop.

![doWhileFixed.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064953/preview) 

### Challenge 2: Modify example\_doWhile.html to display the numbers from 9 to 0

Remember to show your name and date 

![do\_while\_fixed\_challng.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064952/preview)

**HINT** Use:

```js
function dowhiletest() {
      let num = 9;
      const lines = [];
      do {
        lines.push(num);
        num--;
      } while (num .....);// write your code HERE
      document.getElementById("output").innerHTML = lines.join("<br>");
    }
```

### Take a screenshot of the output and submit

## Step 4: Write example\_switch.html file and open it with the browser

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example: Switch Statement</title>
</head>
<body>
  <h2>CIW JavaScript Specialist</h2>
  <hr>
  <h3>Thank you for your order!</h3>

  <script>
    /*
      switch evaluates one expression and jumps to the matching case.
      Cleaner than chained if/else when comparing one variable to many values.

      fall-through: WA and NV share the same code block — no break between
      them means both cases execute the same alert. Intentional pattern.

      .toUpperCase() normalizes input so "wa", "WA", "Wa" all match "WA".
    */
    const orderAmount = 50;

    const state = prompt("To which state will your order be shipped?", "");

    // Tax rates by state
    switch (state.toUpperCase()) {
      case "CA":
        alert(`Your total is: ${(orderAmount * 1.0825).toFixed(2)}`);
        break;
      case "HI":
        alert(`Your total is: ${(orderAmount * 1.04).toFixed(2)}`);
        break;
      case "WA":  // fall-through — WA and NV share the same rate
      case "NV":
        alert(`Your total is: ${(orderAmount * 1.065).toFixed(2)}`);
        break;
      case "AZ":
        alert(`Your total is: ${(orderAmount * 1.05).toFixed(2)}`);
        break;
      case "UT":
        alert(`Your total is: ${(orderAmount * 1.0475).toFixed(2)}`);
        break;
      default:
        alert(`Your total is: ${orderAmount.toFixed(2)}`);
    }
  </script>
</body>
</html> 
```

You will be prompted to enter a state:

```html
  The total (with tax) will be displayed: Repeat with other states.
```

### Challenge 3: Modifiy the example\_switch.html file to display the total when full state names are entered

![PROMPT-CALIFORNIA.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064951/preview)

![show\_wa\_tax\_value.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064955/preview)

Repeat with other states.

**HINT**

```js
    switch (state.toUpperCase()) {
      case "CA":
      case "CALIFORNIA":
        alert(`Your total is: ${(orderAmount * 1.0825).toFixed(2)}`);
        break;
      case "HI":
      case "HAWAII":
        // ........ continue your answer here
```

### Take a screenshot of the output and submit: you should submit two screenshots per state and at least for one state.

# Item-2
# Lab3-1: Controlling Program Flow

## Week 3 : April 20

1.  Use the if... statement
2.  Use the while... statement
3.  Use the do...while statement
4.  Use the for... statement
5.  Use the break and continue statements
6.  Use the switch... statement

### Step 1. Lesson 4: Use the if .. non-else statement

Create a file in your ~/Desktop/Quarter2/Labs folder. The name if-no-else.html. Write the following code and render the file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Grade Checker</title>
  </head>
  <body>
    <p>Enter a percentage grade and click Check Grade:</p>
    <label for="grade">Percentage Grade:</label>
    <input type="number" id="grade" min="0" max="100" />
    <br /><br />
    <button type="button" id="checkBtn">Check Grade</button>
    <p id="demo"></p>

    <script>
      function checkGrade() {
        const grade = parseFloat(document.getElementById("grade").value);
        if (isNaN(grade)) {
          // guard
          document.getElementById("demo").textContent =
            "Please enter a valid number.";
          return;
        }
        let letterGrade;
        if (grade >= 90) {
          letterGrade = "A";
          document.getElementById(
            "demo"
          ).textContent = `Letter Grade: ${letterGrade}`;
        }
      }
      document.addEventListener("DOMContentLoaded", () => {
        document
          .getElementById("checkBtn")
          .addEventListener("click", checkGrade);
      });
    </script>
  </body>
</html>
```

![gradeA.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064979/preview)

### Take a screenshot of the output and submit

## Step 2: use if .. else statements

This webpage will calculate your grade to display

1.  A if your percentage grade is >= 90
2.  B if your percentage grade is >= 80
3.  C if your percentage grade is >= 70.
4.  D if your percentage grade is >= 60.
5.  F if your percentage grade is < 60

### Challenge 1: write the code to calculate the grade with different values

**HINT**

```js
if (grade >= 90) {
  letterGrade = "A";
} else if (grade >= 80) {
  letterGrade = "B";
} else if (grade >= 70) {
  letterGrade = "C";
} else if (grade >= 60) {
  letterGrade = "D";
} else {
  letterGrade = "F";
}
```

![gradeC.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064978/preview)

### Take a screenshot of the output and submit

## Step 3: Use the while loop

Create a file while\_count\_to\_ten.html. Write the following code and render.

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript while loop</h2>
    <p id="demo"></p>
    <script>
      let text = "";
      let i = 0;
      while (i < 10) {
        text += `<br>The number is ${i}`;
        i++;
      }
      document.getElementById("demo").innerHTML = text;
    </script>
  </body>
</html>
```

![while\_1\_10.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064977/preview)

### Take a screenshot of the output and submit

### Challenge 1: create a file while\_minus5\_to\_plus5.html

**HINT**

```js
let i = -5;
while (i <=  .......)
```

 ![while\_minu5\_5.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064976/preview)See also [https://www.w3schools.com/js/js\_loop\_while.asp](https://www.w3schools.com/js/js_loop_while.asp)

### Take a screenshot of the output and submit

### Challenge 2: create a file while\_plus5\_to\_minus5.html

```js
let i = 5;
while (i >=  .......){
    //....
    i--;
}
```

### Take a screenshot of the output and submit

### Challenge 3: while\_1to10\_step\_2.html

HINT

```js
while (i <= 10) {
  // .....
  i = i + 2;
}
```

### Take a screenshot of the output and submit

## Step 4: Use the do....while loop

Create a file doWhile\_1\_to\_10.html

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript do-while loop</h2>
    <p id="demo"></p>
    <script>
      let text = "";
      let i = 1;
      do {
        text += `<br>The number is ${i}`;
        i++;
      } while (i <= 10);
      document.getElementById("demo").innerHTML = text;
    </script>
  </body>
</html>
```

### Take a screenshot of the output and submit

See also [https://www.w3schools.com/jsref/jsref\_dowhile.asp](https://www.w3schools.com/jsref/jsref_dowhile.asp)

### Challenge 4: File doWhile\_10\_to\_1.html

HINT

```js
let i = 10;
do {
    // .....
    i--;
    // .....
} while // .......
```

![dowhile\_10to1.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064971/preview)

### Take a screenshot of the output and submit

## Step 5 : Use the for loop

Create a file for\_loop\_1\_to\_10.html. Write the following code and render.

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript for loop</h2>
    <p id="demo"></p>
    <script>
      let text = "";
      for (let i = 1; i <= 10; i++) {
        text += `${i} <br>`;
      }
      document.getElementById("demo").innerHTML = text;
    </script>
  </body>
</html> 
```

### Challenge 5: for\_loop\_from10\_to1.html

**HINT**

```js
for (let i = 0; i > 0; i++) {
  // .........
}
```

![forloop\_10\_to\_1.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064969/preview)

### Take a screenshot of the output and submit

## Step 6: for\_loop\_break.html

Write the following code and render the file

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript for loop with break</h2>
    <p id="demo"></p>
    <script>
      let text = "";
      for (i = 1; i <= 10; i++) {
        text += `${i} <br>`;
        if (i === 3) {
          break;
        }
      }
      document.getElementById("demo").innerHTML = text;
    </script>
  </body>
</html>
```

### Take a screenshot of the output and submit

### Challenge 5: create for\_loop\_with\_continue.html

HINT

```js
if (i >= 4) {
    continue;
}
```

![forloop\_continue.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064967/preview)

### Take a screenshot of the output and submit

See also [https://www.w3schools.com/js/js\_break.asp](https://www.w3schools.com/js/js_break.asp) 

## Step 7: Using switch statement

Create file switch\_AB.html. This page will calculate the grade to display A if your percentage grade is >= 90. B if your percentage grade is >= 80.

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Click the button to display your letter grade using switch:</p>
    Percentage Grade: <input type="number" id="grade" /><br />
    <input type="button" id="checkBtn" value="Try it!!" />
    <p id="demo"></p>
    <script>
      function checkGrade() {
        let letterGrade;
        let grade = parseFloat(document.getElementById("grade").value);
        if (isNaN(grade)) {
          document.getElementById("demo").textContent =
            "Please enter a valid number.";
          return;
        }
        switch (true) {
          case grade >= 90:
            letterGrade = "A";
            break;
          case grade >= 80:
            letterGrade = "B";
            break;
        }
        document.getElementById("demo").innerHTML = letterGrade;
        document.addEventListener('DOMContentLoaded', () => {
      document.getElementById("checkBtn").addEventListener('click', checkGrade);
      }
    </script>
  </body>
</html>
```

### Take a screenshot of the output and submit

### Challenge 6: switch\_ABCDF.html

This web page will calculate the grade to display using a switch

1.  A if your percentage grade is >= 90
2.  B if your percentage grade is >= 80
3.  C if your percentage grade is >= 70.
4.  D if your percentage grade is >= 60.
5.  F if your percentage grade is < 60.

HINT

```js
 switch (true) {
          case grade >= 90:
            letterGrade = "A";
            break;
          case grade >= 80:
            letterGrade = "B";
            break;
            // ......
          default:
            letterGrade = "F";
            break;
 }  
```

### Take a screenshot of the output and submit

 See also [https://www.w3schools.com/js/js\_switch.asp](https://www.w3schools.com/js/js_switch.asp)

# Item-3
# Assign3-1: Controlling Program Flow

## Week 3 : April 20

## Lesson Plan

### Step 1. Lesson 4:

In ~/Desktop/Quarter2/Assignments/ folder add a folder week3. Inside the folder create the following file: example_continue.html. Add the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example: continue Statement</title>
  </head>
  <body>
    <h3>CIW JavaScript Specialist</h3>
    <hr />
    <div id="years"></div>
    <h3 id="count"></h3>

    <script>
      /*
      continue skips the rest of the loop body for the current iteration
      and jumps back to the loop condition.
      Here: skip any year NOT divisible by 4 — only leap years get through.
      NOTE: this is a simplified leap year check (real rule also excludes
      century years unless divisible by 400).
    */
      let leapYears = 0;
      let curYear = 2001;
      const results = [];

      while (curYear <= 2100) {
        curYear++;
        if (curYear % 4) continue; // not divisible by 4 — skip it
        leapYears++;
        results.push(curYear);
      }

      document.getElementById("years").textContent = results.join(" ");
      document.getElementById(
        "count"
      ).textContent = `The number of leap years from 2001 to 2100 is: ${leapYears}`;
    </script>
  </body>
</html>
```

## Step 2: Render the file

It will display the number of lear years from 2001 to 2100 as shown:
![leap years 25](./images/week3/leap_years_25.png)

### Challenge 1: Modify example_continue.html to display the non-leap years.

![user name and date](./images/week3/userName_datenow.png)

**HINT** Add the code: 

```js
let nonLeapYears = 0;
curYear = 2001;
while (curYear <= 2100) {
  curYear++;
  if (curYear % 4 === 0) continue; // divisible by 4 — skip it
  // ...... Add your code HERE


}
```
Take a screenshot of the output and submit

## Step 3: create a file example_doWhile.html file

Write the following html code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example: do...while Loop - Fixed</title>
</head>
<body>
  <h3>CIW JavaScript Specialist</h3>
  <hr>
  <div id="output"></div>

  <script>
    /*
      Fixed version: the original used document.write() inside a function
      called via onload — which wipes the entire page after it has loaded.
      Fix: collect output into an array, render via innerHTML.
    */
    function dowhiletest() {
      let num = 0;
      const lines = [];
      do {
        lines.push(num);
        num++;
      } while (num < 10);
      document.getElementById("output").innerHTML = lines.join("<br>");
    }

    window.addEventListener('load', dowhiletest);
  </script>
</body>
</html>
```

### Render the file
This will display the number 0 to 9 using a do-while loop.
![do-while 0to9](./images/week3/doWhileFixed.png)

### Challenge 2: Modify example_doWhile.html to display the numbers from 9 to 0
Remember to show your name and date
![do-while descending](./images/week3/do_while_fixed_challng.png)
**HINT** Use:
```js
function dowhiletest() {
      let num = 9;
      const lines = [];
      do {
        lines.push(num);
        num--;
      } while (num .....);// write your code HERE
      document.getElementById("output").innerHTML = lines.join("<br>");
    }
```
## Step 4: Write example_switch.html file and open it with the browser
You will be prompted to enter a state:
![enter state](./images/week3/enter_a_state_alert_wa.png)
The total (with tax) will be displayed:
![wa tax](./images/week3/show_wa_tax_value.png)
Repeat with other states.


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example: Switch Statement</title>
</head>
<body>
  <h2>CIW JavaScript Specialist</h2>
  <hr>
  <h3>Thank you for your order!</h3>

  <script>
    /*
      switch evaluates one expression and jumps to the matching case.
      Cleaner than chained if/else when comparing one variable to many values.

      fall-through: WA and NV share the same code block — no break between
      them means both cases execute the same alert. Intentional pattern.

      .toUpperCase() normalizes input so "wa", "WA", "Wa" all match "WA".
    */
    const orderAmount = 50;

    const state = prompt("To which state will your order be shipped?", "");

    // Tax rates by state
    switch (state.toUpperCase()) {
      case "CA":
        alert(`Your total is: ${(orderAmount * 1.0825).toFixed(2)}`);
        break;
      case "HI":
        alert(`Your total is: ${(orderAmount * 1.04).toFixed(2)}`);
        break;
      case "WA":  // fall-through — WA and NV share the same rate
      case "NV":
        alert(`Your total is: ${(orderAmount * 1.065).toFixed(2)}`);
        break;
      case "AZ":
        alert(`Your total is: ${(orderAmount * 1.05).toFixed(2)}`);
        break;
      case "UT":
        alert(`Your total is: ${(orderAmount * 1.0475).toFixed(2)}`);
        break;
      default:
        alert(`Your total is: ${orderAmount.toFixed(2)}`);
    }
  </script>
</body>
</html>
```
### Challenge 3: Modifiy the example_switch.html file to display the total when full state names are entered

![prompt california](./images/week3/PROMPT-CALIFORNIA.png)
![show CA tax value](./images/week3/show_wa_tax_value.png)

Repeat with other states. 

**HINT**
```js
    switch (state.toUpperCase()) {
      case "CA":
      case "CALIFORNIA":
        alert(`Your total is: ${(orderAmount * 1.0825).toFixed(2)}`);
        break;
      case "HI":
      case "HAWAII":
        // ........ continue your answer here
```



