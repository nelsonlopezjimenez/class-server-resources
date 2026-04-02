---
publishDate: 2026-02-02
title: "JavaScript Fundamentals - Variables, Data Types, and Basic Operations"
description: "Introduction to JavaScript syntax, variables, primitive data types, console.log(), and string methods."
week: 13
section: 2
---
<details>Variables and Data
<pre>
### Week 2: Working with Variables and Data in JavaScript

*   Using JavaScript to Communicate with the User
*   Tools for Debugging Code
*   Using Data More Than Once: Variables
*   JavaScript Operators
*   JavaScript Expressions
*   JavaScript Alerts and Prompts
*   Simple User Events and Basic Event Handlers
*   JavaScript Keywords and Reserved Words
</pre></details>

# Week 2: Working with Variables and Data

## Learning Objectives

By the end of this week, you will be able to:

- Write clean, commented JavaScript code following best practices.
- Declare variables using appropriate keywords `let` and `const`, and why we don't use `var` anymore.
- Identify and work with JavaScript's primitive data types.
- Create, display, and manipulate strings
- Use browser developer tools to debug and test JavaScript code.

## Day 1: Using JS to Communicate with the user

**Communication is a two-way street. JS can tap you on the shoulder, or open a full conversation.**

---

**`alert()` — the megaphone**
Loud, blunt, stops everything. No one likes it, but everyone hears it. Use sparingly — it's rude at a dinner party.

---

**`confirm()` — the bouncer**
Blocks the door and asks: *yes or no?* Returns `true` or `false`. Nothing moves until you answer.

---

**`prompt()` — the sticky note slipped under the door**
Asks for a typed response. Returns whatever the user wrote, or `null` if they walked away. Old-fashioned but occasionally useful.

---

**The DOM — the live stage**
JS can rewrite any part of the page *while the audience is watching* — change text, swap images, show/hide elements. This is the main channel. Most real communication happens here.
Example ["turn light on/off"](https://www.w3schools.com/js/js_intro.asp)
The [DOM](https://www.w3schools.com/js/js_htmldom.asp)
The [DOM](http://localhost:22022/websites/w3schools.com/js/js_htmldom.html)

---

**Events — the doorbell system**
JS *listens* for user actions — clicks, keystrokes, scrolls, form submissions. When the doorbell rings, a function runs. The user leads, JS follows.

---

**Forms — the suggestion box**
Structured input — text fields, dropdowns, checkboxes. The user fills it out, JS reads it, validates it, and decides what to do next.

---

**Notifications API — the push notification**
JS can reach *outside* the browser tab and tap the user on the desktop. Requires permission first — like knocking before entering.

---

> **The arc:** JS went from shouting (`alert`) to *listening and responding in real time* (events + DOM). Modern JS barely uses the first three — the stage and the doorbell system do almost everything.

## Day 1: Tools for Debugging Code
**Debugging is detective work.** Your code is the crime scene. These are your tools:

---

**`console.log()` — the sticky note**
Slap it anywhere to leave yourself a message: *"I was here, and x was 42."* Simple, low-tech, surprisingly effective. Every developer still uses it.[Using console.log()](https://www.w3schools.com/js/js_output.asp) or [Using document.write()](https://www.w3schools.com/js/js_output.asp)
[Using console.log()](https://www.w3schools.com/js/js_output.asp) or [Using document.write()](https://www.w3schools.com/js/js_output.asp)
[JavaScript console.log()](http://localhost:22022/websites/w3schools.com/js/js_output.html)

---

**Browser DevTools (F12) — the X-ray machine**
See through the page. Inspect HTML, CSS, network requests, memory, performance. Everything the browser *actually* sees, not what you *think* it sees.

---

**DevTools Debugger — the pause button on reality**
Set a **breakpoint** and the program freezes mid-execution. You can look around, inspect every variable, then step forward *one line at a time* — like rewinding a crime scene in slow motion.

---

**The Console tab — a direct hotline to your page**
Type JS directly into the running page. Like being able to *walk into the movie* and interact with the characters while it's playing.

---

**The Network tab — the mail tracking system**
See every request your page sends and receives — what was asked for, what came back, how long it took, and whether it failed.

---

**ESLint — the strict teacher before class starts**
Catches mistakes *before* you run anything. Doesn't wait for the crime — it spots suspicious behavior in advance.

---

> **Beginner priority:** `console.log` → DevTools Console → Debugger breakpoints. In that order. Most bugs surrender before you even need the rest.

## Day 2: Variables

**1. For a complete beginner:**
A variable is a **named box** that holds a value. You label it, put something in, and refer to it by name later.
A container, a jar you can fill with water, oil, gelatine, etc. 

```js
let age = 25;
```

---

**2. Slightly deeper:**
A variable is a **binding** — a name attached to a value in memory. The name stays; the value can change (or not, with `const`).
```js
let score = 0;
score = 10; // same box, new value
```

---
<details><pre>
**3. For someone thinking about how JS works:**
A variable is a **reference to a location in memory.** For primitives (`number`, `string`) it stores the value directly. For objects and arrays it stores a *pointer* — the box holds a **map, not the treasure.**
```js
const user = { name: "Ana" };
user.name = "Leo"; // const didn't protect the contents, only the pointer
```

---

**4. Advanced — scope and lifecycle:**
A variable is a **named binding scoped to a context**, with a defined lifecycle: declared, initialized, used, garbage collected when no longer reachable. `let`/`const` are block-scoped and have a temporal dead zone; `var` is function-scoped and hoisted — a design mistake JS carries for legacy reasons.
```js
function run() {
  let x = 1;        // lives inside run()
  if (true) {
    let x = 2;      // different x — different block, different binding
    console.log(x); // 2
  }
  console.log(x);   // 1
}
```
</pre></details>
---

> **The through-line:** a label → a binding → a pointer → a scoped lifecycle. Same concept, increasing precision.

## Day 2: JavaScript Datatypes
1. String
1. Number
1. Bigint
1. Boolean
1. Object
1. Undefined
1. Null
1. Symbol
1. [reference](https://www.w3schools.com/js/js_types.asp) [localhost](http://localhost:22022/websites/w3schools.com/js/js_types.html)

## Day 2: Expression And Operators

An expression is a single unit of JS code that can be evaluated. Expression can vary in complexity. More advanced expressions involve objects, functions, and arrays. 

1. Arithmetic: + - * ** / % ++ --
1. Assignment = += -=
1. Comparison: == === != !== > < >= <=
1. Logical: && || !
1 [reference](https://www.w3schools.com/js/js_operators.asp) [localhost](http://localhost:22022/websites/w3schools.com/js/js_operators.html)

### Mandatory Reading:

- [Introduction to JS](http://localhost:22022/websites/w3schools.com/js/js_intro.html)
- [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)
- [JavaScript Variables](http://localhost:22022/websites/w3schools.com/js/js_variables.html)
- [w3Schools - Strings](http://localhost:22022/websites/w3schools.com/js/js_strings.html)
- [w3Schools - String Templates](http://localhost:22022/websites/w3schools.com/js/js_string_templates.html)
- [w3Schools - Comments](http://localhost:22022/websites/w3schools.com/js/js_comments.html)
* JavaScript Operators [operators](https://www.w3schools.com/js/js_operators.asp)
- [JavaScript operators](http://localhost:22022/websites/w3schools.com/js/js_operators.html)
* JavaScript Expressions [expressions](https://www.w3schools.com/js/js_assignment.asp)
- [JavaScript expressions](http://localhost:22022/websites/w3schools.com/js/js_assignment.html)
- [w3Schools - String Methods](http://localhost:22022/websites/w3schools.com/js/js_string_methods.html)

## Day 3: Alert, prompt, events
The **alert()** method displays an alert box with a message and an OK button.

### Mandatory Reading:

* JavaScript Alerts [alert()](https://www.w3schools.com/jsref/met_win_alert.asp) 
[localhost alert()](http://localhost:22022/websites/w3schools.com/jsref/met_win_alert.html)
- [JavaScript prompt()](http://localhost:22022/websites/w3schools.com/jsref/met_win_prompt.html)
[localhost prompt()](https://www.w3schools.com/jsref/met_win_prompt.asp) 

* Simple User Events [events](https://www.w3schools.com/js/js_events.asp) and Basic Event Handlers
- [JavaScript events](http://localhost:22022/websites/w3schools.com/js/js_events.html) **special attention to event listeners**
* JavaScript Keywords and Reserved Words
* [reserved words](https://www.w3schools.com/js/js_reserved.asp)
- [JavaScript reserved words](http://localhost:22022/websites/w3schools.com/js/js_reserved.html)



### Optional But Highly Recommended Reading:

- [What is Javascript?](http://localhost:8001/learn/javascript-v9/#lecture-introduction-to-javascript):

  - [What is Javascript?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-javascript/what-is-javascript)
  - [What is a Data Type?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-javascript/what-is-a-data-type)
  - [What are Variables?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-javascript/what-are-variables)
  - [How do let and const Work?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-javascript/how-do-let-and-const-work)

- [Introduction to strings](http://localhost:8001/learn/javascript-v9/#lecture-introduction-to-strings):

  - [What is a string?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-strings/what-is-a-string)
  - [What is string concatenation?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-strings/what-is-string-concatenation)
  - [What is console.log()?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-strings/what-is-console-log)

- [Understanding Code Clarity](http://localhost:8001/learn/javascript-v9/#lecture-understanding-code-clarity):

  - [What is the role of Semicolons ( ; ) in javascript?](http://localhost:8001/learn/javascript-v9/lecture-understanding-code-clarity/what-is-the-role-of-semicolons)
  - [What are comments in javascript?](http://localhost:8001/learn/javascript-v9/lecture-understanding-code-clarity/what-are-comments-in-javascript)

### Optional Readings:

- [MDN - What is Javascript](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript.html)
- [MDN - Comments](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript.html#comments)
- [MDN - Variables](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables.html)

- [What is Dynamic Typing?](http://localhost:8001/learn/javascript-v9/lecture-working-with-data-types/what-is-dynamic-typing-in-javascript-and-how-does-it-differ-from-statically-typed-languages)
- [How Does typeOf Operator Work?](http://localhost:8001/learn/javascript-v9/lecture-working-with-data-types/how-does-the-typeof-operator-work-and-what-is-the-typeof-null-bug-in-javascript)

- [Data Types Review](http://localhost:8001/learn/javascript-v9/review-javascript-variables-and-data-types/review-javascript-variables-and-data-types)

- [What is Bracket Notation?](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/what-is-bracket-notation-and-how-do-you-access-characters-from-a-string)
- [How to Create Newline in Strings?](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/how-do-you-create-a-newline-in-strings-and-escape-strings)
- [What are Template Literals?](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/what-are-template-literals-and-what-is-string-interpolation)
- [Substrings](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/how-can-you-find-the-position-of-a-substring-in-a-string)
- [prompt()](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/what-is-the-prompt-method-and-how-does-it-work)

- [MDN - Handling Strings](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings.html)
- [MDN - String Templates](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals.html)


- [What is ASCII?](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-character-methods/ywhat-is-ascii-and-how-does-it-work-with-charcodeat-and-fromcharcode)
- [Using includes()](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-search-and-slice-methods/how-can-you-test-if-a-string-contains-a-substring)
- [Using slice()](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-search-and-slice-methods/how-can-you-extract-a-substring-from-a-string)
- [Changing Casing](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-formatting-methods/how-can-you-change-the-casing-for-a-string)
- [Remove WhiteSpace](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-formatting-methods/how-can-you-trim-whitespace-from-a-string)

- [MDN - Useful String Methods](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods.html)

## Day 4: Review and Quiz

### Mandatory Readings:

- [Review JS Fundamentals](http://localhost:8001/learn/javascript-v9/review-javascript-variables-and-data-types/review-javascript-variables-and-data-types)
- [Review Strings](http://localhost:8001/learn/javascript-v9/review-javascript-strings/review-javascript-strings)

### Quiz:

- Log into Canvas and navigate to this section's class page
- Click on Quizzes
  - Take the Week 13 Quiz
