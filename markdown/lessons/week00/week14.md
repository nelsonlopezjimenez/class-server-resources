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



