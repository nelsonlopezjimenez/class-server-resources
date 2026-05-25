# Week14 Item-1

Details Variables and Data

\### Week 2: Working with Variables and Data in JavaScript

-   Using JavaScript to Communicate with the User
-   Tools for Debugging Code
-   Using Data More Than Once: Variables
-   JavaScript Operators
-   JavaScript Expressions
-   JavaScript Alerts and Prompts
-   Simple User Events and Basic Event Handlers
-   JavaScript Keywords and Reserved Words

# Week 2: Working with Variables and Data

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#week-2-working-with-variables-and-data)

## Learning Objectives

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#learning-objectives)

By the end of this week, you will be able to:

-   Write clean, commented JavaScript code following best practices.
-   Declare variables using appropriate keywords `let` and `const`, and why we don't use `var` anymore.
-   Identify and work with JavaScript's primitive data types.
-   Create, display, and manipulate strings
-   Use browser developer tools to debug and test JavaScript code.

## Day 1: Using JS to Communicate with the user

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#day-1-using-js-to-communicate-with-the-user)

**Communication is a two-way street. JS can tap you on the shoulder, or open a full conversation.**

* * *

**`alert()` — the megaphone** Loud, blunt, stops everything. No one likes it, but everyone hears it. Use sparingly — it's rude at a dinner party.

* * *

**`confirm()` — the bouncer** Blocks the door and asks: *yes or no?* Returns `true` or `false`. Nothing moves until you answer.

* * *

**`prompt()` — the sticky note slipped under the door** Asks for a typed response. Returns whatever the user wrote, or `null` if they walked away. Old-fashioned but occasionally useful.

* * *

**The DOM — the live stage** JS can rewrite any part of the page *while the audience is watching* — change text, swap images, show/hide elements. This is the main channel. Most real communication happens here. Example ["turn light on/off"](https://www.w3schools.com/js/js_intro.asp) The [DOM](https://www.w3schools.com/js/js_htmldom.asp) The [DOM](http://localhost:22022/websites/w3schools.com/js/js_htmldom.html)

* * *

**Events — the doorbell system** JS *listens* for user actions — clicks, keystrokes, scrolls, form submissions. When the doorbell rings, a function runs. The user leads, JS follows.

* * *

**Forms — the suggestion box** Structured input — text fields, dropdowns, checkboxes. The user fills it out, JS reads it, validates it, and decides what to do next.

* * *

**Notifications API — the push notification** JS can reach *outside* the browser tab and tap the user on the desktop. Requires permission first — like knocking before entering.

* * *

> **The arc:** JS went from shouting (`alert`) to *listening and responding in real time* (events + DOM). Modern JS barely uses the first three — the stage and the doorbell system do almost everything.

## Day 1: Tools for Debugging Code

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#day-1-tools-for-debugging-code)

**Debugging is detective work.** Your code is the crime scene. These are your tools:

* * *

**`console.log()` — the sticky note** Slap it anywhere to leave yourself a message: *"I was here, and x was 42."* Simple, low-tech, surprisingly effective. Every developer still uses it.[Using console.log()](https://www.w3schools.com/js/js_output.asp) or [Using document.write()](https://www.w3schools.com/js/js_output.asp) [Using console.log()](https://www.w3schools.com/js/js_output.asp) or [Using document.write()](https://www.w3schools.com/js/js_output.asp) [JavaScript console.log()](http://localhost:22022/websites/w3schools.com/js/js_output.html)

* * *

**Browser DevTools (F12) — the X-ray machine** See through the page. Inspect HTML, CSS, network requests, memory, performance. Everything the browser *actually* sees, not what you *think* it sees.

* * *

**DevTools Debugger — the pause button on reality** Set a **breakpoint** and the program freezes mid-execution. You can look around, inspect every variable, then step forward *one line at a time* — like rewinding a crime scene in slow motion.

* * *

**The Console tab — a direct hotline to your page** Type JS directly into the running page. Like being able to *walk into the movie* and interact with the characters while it's playing.

* * *

**The Network tab — the mail tracking system** See every request your page sends and receives — what was asked for, what came back, how long it took, and whether it failed.

* * *

**ESLint — the strict teacher before class starts** Catches mistakes *before* you run anything. Doesn't wait for the crime — it spots suspicious behavior in advance.

* * *

> **Beginner priority:** `console.log` → DevTools Console → Debugger breakpoints. In that order. Most bugs surrender before you even need the rest.

## Day 2: Variables

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#day-2-variables)

**1\. For a complete beginner:** A variable is a **named box** that holds a value. You label it, put something in, and refer to it by name later. A container, a jar you can fill with water, oil, gelatine, etc.

let age \= 25;

* * *

**2\. Slightly deeper:** A variable is a **binding** — a name attached to a value in memory. The name stays; the value can change (or not, with `const`).

let score \= 0;
score \= 10; // same box, new value

* * *

Details

* * * 

> **The through-line:** a label → a binding → a pointer → a scoped lifecycle. Same concept, increasing precision.

## Day 2: JavaScript Datatypes

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#day-2-javascript-datatypes)

1.  String
2.  Number
3.  Bigint
4.  Boolean
5.  Object
6.  Undefined
7.  Null
8.  Symbol
9.  [reference](https://www.w3schools.com/js/js_types.asp) [localhost](http://localhost:22022/websites/w3schools.com/js/js_types.html)

## Day 2: Expression And Operators

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#day-2-expression-and-operators)

An expression is a single unit of JS code that can be evaluated. Expression can vary in complexity. More advanced expressions involve objects, functions, and arrays.

1.  Arithmetic: + - \* \*\* / % ++ --
2.  Assignment = += -=
3.  Comparison: == === != !== > < >= <=
4.  Logical: && || ! 1 [reference](https://www.w3schools.com/js/js_operators.asp) [localhost](http://localhost:22022/websites/w3schools.com/js/js_operators.html)

### Mandatory Reading:

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#mandatory-reading)

-   [Introduction to JS](http://localhost:22022/websites/w3schools.com/js/js_intro.html)
-   [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)
-   [JavaScript Variables](http://localhost:22022/websites/w3schools.com/js/js_variables.html)
-   [w3Schools - Strings](http://localhost:22022/websites/w3schools.com/js/js_strings.html)
-   [w3Schools - String Templates](http://localhost:22022/websites/w3schools.com/js/js_string_templates.html)
-   [w3Schools - Comments](http://localhost:22022/websites/w3schools.com/js/js_comments.html)

-   JavaScript Operators [operators](https://www.w3schools.com/js/js_operators.asp)

-   [JavaScript operators](http://localhost:22022/websites/w3schools.com/js/js_operators.html)

-   JavaScript Expressions [expressions](https://www.w3schools.com/js/js_assignment.asp)

-   [JavaScript expressions](http://localhost:22022/websites/w3schools.com/js/js_assignment.html)
-   [w3Schools - String Methods](http://localhost:22022/websites/w3schools.com/js/js_string_methods.html)

## Day 3: Alert, prompt, events

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#day-3-alert-prompt-events)

The **alert()** method displays an alert box with a message and an OK button.

### Mandatory Reading:

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#mandatory-reading-1)

-   JavaScript Alerts [alert()](https://www.w3schools.com/jsref/met_win_alert.asp) [localhost alert()](http://localhost:22022/websites/w3schools.com/jsref/met_win_alert.html)

-   [JavaScript prompt()](http://localhost:22022/websites/w3schools.com/jsref/met_win_prompt.html) [localhost prompt()](https://www.w3schools.com/jsref/met_win_prompt.asp)

-   Simple User Events [events](https://www.w3schools.com/js/js_events.asp) and Basic Event Handlers

-   [JavaScript events](http://localhost:22022/websites/w3schools.com/js/js_events.html) **special attention to event listeners**

-   JavaScript Keywords and Reserved Words
-   [reserved words](https://www.w3schools.com/js/js_reserved.asp)

-   [JavaScript reserved words](http://localhost:22022/websites/w3schools.com/js/js_reserved.html)

### Optional But Highly Recommended Reading:

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#optional-but-highly-recommended-reading)

-   [What is Javascript?](http://localhost:8001/learn/javascript-v9/#lecture-introduction-to-javascript):
    
    -   [What is Javascript?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-javascript/what-is-javascript)
    -   [What is a Data Type?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-javascript/what-is-a-data-type)
    -   [What are Variables?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-javascript/what-are-variables)
    -   [How do let and const Work?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-javascript/how-do-let-and-const-work)
-   [Introduction to strings](http://localhost:8001/learn/javascript-v9/#lecture-introduction-to-strings):
    
    -   [What is a string?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-strings/what-is-a-string)
    -   [What is string concatenation?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-strings/what-is-string-concatenation)
    -   [What is console.log()?](http://localhost:8001/learn/javascript-v9/lecture-introduction-to-strings/what-is-console-log)
-   [Understanding Code Clarity](http://localhost:8001/learn/javascript-v9/#lecture-understanding-code-clarity):
    
    -   [What is the role of Semicolons ( ; ) in javascript?](http://localhost:8001/learn/javascript-v9/lecture-understanding-code-clarity/what-is-the-role-of-semicolons)
    -   [What are comments in javascript?](http://localhost:8001/learn/javascript-v9/lecture-understanding-code-clarity/what-are-comments-in-javascript)

### Optional Readings:

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#optional-readings)

-   [MDN - What is Javascript](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript.html)
    
-   [MDN - Comments](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript.html#comments)
    
-   [MDN - Variables](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables.html)
    
-   [What is Dynamic Typing?](http://localhost:8001/learn/javascript-v9/lecture-working-with-data-types/what-is-dynamic-typing-in-javascript-and-how-does-it-differ-from-statically-typed-languages)
    
-   [How Does typeOf Operator Work?](http://localhost:8001/learn/javascript-v9/lecture-working-with-data-types/how-does-the-typeof-operator-work-and-what-is-the-typeof-null-bug-in-javascript)
    
-   [Data Types Review](http://localhost:8001/learn/javascript-v9/review-javascript-variables-and-data-types/review-javascript-variables-and-data-types)
    
-   [What is Bracket Notation?](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/what-is-bracket-notation-and-how-do-you-access-characters-from-a-string)
    
-   [How to Create Newline in Strings?](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/how-do-you-create-a-newline-in-strings-and-escape-strings)
    
-   [What are Template Literals?](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/what-are-template-literals-and-what-is-string-interpolation)
    
-   [Substrings](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/how-can-you-find-the-position-of-a-substring-in-a-string)
    
-   [prompt()](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/what-is-the-prompt-method-and-how-does-it-work)
    
-   [MDN - Handling Strings](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings.html)
    
-   [MDN - String Templates](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals.html)
    
-   [What is ASCII?](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-character-methods/ywhat-is-ascii-and-how-does-it-work-with-charcodeat-and-fromcharcode)
    
-   [Using includes()](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-search-and-slice-methods/how-can-you-test-if-a-string-contains-a-substring)
    
-   [Using slice()](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-search-and-slice-methods/how-can-you-extract-a-substring-from-a-string)
    
-   [Changing Casing](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-formatting-methods/how-can-you-change-the-casing-for-a-string)
    
-   [Remove WhiteSpace](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-formatting-methods/how-can-you-trim-whitespace-from-a-string)
    
-   [MDN - Useful String Methods](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods.html)
    

## Day 4: Review and Quiz

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#day-4-review-and-quiz)

### Mandatory Readings:

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#mandatory-readings)

-   [Review JS Fundamentals](http://localhost:8001/learn/javascript-v9/review-javascript-variables-and-data-types/review-javascript-variables-and-data-types)
-   [Review Strings](http://localhost:8001/learn/javascript-v9/review-javascript-strings/review-javascript-strings)

### Quiz:

[](https://github.com/nelsonlopezjimenez/class-server-resources/blob/main/markdown/lessons/section2-javascript/week13.md#quiz)

-   Log into Canvas and navigate to this section's class page
-   Click on Quizzes
    -   Take the Week 13 Quiz

# Item-2

## **Introduction to Week 2 April 13-17**

1.  Did you take screenshots of your laptop quiz assignment? If so, go to the Assignments section, find the assignment aw3.1 and submit. If not, your will have the first hour to do so. During class time, you can submit using the classroom canvas.
2.  Did you complete your w3schools quizzes on JavaScript? Make note of the sections you finished and submit to assignment aw3.2.
3.  Did you watch any video on JavaScript found in a location with a path: C***:\\Users\\Public\\Videos\\RAW-VIDEOS? I*****f so, please list the videos in** ***aw3.3***
4.  What chapters of the textbook on JavaScript have you completed? Please list them in assignment aw3.3, as well.
5.  Have you found any other resource related to current class that you found interesting? Please list it in the assignment aw3.3

## **Week at a Glance**

### This week's goals:

1.  1.  Test the access to freeCodeCamp offline website
    2.  Take/retake week 3 quizzes
    3.  Complete week 3 assignments

To help you achieve the Week 3.3 learning outcomes, you will complete the following activities this week:

### **READ/WATCH/EXPLORE**

-   Read handout of JavaScript by Flavio Copes ([link here)](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064039?wrap=1)
-   Read the AIRBNB JavaScript style guide. The [file is a zip file.](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064036/download?wrap=1)
-   Watch the series of videos on JavaScript for beginners from Microsoft found in the following path:
-   C:\\Users\\Public\\Videos\\RAW-VIDEOS\\MSjavascriptforbeginners

### **COMPLETE**

-   Assignment [aw3.1](https://canvas.corrections.sbctc.edu/courses/392419000000591/assignments/392419000015484 "aw3.1")
-   Assignment [aw3.2](https://canvas.corrections.sbctc.edu/courses/392419000000591/assignments/392419000015485 "aw3.2")
-   Assignment [aw3.3 add the fizzbuzz, triangle, and chess board exercises](https://canvas.corrections.sbctc.edu/courses/392419000000591/assignments/392419000015486 "aw3.3")

### **REVIEW**

#### From the JavaScript book handout review the following 

1.  JavaScript history
2.  JavaScript syntax
3.  Variable definition
4.  Variable types
5.  Expressions
6.  Operators
7.  Precedence rules
8.  Conditionals
9.  Arrays

## **Tips for Success**

Include the material from the "Foundations" in Odin Project.

-   Read about [motivation](http://localhost:22022/Public/Downloads/2025/www.theodinproject.com/lessons/foundations-motivation-and-mindset%20.html#motivation) and [here](http://localhost:22022/Public/Downloads/2025/www.theodinproject.com/lessons/foundations-introduction-to-web-de%20velopment.html#why-odin) 
-   What to do if/[when you're stuck](http://localhost:22022/Public/Downloads/2025/www.theodinproject.com/lessons/foundations-motivation-and-mindset%20.html#what-to-do-when-youre-stuck)
-   Manage your [study time optimall](http://localhost:22022/Public/Downloads/2025/www.theodinproject.com/lessons/foundations-motivation-and-mindset%20.html#managing-your-study-time)y
-   [Rabbit hole](http://localhost:22022/Public/Downloads/2025/www.theodinproject.com/lessons/foundations-motivation-and-mindset%20.html#pitfalls-to-avoid)

# Item-3

## **Week 2 Readings & Other Materials**

### **Read**

Make sure you read the following resources. Write notes in your notebook of important aspects. Make note of unfamiliar terms or concepts. Ask questions to yourself, classmates or instructor.

-   Read: "[The JS Handbook"](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064039?wrap=1) by Flavio Copes from section 1 (Introduction and history) through 14 (Arrays).
-   Read "[Eloquent JavaScript"](http://localhost:22022/Public/Downloads/Full%20Stack%20Web%20Development/Readings/Digital%20Books/JavaScript/Eloquent_JavaScript.pdf), 3d edition by Marijn Haverbeke,  introduction as well as chapter 1. The summary of the chapter is on page 20. 
-   Read Odin Project [JavaScript Foundations variables and operators.](http://localhost:22022/public/Downloads/2025/www.theodinproject.com/lessons/foundations-variables-and-operators.html)

### **Watch**

The following videos are located in C:\\Users\\Public\\Videos\\RAW-VIDEOS\\MSjavascriptforbeginners

-   This is a list of some videos you can watch (if you haven't done so yet) from the series 'Tutorial For Beginners" by Bucky Roberts:
    
    1.  [Getting started.](http://localhost:22022/Public/Videos/RAW-VIDEOS/MSjavascriptforbeginners/Beginning%20the%20Beginner's%20series%20%5B1%20of%2051%5D%20_%20JavaScript%20for%20Beginners-_EDM5aPVLmo.mp4)
    2.  [What is JavaScript.](http://localhost:22022/Public/Videos/RAW-VIDEOS/MSjavascriptforbeginners/What%20Is%20JavaScript%20%5B2%20of%2051%5D%20_%20JavaScript%20for%20Beginners-Q_CRM2lXXBg.mp4)
    3.  [Runnin JavaScript.](http://localhost:22022/Public/Videos/RAW-VIDEOS/MSjavascriptforbeginners/Running%20JavaScript%20-%20browser%20or%20server%20%5B3%20of%2051%5D%20_%20JavaScript%20for%20Beginners-tGOxIKstXiA.mp4)
    4.  [Creating your first app.](http://localhost:22022/Public/Videos/RAW-VIDEOS/MSjavascriptforbeginners/Creating%20your%20first%20application%20%5B6%20of%2051%5D%20_%20JavaScript%20for%20Beginners-nQu2bbh4Vyc.mp4)
    5.  [Comments.](http://localhost:22022/Public/Videos/RAW-VIDEOS/MSjavascriptforbeginners/Comments%20%5B7%20of%2051%5D%20_%20JavaScript%20for%20Beginners-Wm89TVXGflk.mp4)
    6.  [More comments.](http://http//localhost:22022/Public/Videos/RAW-VIDEOS/MSjavascriptforbeginners/Demo%20-%20Comments%20%5B8%20of%2051%5D%20_%20JavaScript%20for%20Beginners-h3HyK2k3cZ4.mp4)

### **QUESTIONS**

1.  What is JavaScript
2.  What is a variable
3.  How many data types are in JS

# Item-4
## The real difference betwween Number() vs parstInt() or parseFloat()

```javascript
// parseInt stops at the first non-numeric character
parseInt("42px")      // 42   ← useful for CSS values
parseInt("3.9")       // 3    ← truncates, does not round
parseInt("10", 2)     // 2    ← second argument is the BASE (binary here)
parseInt("")          // NaN

// Number converts the whole string — all or nothing
Number("42px")        // NaN  ← strict, no partial parsing
Number("3.9")         // 3.9  ← keeps decimals
Number("")            // 0    ← gotcha — empty string becomes 0
Number(true)          // 1
Number(false)         // 0
Number(null)          // 0    ← another gotcha
Number(undefined)     // NaN
```

---

## The empty string gotcha is the most dangerous

```javascript
// user clears the input field
const input = document.querySelector("input").value; // ""

Number(input)    // 0  ← silently wrong, no error
parseInt(input)  // NaN ← at least honest about the failure
```

---

## Current best practice

For input values specifically — use `Number()` with an explicit check:

```javascript
const val = Number(input.value);
if (isNaN(val)) {
  // handle bad input
}
```

Or the modern way with numeric conversion and validation together:

```javascript
// most explicit — best for teaching
const val = parseInt(input.value, 10);  // always pass the base
if (isNaN(val) || val < 1 || val > 12) {
  // handle invalid
}
```

---

## Rule of thumb

| Situation | Use |
|---|---|
| Integer from user input | `parseInt(val, 10)` |
| Decimal from user input | `parseFloat(val)` |
| Converting known-safe values | `Number(val)` |
| CSS values like `"42px"` | `parseInt(val, 10)` |
| Empty string is a valid 0 | `Number(val)` — but document why |

> Always pass the base `10` to `parseInt` — without it, older browsers guessed the base from the string format, and `parseInt("010")` returned `8` (octal). Modern browsers fixed this but the habit protects you.


## Item-99
### Scenario 1: one button, Number(), not parseFloat
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Scenario 1 — Number() + single button</title>
  <style>
    table   { background-color: wheat; border-spacing: 10px; }
    .wrapper { display: table; margin: 0 auto; border: 2px solid black; background: black; padding: 2px; }
  </style>
</head>
<body>
  <h1 style="text-align:center; color:blue">CIW JavaScript Specialist</h1>
  <h2 style="text-align:center; color:green">Mortgage Calculator — Scenario 1</h2>
  <hr>

  <div class="wrapper">
    <form id="frm">
      <table>
        <tr>
          <td><label for="amt">Mortgage amount:</label></td>
          <td><input type="number" id="amt" min="0" step="0.01"></td>
        </tr>
        <tr>
          <td><label for="ir">Yearly interest rate (%):</label></td>
          <td><input type="number" id="ir" min="0" step="0.01"></td>
        </tr>
        <tr>
          <td><label for="term">Term (in years):</label></td>
          <td><input type="number" id="term" min="0" step="1"></td>
        </tr>
        <tr>
          <td><label for="termMonths">Term (in months):</label></td>
          <td><input type="number" id="termMonths" min="0" step="1" placeholder="e.g. 360"></td>
        </tr>
        <tr>
          <td colspan="2" style="text-align:center">
            <button type="button" id="calcBtn">Calculate Monthly Payment</button>
          </td>
        </tr>
        <tr><td colspan="2"><hr></td></tr>
        <tr>
          <td><label for="payment">Monthly payment:</label></td>
          <td><input type="text" id="payment" readonly></td>
        </tr>
        <tr>
          <td><label for="total">Total payments:</label></td>
          <td><input type="text" id="total" readonly></td>
        </tr>
      </table>
    </form>
  </div>

  <script>
    /*
      Number() vs parseFloat() — what is the difference?

      parseFloat("30px")  → 30     (stops at first non-numeric char)
      Number("30px")      → NaN    (entire string must be a valid number)

      parseFloat("")      → NaN
      Number("")          → 0      ← IMPORTANT DIFFERENCE

      For a number input, the value is always "" (empty) or a valid
      number string — so Number() works correctly here.
      Number("") = 0 triggers the isNaN/zero guard below.

      PRIORITY LOGIC — one button, two term fields:
        Months field filled → use months directly
        Months empty (0)    → fall back to years field × 12
        Both empty          → validation catches it

      CRASH SCENARIO (same as original scenario 1):
        User fills months = 24, leaves years = 0
        → months = 24, used correctly ✓
        User fills years = 30, leaves months = 0
        → months = 0, falls through to years = 30 × 12 = 360 ✓
        User fills BOTH years = 1 AND months = 24
        → months wins (24) — years is ignored
        User fills NEITHER
        → term = 0 → validation alert ✓
    */
    function calcPayment() {
      const amt    = Number(document.getElementById("amt").value);
      const ir     = Number(document.getElementById("ir").value) / 1200;
      const years  = Number(document.getElementById("term").value);
      const months = Number(document.getElementById("termMonths").value);

      // months field takes priority — if filled use it directly
      // otherwise convert years to months
      // Number("") = 0 so an empty field naturally falls through
      const term = months > 0 ? months : years * 12;

      if (!amt || !ir || !term) {
        alert("Please enter valid values in all fields.");
        return;
      }

      let total = 1;
      for (let i = 0; i < term; i++) {
        total *= (1 + ir);
      }

      const mp = amt * ir / (1 - (1 / total));
      document.getElementById("payment").value = Math.round(mp * 100) / 100;
      document.getElementById("total").value   = Math.round(mp * term * 100) / 100;
    }

    document.getElementById("calcBtn").addEventListener('click', calcPayment);
  </script>
</body>
</html>
```
## Item-98
### Scenario 1: using parseFloat, two buttons
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Scenario 1 — Months input, years unchanged (can crash)</title>
  <style>
    table { background-color: wheat; border-spacing: 10px; }
    .wrapper { display: table; margin: 0 auto; border: 2px solid black; background: black; padding: 2px; }
  </style>
</head>
<body>
  <h1 style="text-align:center; color:blue">CIW JavaScript Specialist</h1>
  <h2 style="text-align:center; color:green">Mortgage Calculator — Scenario 1</h2>
  <h4 style="text-align:center; color:red">
    ⚠ Months input added but years field is NOT cleared or disabled.<br>
    If both fields have values, years takes priority (months button
    temporarily overrides term for the calculation only).<br>
    If years field is left at a non-numeric value the formula may produce NaN.
  </h4>
  <hr>

  <div class="wrapper">
    <form id="frm">
      <table>
        <tr>
          <td><label for="amt">Mortgage amount:</label></td>
          <td><input type="number" id="amt" min="0" step="0.01"></td>
        </tr>
        <tr>
          <td><label for="ir">Yearly interest rate (%):</label></td>
          <td><input type="number" id="ir" min="0" step="0.01"></td>
        </tr>
        <tr>
          <td><label for="term">Term (in years):</label></td>
          <td><input type="number" id="term" min="0" step="1"></td>
        </tr>
        <tr>
          <td>
            <!-- NEW: months input sits alongside years — no link between them -->
            <label for="termMonths">Term (in months):</label>
          </td>
          <td><input type="number" id="termMonths" min="0" step="1" placeholder="e.g. 360"></td>
        </tr>
        <tr>
          <td colspan="2" style="text-align:center">
            <button type="button" id="calcYears">Calculate (use Years)</button>
            &nbsp;
            <!-- NEW button: uses months field instead of years field -->
            <button type="button" id="calcMonths">Calculate (use Months)</button>
          </td>
        </tr>
        <tr><td colspan="2"><hr></td></tr>
        <tr>
          <td><label for="payment">Monthly payment:</label></td>
          <td><input type="text" id="payment" readonly></td>
        </tr>
        <tr>
          <td><label for="total">Total payments:</label></td>
          <td><input type="text" id="total" readonly></td>
        </tr>
      </table>
    </form>
  </div>

  <script>
    /*
      SCENARIO 1 — MINIMUM CHANGE, MAXIMUM RISK
      ─────────────────────────────────────────
      A second button reads from the months field directly.
      The years field is left completely alone.

      CRASH SCENARIO:
        - User types 24 in months, leaves years empty or 0
        - calcMonths uses termMonths correctly → works
        - But if user then clicks calcYears with years=0:
            term = 0 * 12 = 0
            total = (1+ir)^0 = 1
            mp = amt * ir / (1 - 1/1) = amt * ir / 0 → Infinity or NaN
        - The result field shows "Infinity" — ugly but does not crash the browser

      KEY LESSON: two independent inputs with no coordination = inconsistent state
    */

    function calcPayment(termInMonths) {
      const amt  = parseFloat(document.getElementById("amt").value);
      const ir   = parseFloat(document.getElementById("ir").value) / 1200;
      const term = termInMonths;

      if (isNaN(amt) || isNaN(ir) || isNaN(term) || term === 0) {
        alert("Please enter valid numbers in all fields.");
        return;
      }

      let total = 1;
      for (let i = 0; i < term; i++) {
        total *= (1 + ir);
      }

      const mp = amt * ir / (1 - (1 / total));
      document.getElementById("payment").value = Math.round(mp * 100) / 100;
      document.getElementById("total").value   = Math.round(mp * term * 100) / 100;
    }

    // original button — reads years field, converts to months
    document.getElementById("calcYears").addEventListener('click', () => {
      const years = parseFloat(document.getElementById("term").value);
      calcPayment(years * 12); // may produce NaN/Infinity if years=0 or empty
    });

    // new button — reads months field directly, ignores years
    document.getElementById("calcMonths").addEventListener('click', () => {
      const months = parseFloat(document.getElementById("termMonths").value);
      calcPayment(months);
    });
  </script>
</body>
</html>
```

## Item-97
### Scenario 2: parseFloat, two buttons
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Scenario 2 — Months input disables/zeroes years</title>
  <style>
    table { background-color: wheat; border-spacing: 10px; }
    .wrapper { display: table; margin: 0 auto; border: 2px solid black; background: black; padding: 2px; }
    input:disabled { background-color: #ddd; color: #999; cursor: not-allowed; }
    .mode-label { text-align: center; font-weight: bold; color: darkblue; padding: 4px; }
  </style>
</head>
<body>
  <h1 style="text-align:center; color:blue">CIW JavaScript Specialist</h1>
  <h2 style="text-align:center; color:green">Mortgage Calculator — Scenario 2</h2>
  <h4 style="text-align:center; color:darkgreen">
    Switching to months mode disables the years field (sets it to 0).<br>
    Switching back to years mode re-enables it and disables months.
  </h4>
  <hr>

  <div class="wrapper">
    <form id="frm">
      <table>
        <tr>
          <td><label for="amt">Mortgage amount:</label></td>
          <td><input type="number" id="amt" min="0" step="0.01"></td>
        </tr>
        <tr>
          <td><label for="ir">Yearly interest rate (%):</label></td>
          <td><input type="number" id="ir" min="0" step="0.01"></td>
        </tr>

        <!-- YEARS ROW — active by default -->
        <tr id="yearsRow">
          <td><label for="term">Term (in years):</label></td>
          <td><input type="number" id="term" min="0" step="1"></td>
        </tr>

        <!-- MONTHS ROW — disabled by default -->
        <tr id="monthsRow">
          <td><label for="termMonths">Term (in months):</label></td>
          <td>
            <input type="number" id="termMonths" min="0" step="1"
                   placeholder="e.g. 360" disabled>
          </td>
        </tr>

        <tr>
          <td colspan="2" style="text-align:center">
            <!--
              Toggle buttons — only ONE mode active at a time.
              Active mode button is disabled (you can't switch to a mode
              you are already in).
            -->
            <button type="button" id="useYearsBtn" disabled>Use Years</button>
            &nbsp;
            <button type="button" id="useMonthsBtn">Use Months</button>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <button type="button" id="calcBtn">Calculate</button>
          </td>
        </tr>
        <tr><td colspan="2"><hr></td></tr>
        <tr>
          <td><label for="payment">Monthly payment:</label></td>
          <td><input type="text" id="payment" readonly></td>
        </tr>
        <tr>
          <td><label for="total">Total payments:</label></td>
          <td><input type="text" id="total" readonly></td>
        </tr>
      </table>
    </form>
  </div>
  <p style="text-align:center" id="modeLabel">Mode: <strong>Years</strong></p>

  <script>
    /*
      SCENARIO 2 — MUTUALLY EXCLUSIVE INPUTS
      ───────────────────────────────────────
      Only ONE of years/months is active at a time.
      Switching mode:
        - disables the inactive field (grey, uneditable)
        - clears its value to 0 to prevent stale data being used
        - enables the active field

      WHY DISABLE RATHER THAN HIDE?
        Hiding (display:none) is also valid but disabling makes the
        inactive field visible so the student can see both exist.
        It also communicates to the user "this field exists but is
        not relevant right now."

      CRASH PREVENTION:
        The years field being 0 when in months mode does NOT matter
        because calcPayment() reads the ACTIVE field only — it never
        looks at the disabled field.
    */

    // track current mode — 'years' or 'months'
    let mode = 'years';

    const termYears  = document.getElementById("term");
    const termMonths = document.getElementById("termMonths");
    const useYears   = document.getElementById("useYearsBtn");
    const useMonths  = document.getElementById("useMonthsBtn");
    const modeLabel  = document.getElementById("modeLabel");

    function switchToYears() {
      mode = 'years';

      // enable years, disable months
      termYears.disabled  = false;
      termMonths.disabled = true;
      termMonths.value    = ''; // clear stale value

      // toggle button states
      useYears.disabled  = true;  // already in years mode
      useMonths.disabled = false;

      modeLabel.innerHTML = 'Mode: <strong>Years</strong>';
    }

    function switchToMonths() {
      mode = 'months';

      // enable months, disable years
      termMonths.disabled = false;
      termYears.disabled  = true;
      termYears.value     = '0'; // set to 0 — clearly not in use

      // toggle button states
      useMonths.disabled = true;  // already in months mode
      useYears.disabled  = false;

      modeLabel.innerHTML = 'Mode: <strong>Months</strong>';
    }

    function calcPayment() {
      const amt = parseFloat(document.getElementById("amt").value);
      const ir  = parseFloat(document.getElementById("ir").value) / 1200;

      // read from the ACTIVE field only — the disabled field is ignored
      const term = mode === 'years'
        ? parseFloat(termYears.value) * 12   // convert years → months
        : parseFloat(termMonths.value);       // already in months

      if (isNaN(amt) || isNaN(ir) || isNaN(term) || term === 0) {
        alert("Please enter valid values in all fields.");
        return;
      }

      let total = 1;
      for (let i = 0; i < term; i++) {
        total *= (1 + ir);
      }

      const mp = amt * ir / (1 - (1 / total));
      document.getElementById("payment").value = Math.round(mp * 100) / 100;
      document.getElementById("total").value   = Math.round(mp * term * 100) / 100;
    }

    useYears.addEventListener('click', switchToYears);
    useMonths.addEventListener('click', switchToMonths);
    document.getElementById("calcBtn").addEventListener('click', calcPayment);
  </script>
</body>
</html>
```


## Item-97 
### Scenario 3: synced with two buttons
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Scenario 3 — Bidirectional sync: months ↔ years</title>
  <style>
    table { background-color: wheat; border-spacing: 10px; }
    .wrapper { display: table; margin: 0 auto; border: 2px solid black; background: black; padding: 2px; }
    .sync-note { font-size: 0.85rem; color: #555; font-style: italic; }
    input.synced { background-color: #fffde7; } /* subtle yellow when synced */
  </style>
</head>
<body>
  <h1 style="text-align:center; color:blue">CIW JavaScript Specialist</h1>
  <h2 style="text-align:center; color:green">Mortgage Calculator — Scenario 3</h2>
  <h4 style="text-align:center; color:darkgreen">
    Both fields stay in sync automatically.<br>
    Type 24 months → years shows 2 &nbsp;|&nbsp; Type 1.5 years → months shows 18
  </h4>
  <hr>

  <div class="wrapper">
    <form id="frm">
      <table>
        <tr>
          <td><label for="amt">Mortgage amount:</label></td>
          <td><input type="number" id="amt" min="0" step="0.01"></td>
        </tr>
        <tr>
          <td><label for="ir">Yearly interest rate (%):</label></td>
          <td><input type="number" id="ir" min="0" step="0.01"></td>
        </tr>
        <tr>
          <td>
            <label for="term">Term (years):</label><br>
            <span class="sync-note">← updates when months change</span>
          </td>
          <td><input type="number" id="term" min="0" step="0.5"></td>
        </tr>
        <tr>
          <td>
            <label for="termMonths">Term (months):</label><br>
            <span class="sync-note">← updates when years change</span>
          </td>
          <td><input type="number" id="termMonths" min="0" step="1" placeholder="e.g. 360"></td>
        </tr>
        <tr>
          <td colspan="2" style="text-align:center">
            <button type="button" id="calcBtn">Calculate Monthly Payment</button>
          </td>
        </tr>
        <tr><td colspan="2"><hr></td></tr>
        <tr>
          <td><label for="payment">Monthly payment:</label></td>
          <td><input type="text" id="payment" readonly></td>
        </tr>
        <tr>
          <td><label for="total">Total payments:</label></td>
          <td><input type="text" id="total" readonly></td>
        </tr>
      </table>
    </form>
  </div>

  <script>
    /*
      SCENARIO 3 — BIDIRECTIONAL SYNC
      ────────────────────────────────
      Both fields are always enabled and always in sync.
      Editing either one automatically updates the other.

      CONVERSION:
        months → years:  years  = months / 12
        years  → months: months = years  * 12

      ROUNDING DECISIONS:
        years  field: round to 2 decimal places  (1.5 years, 2.25 years)
        months field: round to nearest integer   (18 months, not 17.99999)

      THE INFINITE LOOP TRAP:
        If we listen to 'input' on years → update months
        and also listen to 'input' on months → update years
        updating one field triggers the other's listener
        which triggers the first listener again → infinite loop

        FIX: use a guard flag 'isSyncing'
        When one field is being synced, set isSyncing = true
        The other field's listener checks the flag and skips if true
        After syncing, reset isSyncing = false

      WHY STEP="0.5" ON YEARS?
        Allows entering 0.5 (6 months), 1.5 (18 months) etc.
        without the browser rounding to integers.
    */

    const termYears  = document.getElementById("term");
    const termMonths = document.getElementById("termMonths");

    // guard flag — prevents the two input listeners triggering each other
    let isSyncing = false;

    // when years field changes → update months field
    termYears.addEventListener('input', () => {
      if (isSyncing) return; // being updated by months listener — skip

      const years = parseFloat(termYears.value);
      if (isNaN(years) || years < 0) {
        termMonths.value = '';
        return;
      }

      isSyncing = true;
      // months = years * 12, rounded to nearest whole month
      termMonths.value = Math.round(years * 12);
      isSyncing = false;
    });

    // when months field changes → update years field
    termMonths.addEventListener('input', () => {
      if (isSyncing) return; // being updated by years listener — skip

      const months = parseFloat(termMonths.value);
      if (isNaN(months) || months < 0) {
        termYears.value = '';
        return;
      }

      isSyncing = true;
      // years = months / 12, rounded to 2 decimal places
      // toFixed(2) returns a string — parseFloat removes trailing zeros
      termYears.value = parseFloat((months / 12).toFixed(2));
      isSyncing = false;
    });

    // ── EXAMPLES OF SYNC BEHAVIOR ────────────────────────────
    // User types 24 in months → years = 24/12 = 2        → shows "2"
    // User types 30 in months → years = 30/12 = 2.5      → shows "2.5"
    // User types 18 in months → years = 18/12 = 1.5      → shows "1.5"
    // User types  7 in months → years = 7/12  = 0.58333  → shows "0.58"
    //   → then years syncs back: 0.58 * 12 = 6.96 → rounds to 7 ✓
    //
    // User types 2   in years → months = 2   * 12 = 24   → shows "24"
    // User types 1.5 in years → months = 1.5 * 12 = 18   → shows "18"
    // User types 0.5 in years → months = 0.5 * 12 = 6    → shows "6"
    // User types 1.3 in years → months = 1.3 * 12 = 15.6 → rounds to "16"

    function calcPayment() {
      const amt = parseFloat(document.getElementById("amt").value);
      const ir  = parseFloat(document.getElementById("ir").value) / 1200;

      // both fields are synced — either one gives the same result
      // we prefer months because the formula uses months directly
      // fall back to years if months is empty
      let term = parseFloat(termMonths.value);
      if (isNaN(term)) {
        const years = parseFloat(termYears.value);
        term = isNaN(years) ? NaN : Math.round(years * 12);
      }

      if (isNaN(amt) || isNaN(ir) || isNaN(term) || term === 0) {
        alert("Please enter valid values in all fields.");
        return;
      }

      let total = 1;
      for (let i = 0; i < term; i++) {
        total *= (1 + ir);
      }

      const mp = amt * ir / (1 - (1 / total));
      document.getElementById("payment").value = Math.round(mp * 100) / 100;
      document.getElementById("total").value   = Math.round(mp * term * 100) / 100;
    }

    document.getElementById("calcBtn").addEventListener('click', calcPayment);
  </script>
</body>
</html>
```

