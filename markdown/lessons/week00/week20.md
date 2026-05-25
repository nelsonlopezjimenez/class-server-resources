---
publishDate: 2026-05-25
description: "JavaScript Objects"
title: "JavaScript Objects"
week: 20
section: 2
---

# Course Weekly Breakdown:

<details>Content<pre>
**Week 1:** Introduction to the course. Syllabus content. Introduction to JavaScript: brief history and syntax 
**Week 2:** Variables and Data Types: Primitive/Object, Strings.Operators and Expressions
**Week 3:** Functions and Debugging
**Week 4:** Controling Program Flow, Arrays, Objects
**Week 5:** Loops, DOM, more objects, DOM, midterm
**Week 6:** More objects, DOM Manipulation.

**Week 7:** Form Validation, Maps
**Week 8:** JavaScript Libraries and Frameworks
**Week 9:** Intro to Web APIs
**Week 10:** Final Assignment and Exam</pre>
</details>

## Previously: Objects, DOM manipulation, Forms, jasmine exercises, challenge tracker

1. The String Object
1. The Array Object
1. The map() Method
1. Changing HTML on the Fly
1. Interactive Forms
1. Form Validation
1. Common form Security Errors
1. Jasmine exercises, challenge tracker

## Week 8: More Objects, DOM manipulation, jsFun repo

`jsFun` is inspired by Turing School of Software and Design's exercise of the same name, where you can have FUN working on your JavaScript FUNdamentals. This jsFUN-Basic test suite will challenge your ability to manipulate simple JavaScript data types.

One of the hardest aspects of learning any programming language is the syntax, a.k.a. the structure and grammar for a spoken language such as English, French, or Spanish. The more time you spend reading and writing a particular language, the quicker you will begin to understand and pick up on how it should look when it is written well. As Malcolm Gladwell famously stated, you can never truly begin to master something until you've put at least 10,000 hours into practicing it.

- Level 1 exercises will test your ability to find the right built in methods to complete the given task.
- Level 2 exercises will test your ability to understand the logic behind how those methods work.
- Level 3 exercises will test your ability to think logically and handle edge cases.
- Level 4 exercises will test your knowledge of best practices and advanced coding techniques like arrow functions, destructing, and use of ternary operators. For this level you will need to have the instructor or a classroom assistant look at your code.

### Setup Instructions (Using GitTea aka our version of GitHub)

In order to begin working with the jsFUN-Basic project directory, you will need to follow the instructions below:

1. Fork this repository [jsFun-Basic](http://192.168.1.28:3000/CIS_Team_EDCC/jsFun-Basic)
1. After the fork is made click on the blue `Code` button, then copy the URL in the text box
1. In windows navigate to your section 2 folder
1. Right click on section 2 (or if in section 2 folder any white space) and click `open git bash here`.
1. In the terminal type `git clone` then hit `shift+insert` on your keyboard to copy the url
1. Hit enter and clone the repo to your laptop.
1. Open the jsFun-Basic repo folder in file explorer (it should now show up in your section 2 folder).
1. Right click on node_modules.7z file, select 7zip and extract here.
1. Open a new terminal using the VS Code taskbar with `... > Terminal > New Terminal` or the keyboard shortcut ``Ctrl+Shift+`.
1. Run the command `npm start`. This will open the Vitest User Interface in your default browser, giving you a handy dashboard to view all the code challenges.

**Notes:**

- This must be setup in class. If you are having issues with downloading or running the application ask for assistance.
- Through out the week as you finish a level, file, or feel the need to, create a commit of your code. To do this follow these steps:
  - In the VSCode extension menu (on the left) look for the icon that looks like a weird y with circle (nodes) on it, click this icon
  - Put in a meaning ful message in the text box at the top. "Did something", "New Commit" ec are not meaningful messages. "Passed all level 1 test", "Finished strings.js" etc are meaningful messages
  - Click the `+` sign bellow the blue Commit button to stage all of your changes
  - Click commit (and click confirm if a secondary box pops up). This stores your changes as a version that can be restored or switched to if needed, as a local copy only (i.e. only on your laptop)

**Note:** All steps up to here can be completed when your laptop is not docked in the classroom. For the next steps make sure your laptop is docked in the classroom.

- How to sync with GiTea's server
  - At this point you should see a blue "Sync #" number rather than a commit. If you do see a commit button go back and repeat the steps above to make a new commit.
  - Click the blue sync button and give it a few moments to upload your commits to the repository server.
  - You can verify that it is uploaded by logging into GiTea and seeing if the new commit(s) show up.

**Important** these two steps are very important. If you have any question on how to fork, clone, commit or sync a repository let the instructor or a classroom assistant know.

### Using jsFUN Basic

The long-term purpose of jsFUN is to introduce you to test suites. Test suites help you, the developer, write code that produces the results you want while also planning for edge cases (a rare situation where the user inputs an incorrect data type or misses a form field completely), throwing errors, and DOM updates and manipulation. From structuring your data at application conceptualization, to implementing new features on existing projects, test suites are your first step towards creating successful code.

### Challenges

You will find 4 files with problems in them that need to be solved. These files are:

1. strings.js
1. numbers.js
1. arrays.js
1. objects.js

Don't feel like you need to finish all test in one file before moving to another file. You may find that some of the string problems are too complex or hard to wrap your mind around. That is okay, move on to numbers and solve all of those ones you can, then on to arrays and objects. When you have done a few from them you may be able to take the knowledge you learned and go back and solve more string functions.

### Example Steps to complete:

1. In VSCode navigate to the file you want to write code for: src/functions-YourAnswersHere/numbers.js, strings.js, etc and double click on it. Read the top of each file carefully.
1. Read the comments for each function. Skipping any function that states that it has no test for the level you are working on.
1. Using comments write pseudo code in the function block, that explains in plain english what you want to accomplish.
1. Implement Javascript code that will pass the test.

```js
/**
 * Level 1 - No built in methods to test.
 *
 * Level 2 - Return a string that says "Hello 'name of person'!", i.e. if name equals "John", it would return "Hello John!"
 *
 * Level 3 - Implement level 1-2, but if no name is provided default it to 'friend'
 *
 *  Level 4 - Change the entire function to be an ES6 complaint arrow function object, and update any code to use best practices.
 *
 * @param {string} name The string containing a name (optional)
 * @returns {string} A string that says "Hello 'name of person'!"
 */
export const helloWithName = (name) => {
  // Pseudo Code Example
  // Take the name, and add "Hello" and an "!" to it
  // return new string

  const str = "Hello " + name + "!";
  return str;
};
```

5. Check the Vite Test Website and see if your test passed.

- If the test did not pass go to the section for that test and see why it failed
  1. In the left menu click on the test suite (In this case src/test/strings.test.js)
  1. In the right section scroll up/down to find the test you are writing an answer to (in this case helloWithName).
  1. Read the results of the test, it will let you know what it received and what was expected, use this to refine your code until it passes the test.

### Testing in VSCode

You may also run test in VSCODE rather then looking at the website. To do this you will need to make sure the VitTest extension is installed. If it is you should see a chemical flask icon on the left Icon bar. If it is not installed ask a Classroom assistant or Dr. Lopez for assistance on getting it installed.

Note that this extension will show all test regardless of level and while it will skip actually testing them this can be confusing.

1. Click on the flask. It should show a list of 0/60 test with a red circle and X. This means zero test pass.
1. Click on src, then on test. This will show the three files being tested (arrays, objects, numbers, and strings).
1. Hover over the file you wish to work on (in the example above it would be strings.test.js) and click on the far right icon, it looks like an eye (half circle above a smaller circle). This turns on continuos run. Now every time you make a save the test suite will rerun the test in that file and show green for any that pass.

### Asking for Assistance

Before asking the instructor, or a classroom assistant, for help on a task utilize the resources listed for previous weeks.

When asking for help you should be able to answer these questions:

1. What are you trying to accomplish?
1. What have you tried so far?
1. Where have you looked for assistance?

## Finished??

Congratulations, if you finished all 1-3 level test in the four files you are now ready to move on to more advanced functions that test your understand of advanced Object, and Array manipulation and iterating, as well as learning about scope, classes, and other concepts.

Go to [jsFUn-Master](http://192.168.1.28:3000/CIS_Team_EDCC/jsFun-Master) and fork your own copy of jsFun-Master.

## Review

```html
<!DOCTYPE html>
<!--
  ============================================================
  Lesson 8 Application Project — JavaScript Objects
  ============================================================
  TOPICS COVERED:
    1. Object Literals      — the simplest way to create one object
    2. Object Methods       — functions stored as properties, using `this`
    3. Getter Properties    — computed properties accessed like fields
    4. ES6 Classes          — the modern blueprint for many similar objects
    5. Arrays of Objects    — storing and iterating multiple object instances
    6. DOM Manipulation     — displaying results in the page (no alert / document.write)

  HOW TO READ THE COMMENTS:
    [BEGINNER]  — explains the concept for first-time learners
    [ADVANCED]  — explains the "why" and deeper nuances for experienced readers
  ============================================================
-->
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <!--
    [BEGINNER]  charset="UTF-8" lets the browser handle any character —
                accented letters, emoji, symbols, etc. — correctly.
    [ADVANCED]  Must appear within the first 1024 bytes of the document
                so the parser can detect the encoding before reading text.
  -->

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!--
    [BEGINNER]  Makes the page look correct on phones and tablets.
    [ADVANCED]  Without this, mobile browsers render at ~980 px then scale
                down, causing blurry or mis-sized layouts.
  -->

  <title>Lesson 8 – JavaScript Objects</title>

  <style>
    /* ── Page-level resets & typography ─────────────────────────── */
    *, *::before, *::after {
      box-sizing: border-box;  /* padding/border included in element width */
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background-color: #f0f4f8;
      color: #1a202c;
      padding: 2rem 1rem;
      line-height: 1.6;
    }

    /* ── Layout container ────────────────────────────────────────── */
    .container {
      max-width: 820px;
      margin: 0 auto;
    }

    h1 {
      font-size: 1.8rem;
      margin-bottom: 0.25rem;
      color: #2b6cb0;
    }

    .subtitle {
      color: #718096;
      margin-bottom: 2rem;
      font-size: 0.95rem;
    }

    /* ── Section cards ───────────────────────────────────────────── */
    .card {
      background: #fff;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }

    .card h2 {
      font-size: 1.15rem;
      color: #2d3748;
      margin-bottom: 1rem;
      border-bottom: 2px solid #bee3f8;
      padding-bottom: 0.4rem;
    }

    /* ── Output areas ────────────────────────────────────────────── */
    .output {
      background: #f7fafc;
      border-left: 4px solid #63b3ed;
      border-radius: 4px;
      padding: 0.75rem 1rem;
      margin-top: 0.75rem;
      min-height: 2rem;
      font-size: 0.95rem;
    }

    /* ── Buttons ─────────────────────────────────────────────────── */
    .btn {
      display: inline-block;
      margin-top: 0.75rem;
      padding: 0.5rem 1.25rem;
      background-color: #2b6cb0;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 0.95rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .btn:hover {
      background-color: #2c5282;
    }

    /* ── Data table (students array) ─────────────────────────────── */
    table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 0.5rem;
      font-size: 0.9rem;
    }

    th, td {
      text-align: left;
      padding: 0.4rem 0.75rem;
      border-bottom: 1px solid #e2e8f0;
    }

    th {
      background-color: #ebf8ff;
      color: #2b6cb0;
      font-weight: 600;
    }
  </style>
</head>

<body>
  <div class="container">

    <h1>Lesson 8 — JavaScript Objects</h1>
    <p class="subtitle">
      Three ways to create objects: object literals, object methods &amp; getters,
      and ES6 classes.
    </p>

    <!-- ── Section 1: Object Literal ───────────────────────────── -->
    <div class="card">
      <h2>1 · Object Literal</h2>
      <p>
        An <em>object literal</em> is the quickest way to create a single
        object — wrap key-value pairs in curly braces <code>{ }</code>.
      </p>
      <div class="output" id="car-output">
        <!-- filled by JavaScript below -->
      </div>
    </div>

    <!-- ── Section 2: Object Methods & Getter ───────────────────── -->
    <div class="card">
      <h2>2 · Object Methods &amp; Getters</h2>
      <p>
        A <em>method</em> is a function stored as a property.
        A <em>getter</em> (<code>get</code>) lets you access a computed value
        as if it were a plain property.
      </p>
      <div class="output" id="person-output">
        <!-- filled after the button is clicked -->
      </div>
      <button class="btn" type="button" id="greetBtn">
        Show Full Name &amp; Greeting
      </button>
    </div>

    <!-- ── Section 3: ES6 Class ─────────────────────────────────── -->
    <div class="card">
      <h2>3 · ES6 Class (Constructor Pattern)</h2>
      <p>
        A <em>class</em> is a reusable blueprint for creating many objects of the
        same shape.  The constructor function pattern from older JavaScript is
        replaced by the <code>class</code> keyword introduced in ES6 (2015).
      </p>
      <div class="output" id="student-output">
        <!-- filled by JavaScript below -->
      </div>
    </div>

    <!-- ── Section 4: Array of Objects ─────────────────────────── -->
    <div class="card">
      <h2>4 · Array of Objects</h2>
      <p>
        Arrays can hold any value — including objects.
        Modern array methods like <code>map()</code> and <code>forEach()</code>
        are preferred over manual indexing.
      </p>
      <div class="output" id="students-array-output">
        <!-- filled by JavaScript below -->
      </div>
    </div>

  </div><!-- /.container -->


  <!--
    ================================================================
    JAVASCRIPT
    ================================================================
    [BEGINNER]  Place your <script> at the END of <body> so that all the
                HTML elements above are already loaded when the script runs.
                (An alternative is adding `defer` to a <script> in <head>.)

    [ADVANCED]  A single consolidated <script> block (instead of several
                scattered ones) is easier to read, debug, and maintain.
                For larger projects, move JS to an external .js file and
                load it with <script src="app.js" defer></script>.
    ================================================================
  -->
  <script>
    /*
     * "use strict" tells the JavaScript engine to apply stricter rules:
     *
     * [BEGINNER]  It prevents common mistakes — for example, accidentally
     *             creating a global variable by forgetting `let` or `const`.
     *
     * [ADVANCED]  Strict mode disables legacy features (with, octal literals,
     *             duplicate parameter names) and is the default inside ES
     *             modules. Always enable it in scripts that aren't modules.
     */
    "use strict";


    /* ============================================================
     * SECTION 1 — Object Literal
     * ============================================================
     *
     * [BEGINNER]  Object literal syntax:
     *               const myObject = { key: value, key2: value2 };
     *             Each key-value pair is called a "property".
     *             Keys are strings (no quotes needed unless they contain
     *             spaces or special characters).
     *
     * [ADVANCED]  Object literals produce a single plain object whose
     *             prototype is Object.prototype.  They are perfect for
     *             one-off data bags (config objects, function options, etc.).
     *             For creating multiple instances of the same shape, use a
     *             class (see Section 3).
     */

    // `const` means the variable `car` always points to this object.
    // [BEGINNER]  Use `const` by default; only use `let` when you need
    //             to reassign the variable itself later.
    // [ADVANCED]  `const` is block-scoped and prevents re-binding, but it
    //             does NOT make the object immutable — properties can still
    //             change.  Use Object.freeze() for deep immutability.
    const car = {
      name:   'Fiat',
      model:  '200',
      weight: '850 kg',
      color:  'white',
    };
    // ↑ [ADVANCED]  The trailing comma after the last property is valid
    //   (and recommended) to make future additions or reordering easier
    //   in version control diffs.


    /* ============================================================
     * SECTION 2 — Object with Methods & a Getter
     * ============================================================
     *
     * [BEGINNER]  A "method" is just a function stored inside an object.
     *             Inside the method, `this` refers to the object itself,
     *             so you can read the object's own properties.
     *
     * [ADVANCED]  Regular function expressions and method shorthand
     *             (greet() { }) both create methods with a dynamic `this`
     *             binding determined by how the function is called.
     *             Arrow functions do NOT have their own `this` — avoid
     *             them as object methods when you need `this`.
     *             A `get` accessor lets callers read a computed value
     *             without calling a function explicitly (person.fullName
     *             instead of person.fullName()).
     */
    const person = {
      firstName:  'Dan',
      lastName:   'Brown',
      contactNo:  '+123456789',
      age:        28,

      // Method shorthand (ES6+) — equivalent to greet: function() { ... }
      greet() {
        // Template literal: backtick strings that embed expressions with ${}
        // [BEGINNER]  Use template literals instead of "Hello " + name;
        //             they are easier to read and less error-prone.
        // [ADVANCED]  Template literals also support multi-line strings and
        //             tagged templates for advanced formatting/sanitisation.
        return `Hello, ${this.firstName}! Nice to meet you.`;
      },

      // Getter — accessed as person.fullName (no parentheses)
      // [BEGINNER]  Think of a getter as a "virtual" property that is
      //             computed on the fly when you read it.
      // [ADVANCED]  Getters are defined on the object's property descriptor
      //             with { get: fn }.  Pair them with setters (set) to
      //             control reads AND writes.
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
    };


    /* ============================================================
     * SECTION 3 — ES6 Class (replaces the old constructor function)
     * ============================================================
     *
     * [BEGINNER]  A class is a template (blueprint) for creating many
     *             objects that share the same properties and methods.
     *             Use `new ClassName(...)` to create each instance.
     *
     * [ADVANCED]  ES6 classes are syntactic sugar over JavaScript's
     *             prototype-based inheritance model.  Methods defined
     *             inside the class body are added to the prototype, not
     *             copied to each instance, which saves memory.
     *
     *             Class names use PascalCase by convention (Student, not
     *             student), distinguishing them from regular functions.
     *
     * ORIGINAL CODE for comparison:
     *   function student(id, name, std) {   // ← old constructor function
     *       this.id   = id;
     *       this.name = name;
     *       this.std  = std;
     *   }
     *   var student1 = new student(103, "Sophia", 10);
     */
    class Student {

      // The constructor runs automatically when you call `new Student(...)`.
      // [BEGINNER]  List all the data a new student needs as parameters.
      // [ADVANCED]  ES2022 class fields let you declare instance properties
      //             at the top of the class body for better readability, e.g.:
      //               id;  name;  grade;
      constructor(id, name, grade) {
        this.id    = id;
        this.name  = name;
        this.grade = grade;   // renamed from `std` for clarity
      }

      // Instance method — available on every Student object.
      // [BEGINNER]  You call it on an instance: student1.describe()
      // [ADVANCED]  Prototype methods are shared across all instances via
      //             Student.prototype.describe, so they exist only once in memory.
      describe() {
        return `Hi! I am ${this.name} and my student ID is: ${this.id}.`;
      }

      // Static method — called on the CLASS, not on an instance.
      // [BEGINNER]  Think of it as a helper that belongs to Student as a
      //             whole, not to any one student.  Usage: Student.fromData(...)
      // [ADVANCED]  Static methods are often used as factory methods — an
      //             alternative constructor that creates instances from
      //             different data shapes (e.g., from a plain JS object).
      static fromData({ id, name, grade }) {
        return new Student(id, name, grade);
      }
    }


    /* ============================================================
     * SECTION 4 — Array of Objects
     * ============================================================
     *
     * [BEGINNER]  Arrays can store any type of value, including objects.
     *             Access individual items with their index: array[0], array[1]…
     *             Indexes start at 0, not 1.
     *
     * [ADVANCED]  Prefer declarative array methods (map, filter, find,
     *             forEach, reduce) over manual index access and loops.
     *             They express intent more clearly and are less error-prone.
     */

    // Creating instances of Student
    const student1 = new Student(103, 'Sophia', 10);

    // Array literal containing three Student instances
    const studentsArray = [
      new Student(105, 'Jack',  10),
      new Student(106, 'Jones', 11),
      new Student(107, 'John',  12),
    ];

    // Demonstrating the static factory method — creates a Student from
    // a plain data object (useful when data comes from an API or JSON file)
    const student2 = Student.fromData({ id: 108, name: 'Alice', grade: 11 });


    /* ============================================================
     * DOM MANIPULATION — Display results in the page
     * ============================================================
     *
     * [BEGINNER]  `document.getElementById('some-id')` finds the HTML
     *             element whose `id` attribute matches the string.
     *             Setting `.innerHTML` replaces whatever is inside that element.
     *
     * [ADVANCED]  Prefer `textContent` over `innerHTML` when the string
     *             contains no HTML tags — it avoids potential XSS injection.
     *             For dynamic lists, consider using the DOM API
     *             (createElement + appendChild) for safer, testable code.
     *
     * WHY NOT alert() or document.write()?
     *   • alert()          — blocks the browser until dismissed; poor UX.
     *   • document.write() — destructive after load; deprecated in modern dev.
     *   • DOM manipulation — precise, non-blocking, and the industry standard.
     */

    // ── Helper function ───────────────────────────────────────────
    // [BEGINNER]  A reusable helper avoids repeating the same lookup code.
    // [ADVANCED]  This is an example of the DRY principle (Don't Repeat
    //             Yourself).  The optional-chaining operator (?.) guards
    //             against a null element without needing an explicit if-check.
    function renderTo(elementId, htmlString) {
      const element = document.getElementById(elementId);
      // ?. (optional chaining) — if element is null, nothing crashes
      element?.insertAdjacentHTML('beforeend', htmlString);
    }


    // ── Display: Car (Section 1) ──────────────────────────────────
    // [BEGINNER]  We access object properties with dot notation: object.property
    // [ADVANCED]  Bracket notation (object['property']) is useful when the
    //             property name is dynamic (stored in a variable).
    renderTo('car-output', `
      <strong>Car Object Properties:</strong><br>
      Name: ${car.name} &nbsp;|&nbsp;
      Model: ${car.model} &nbsp;|&nbsp;
      Color: ${car.color} &nbsp;|&nbsp;
      Weight: ${car.weight}
    `);


    // ── Display: Student 1 (Section 3) ───────────────────────────
    renderTo('student-output', `<p>${student1.describe()}</p>`);

    // Show the static factory method result too
    renderTo('student-output', `
      <p>
        Student created via <code>Student.fromData()</code>:
        ${student2.describe()}
      </p>
    `);


    // ── Display: Array of Students (Section 4) ───────────────────
    // [BEGINNER]  Array.map() transforms every item in the array into
    //             something new, returning a brand-new array.
    // [ADVANCED]  map() is a pure higher-order function — it does not
    //             mutate the original array and is composable with
    //             filter(), reduce(), etc.

    // Build a table row for each student using map(), then join into one string
    const tableRows = studentsArray
      .map(s => `
        <tr>
          <td>${s.id}</td>
          <td>${s.name}</td>
          <td>${s.grade}</td>
        </tr>
      `)
      .join('');   // join('') combines the array of strings into one string

    renderTo('students-array-output', `
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `);


    // ── Button: Show greeting & full name (Section 2) ─────────────
    //
    // [BEGINNER]  addEventListener('click', handler) calls the handler
    //             function every time the button is clicked.
    //             This is the modern alternative to onclick="..." in HTML.
    //
    // [ADVANCED]  Separating behaviour (JS) from structure (HTML) is a
    //             core principle of "unobtrusive JavaScript".  It keeps
    //             HTML clean and makes handlers easier to unit-test.
    //             The arrow function ( () => { } ) is used here because
    //             we do NOT need `this` to refer to the button — we already
    //             have `person` in the enclosing scope via closure.
    document.getElementById('greetBtn').addEventListener('click', () => {
      // [BEGINNER]  person.greet() calls the method; person.fullName reads
      //             the getter — both return strings we embed in the template.
      renderTo('person-output', `
        <p>
          <strong>${person.fullName}</strong>: ${person.greet()}
        </p>
      `);

      // Disable the button after first click so output doesn't stack up
      // [ADVANCED]  This is a simple guard; a toggle or state machine would
      //             be more robust in a real application.
      document.getElementById('greetBtn').disabled = true;
    });

  </script>
</body>
</html>

```

## TODO

1. The explanations are in lesson8-readme file. 
1. Serve the file with a server
1. try
```// Type in the console 
car
student1.describe()
studentsArray.map(s => s.name)
```
1. Download the file L08-L11 Browser Extension Exercise.zip. 
1. Follow the instructions on lesson8-11-readme file