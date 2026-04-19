---
publishDate: 2026-04-02
description: "Introduction to JavaScript, scripting, history, comments, git"
title: "Welcome to Javascript Programming"
week: 13
section: 2
---

# Item 2 - Week 1: Introduction to JavaScript, syllabus, some history
## April 6 to 10 2026

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

Welcome to the CIS Fullstack web Development certificate program. This is the second quarter of a four quarters course consisting of 40 weeks of course work to do. You will learn the necessary skills to develop, create, and deploy a fully functional web based application.

## To be successful in this class, you should plan to:

1. Arrive on time and prepared for class
1. Take an active role in your own learning and understanding of the material
1. Commit twelve hours a week to homework and assignments outside of class.
1. Let me know if material is not clear or when its relevance to the student learning outcomes for the course is not apparent (or when you’re bored out of your mind!).
1. It is also expected that you will treat classmates with respect, avoiding gratuitous arguments,
1. I expect you to take the opportunity to learn from your peers through activities in lecture and section, and I expect you to be respectful and courteous to one another. Finally, I expect you to hold yourself to the highest standards for academic honesty and integrity in your work.

## Course Syllabus

Read the [Course Syllabus](/api/information/syllabus-Q2-apr-2026.md) and [course structure](/api/information/course-structure-section-two.md) to see daily, weekly, grading and lab/assignment expectations.

## Keys to learning Javascript:

Javascript can be overwhelming to new students. Here are some keys to help you get the most out of this section:

- **<u>Practice, Practice, Practice:</u>** Throughout this section the key to learning JavaScript is consistent practice. Don't just do the assignment; you should experiment, try different approaches, and build small projects on your own.
- **<u>Debugging:</u>** Learn to use your browser's developer tools (Console, Elements) to debug your code. This is a crucial skill and can help save many hours of headache tracking down bugs.
- **<u>Double Check Spelling and Casing:</u>** Many issues are due to typing errors. myName and myname are two different variables, and console.log() doesn't exist with in javascript. VSCode will help you catch some of these bugs but not all. Carefully and patiently review your code if you have errors.
- **<u>Don't Get Stuck:</u>** If you’re struggling with a particular concept, don’t spend "too" long on it, this means 10-15 minutes max. If you are struggling for longer than this review the mandatory and optional readings, and if you are still struggling, write the issue down in your notebook then move on. When you come into class you can ask a classroom assistant or Dr. Lopez for assistance.

## Class Information

### Assignment/Labs Expectations:

Each javascript assignment you turn in this section needs to have your name and a brief description of what the script does at the top as a comment:

```js
// John Doe
// This code shows how to create variables
```

It will then need to have code that meets the requirements of the assignment, with comments explaining what the code does. As your skill in coding javascript applications improves you will be able to use less comments but for now over commenting is expected, this allows the instructor and classroom assistants to better understand what you are doing, or attempting to do.

```js
// John Doe
// This code shows how to create variables

// creates a let variable called person with no value.
let person;

// creates a let variable called "myName" with the string "John" that can change value.
let myName = "John";

// creates a const variable called myAge with the number 26, this can not change value
const myAge = 26;

// creates a var variable called legacy with the value "Legacy Code", this the old way of creating variables and should'n't be used in new applications.
var legacy = "Legacy Code";
```

## JavaScript

Used to create websites, web applications (client/server side), mobile applications, programs for microcontrollers and the internet of things, smartwatch apps.

### What is scripting?
1. A script is a **text file** with instructionsa computer follow in order, like a **recipe**.
1. More advanced definition: A script is a source code intended to be interpreted at runtime rather than compiled to a standalone binary ahead of time. The runtime (shell, Python interpreter, browser engine) read and execute the source directly, trading startup performance and type-safety guarantees for **portability** and rapid iteration. 

The line blurs significantly with modern engines. See Just-In-Time compilation (JIT) at the end of this chapter. 

The concept of "scripting language" is largely historical. "Interpreted vs compiled" is about the runtime strategy, not the language itself.

### Main Characteristics

- **high level**: it provides abstraction that allow to ignore details of the hardware where it is running
- **dynamic**: it executes at runtime things that are compiled in other languages: it allows dynamic typing, closures.
- **dynamically typed**: equal to reassigning a variable (one type into another)
-**loosely typed**: do not enforce a type which typescript does
-**interpreted**: it does not need compilation step before program can run. In reality it happens but it is called Just In Time compilation
- **Multi-paradigm**: it can be either object-oriented or imperative or functional style
- It has nothing to do with Java programming language.

### A bit of history
- Created in 1995 by Brendan Eich. It became an ECMA (European Computer Manufacturers Association) standard in 1997.
- First scripting language natively supported by the web browser. 
- In the beginning, it allowed animations and the marvel of Dynamic HTML: hide/show divs, moving elements after loading, changing styles on the fly, responding to mouse/keyboard events, basic animation (setTimeout loops)
- Now it is used outside the browser: Node.js in the backend
- it use extended to mobile apps, embedded apps, TV set and much more.

### Common Programming Concepts

- Data: variable, type, constant, array, objects
- Logic and Control flow: conditionals, loop, function, recursion, exception handling
- Paradigms: procedural, OOP, functional, declarative, event-driven
- JS Advanced: concurrency, asynchronous, callback, promise/future, closure, higher order function

See short definitions after glossary at the end of this chapter

### JavaScript versions

1. The current version is ES2025. The official name of the standard is ECMAScript. 
1. The first ECMAScript versions were abbreviated by numbers: ES1, ES2, ES3, ES5, ES6
1. From 2016, versions are named by year 
1. Ref [JavaScript versions W3S](https://www.w3schools.com/js/js_versions.asp) and/or [localhost](http://localhost:22022/websites/w3schools.com/js/js_versions.html)

### Technologies based on JavaScript

#### Frontend
| Technology | What it is |
|---|---|
| **React** | UI component library (Meta) |
| **Vue** | Progressive UI framework |
| **Angular** | Full frontend framework (Google) |
| **Svelte** | Compiles to vanilla JS, no virtual DOM |
| **HTMX** | HTML extensions, minimal JS |

#### Backend
| Technology | What it is |
|---|---|
| **Node.js** | JS runtime on the server |
| **Deno** | Secure Node alternative (Ryan Dahl) |
| **Bun** | Fast all-in-one JS runtime |
| **Express** | Minimal Node web framework |
| **Hono** | Lightweight, edge-ready framework |
| **NestJS** | Opinionated Node framework |

#### Mobile
| Technology | What it is |
|---|---|
| **React Native** | Native mobile apps with React |
| **Ionic** | Hybrid mobile apps |
| **Expo** | React Native toolchain |

#### Desktop
| Technology | What it is |
|---|---|
| **Electron** | Desktop apps (VS Code, Slack, Discord) |
| **Tauri** | Lighter Electron alternative (Rust core) |

#### Full Stack / Meta-frameworks
| Technology | What it is |
|---|---|
| **Next.js** | React + server-side rendering |
| **Nuxt** | Vue equivalent of Next |
| **SvelteKit** | Svelte's full-stack framework |
| **Astro** | Content-focused, multi-framework |
| **Remix** | Full stack React framework |

#### Tooling
| Technology | What it is |
|---|---|
| **Webpack** | Module bundler |
| **Vite** | Fast dev build tool |
| **ESBuild** | Extremely fast bundler/minifier |
| **Babel** | JS transpiler |
| **ESLint** | Linter |
| **Jest / Vitest** | Testing frameworks |

#### Superset Languages
| Technology | What it is |
|---|---|
| **TypeScript** | Typed JavaScript (Microsoft) |
| **JSX/TSX** | JS with embedded HTML syntax |

#### Database / Data
| Technology | What it is |
|---|---|
| **MongoDB** | JS-friendly document database |
| **Mongoose** | MongoDB ODM for Node |
| **Prisma** | Modern ORM for Node/TypeScript |
| **GraphQL (Apollo)** | Query language, heavy JS ecosystem |

#### Edge / Serverless
| Technology | What it is |
|---|---|
| **Cloudflare Workers** | JS at the network edge |
| **Vercel Functions** | Serverless JS functions |
| **AWS Lambda (Node)** | Serverless Node runtime |

---

> JavaScript went from "toy language for button clicks" to running on servers, phones, desktops, databases, and network edges. The ecosystem is massive — arguably the largest of any language today.

### Server/Client side Apps
**Client-side** — work done *in the browser*, on the user's machine. Think of it as a **vending machine**: the product (HTML/CSS/JS) is already in front of you; you interact with it directly, no trip to the warehouse needed.

**Server-side** — work done *on a remote machine* before anything reaches the browser. Like a **restaurant kitchen**: you order (request), the chef prepares it out of sight (processes data, queries DB), then serves the result (response).

---

**Quick comparison:**

| | Client-side | Server-side |
|---|---|---|
| Runs on | Browser (user's device) | Web server (remote machine) |
| Languages | HTML, CSS, JS | Node.js, Python, PHP, Java… |
| Sees source code? | Yes (devtools) | No |
| Needs internet? | After first load, maybe not | Yes, per request |
| Example | Form validation, animations | Login auth, DB queries |

---

**Modern twist:** The line blurs with SSR (Next.js, Astro) — the *kitchen* pre-plates the dish, but the *vending machine* handles refills. That's the hybrid model most frameworks now use.

### Comments
Code tells the computer **what** to do. Comments tell humans **why**.

---

A function named `calculateTotal()` is self-explanatory. But *why* does it multiply by `1.0875` instead of `1.09`? Without a comment, the next developer (or you, 6 months later) has to **reverse-engineer intent** — which wastes time and invites bugs.

```js
// WA state tax rate for King County (updated 2023)
const TAX_RATE = 1.0875;
```

**Three main uses:**
1. **Explain why**, not what — the code already shows what
2. **Warn** about non-obvious side effects or gotchas
3. **TODO/FIXME** markers for unfinished work

> Bad comment: `i++ // increment i`
> Good comment: `i += 2 // skip header row, data starts at index 1`

### Expanding the role of JS


**Started** as a simple browser scripting tool (1995) — add a little interactivity to web pages. That was its entire job.

---

**The expansion trajectory:**

| Era | New Territory |
|---|---|
| 2009 — Node.js | Servers. JS leaves the browser |
| 2012–15 | Mobile (React Native), desktop (Electron) |
| 2017+ | IoT, robotics (Johnny-Five), edge computing |
| 2020+ | ML in-browser (TensorFlow.js), WebAssembly companion |
| Now | AI tooling, CLI apps, serverless functions, game engines |

The pattern: **wherever a runtime could be embedded, JS followed.**

---

**Near-future trajectory:**

- **Edge computing** — JS functions running *between* server and user (Cloudflare Workers, Deno Deploy), near-zero latency
- **AI integration** — JS as the glue layer for LLM APIs; browser-side inference getting real with WebGPU
- **Full-stack consolidation** — one language, one team, from DB query to UI (Bun, Deno 2 pushing this hard)
- **WebAssembly** — JS as the *orchestrator* of high-performance WASM modules (think Python or Rust logic called from JS)
- **Offline-first / PWAs** — richer local apps blurring the browser/native line further

---

**The honest caveat:** JS expands partly by *necessity* (network effect, huge ecosystem) not always by being the *best* tool. TypeScript is correcting its weakest points, and runtimes like Bun are fixing its speed reputation.

> Think of JS less as a language now and more as **the lingua franca of computing interfaces** — wherever humans interact with machines, JS tends to show up.


### Git and GiTea

Let’s talk about a tool that’s incredibly common in web development: Git. Git is a version control system – think of it like a super-powered ‘undo’ for your code. It tracks every change you make to your files, allowing you to revert to previous versions, compare differences, and collaborate with others. Essentially, it's how we manage and organize our code, especially when we're building complex projects.

Now, GitHub is a _platform_ built around Git. It’s a website where you can store your Git repositories (collections of code and its history) remotely. Think of it like a cloud-based storage space for your code. GitHub makes it super easy to share your code with your team, track progress, and work together on the same project. It's become the standard way developers share and manage their code.

We have a version of GitHub called [GiTea](http://192.168.1.28:3000/). You will need to create an account in order to be able to create your own repositories, fork other repositories, and begin keeping track of your code.

To learn more on how to use Git read w3Schools - Git Tutorial [localhost](http://localhost:22022/websites/w3schools.com/git/default6248.html) and/or [w3Schools](https://www.w3schools.com/git/default.asp)

## Glossary

1. **JIT (Just-In-Time)**: V8, SpiderMonkey: JavaScript engines don't just interpret line by line V8 for example:
    1. Parses source  -> AST (Ahead-of-Time) -> bytecode (ignition interpreter runs immediately)
    1. Profiles hot code paths at runtime
    1. Compiles hot paths to optimize machine code
    1. Deoptimize back if assumptions break.
1. **AOT (Ahead-of-Time)**: 
    1. C++: Source -> machine code (no need runtime, runs natively)
    1. Java: Source -> bytecode -> JVM interprets or JIT compiles the bytecode at runtime. 
1. Machine Code: it is the language the CPU understands: binary instructions that are architecture specific and map directly to hardware operations. Each instruction corresponds to a circular level operation the processor can execute in one or a few clock cycles. a
    1. Example 
``` C++:          a + b
Assembly:     ADD EAX, EBX
Machine code: 00000011 11000011   (binary)
Hex:          03 C3 
```
1. Assembly Language: it is just machine code with human-readable mnemonics.

## Core Programming Concepts

### Data
| Concept | What it is |
|---|---|
| **Variable** | Named container for a value |
| **Data type** | What kind of value (number, string, boolean) |
| **Constant** | Variable that can't be reassigned |
| **Array** | Ordered list of values |
| **Object/Map** | Key-value pairs |

### Logic & Flow
| Concept | What it is |
|---|---|
| **Conditional** | Do this *if* something is true |
| **Loop** | Repeat a block of code |
| **Function** | Reusable named block of code |
| **Recursion** | Function that calls itself |
| **Exception handling** | Gracefully deal with errors |

### Organization
| Concept | What it is |
|---|---|
| **Scope** | Where a variable is visible/accessible |
| **Namespace** | Grouping to avoid name collisions |
| **Module** | Self-contained reusable file/unit |
| **Library** | Collection of reusable modules |
| **API** | Defined interface for interacting with code |

### Memory
| Concept | What it is |
|---|---|
| **Stack** | Memory for function calls, automatically managed |
| **Heap** | Memory for dynamic data, manually or GC managed |
| **Garbage collection** | Runtime reclaims unused memory automatically |
| **Pointer/Reference** | Address pointing to a value in memory |

### Paradigms
| Concept | What it is |
|---|---|
| **Procedural** | Step-by-step instructions |
| **OOP** | Code organized around objects and classes |
| **Functional** | Code as pure functions, avoid shared state |
| **Declarative** | Describe *what* not *how* (SQL, HTML) |
| **Event-driven** | Code runs in response to events |

### Advanced
| Concept | What it is |
|---|---|
| **Concurrency** | Multiple tasks in overlapping time |
| **Asynchronous** | Don't wait — continue and handle result later |
| **Callback** | Function passed to run after something completes |
| **Promise/Future** | Placeholder for a value not yet available |
| **Closure** | Function that remembers its outer scope |
| **Higher-order function** | Function that takes or returns another function |

### Data Structures & Algorithms
| Concept | What it is |
|---|---|
| **Stack** | Last in, first out (LIFO) |
| **Queue** | First in, first out (FIFO) |
| **Tree** | Hierarchical node structure |
| **Graph** | Nodes connected by edges |
| **Sorting** | Ordering data by a criteria |
| **Searching** | Finding data efficiently |
| **Complexity (Big O)** | How performance scales with input size |

> Most programming arguments boil down to disagreements about which of these concepts to apply, when, and how.

# Item 3 - Why Web Development ==================
## Is Web Development a Good Career?

Development, whether in web, software, app, or games is a good place to be in the modern world.


## How is one normal day for a developer?
Busy, full of collaborations with designers, content creators and clients.
Constant problem solving at all levels.
Providing simple, elegant solutions to problems that people face.
## Is it exciting? rewarding? stimulating? all at once?
The answer is YES

## What is the major satisfaction of working as a Web Developer?

The satisfaction of seeing a web site to go live after countless hours of work.

 

## Answer to yourself the following questions (and be honest!!!)
Is web development Dying because of AI and automation?
Have you build a web site? have you thought about building a web site?
For yourself? for someone in your family? for a client?
is web development about coding?
or is it about bridging the gaps between where clients are and where they want to be?
is Web development hard?

# Item 4 - Introduction to Week 1 ============================
## Week at a glance

To help you achieve the Week One learning outcomes, you will complete the following activities this week:

## READ/WATCH/EXPLORE
- Watch Colt's Camp Day 1 here (Links to an external site.)
- Introduction to JavaScript ppt ch1 here Download here
- JavaScript_Specialist_Slideshow_v2.0.ppt here Download here
- How Developer solve problems?.
- Solving Fizz Buzz.
- Read Become top success story (Links to an external site.) Download success story

## COMPLETE
- Lab1 : Click to display Date and Time Lab, display year only, display month only,
- Check video on 492 pages week-01-closing-remarks just before the 1hr video on gimp
- Lab2: using document.write() and show navigator objects properties also in red as a challenge, geolocation challenge
- There is video instructions lab2 too.
- Try the project rock-paper-scissors.Links to an external site.

## DISCUSS
The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

- What are the three stages in the problem solving process?Links to an external site.
- Why is it important to clearly understand the problem first?Links to an external site.
- What can you do to help get a clearer understanding of the problem?Links to an external site.
- What are some of the things you should do in the planning stage of the problem solving process?Links to an external site.
- What is an algorithm?Links to an external site.
- What is pseudocode?Links to an external site.
- What are the advantages of breaking a problem down and solving the smaller problems?Links to an external site.
## REVIEW

1.1: Identify characteristics of JavaScript and common programming practices.

Lesson 1: Introduction to JavaScript

-       JavaScript Characteristics

-       JavaScript Flavors and Versions

Lesson 1: Introduction to JavaScript

-     Server-Side vs. Client-Side Applications

 

1.2: Work with variables and data in JavaScript.

Lesson 2: Working with Variables and Data in JavaScript

-       Using JavaScript to Communicate with the User

-       Lab 2-1: Using the JavaScript document.write() method

Lesson 2: Working with Variables and Data in JavaScript

-     Using Data More Than Once: Variables

Lesson 2: Working with Variables and Data in JavaScript

-     JavaScript Keywords and Reserved Words

Lesson 2: Working with Variables and Data in JavaScript

-       Using Data More Than Once: Variables

-       Lab 2-2: Storing user data in a JavaScript variable

-       Operators

-       Lab 2-3: Demonstrate and compare operators

-       JavaScript Alerts and Prompts

-       Lab 2-4: Using the JavaScript alert() method

-       Lab 2-5: Using the JavaScript prompt() method

-       Lab 2-6: Using the JavaScript confirm() method

-       Lab 2-7: Assigning and adding variables in JavaScript

## Tips for Success
For every hour you spend in classroom you should spend at least 3 hours outside the classroom.

- Note taking: be brief, precise, systematic.
- Watch the videos linked in each module
- Search for more videos in the following laptop file location:
- c:\Users\Public\Videos\

# Item 5 - Assign1-1:  Web Development II. ==================================
Welcome to CIS 242 - Web Development II: JavaScript. Follow the steps to complete the assignments.

If you have not created a folder structure for this section 2 (or quarter 2) now it is time to do so. The default location for the course materials is the Desktop location in you laptop.

In your quarter2/labs folder create a file assign1-1.html. Using VS Code either create or copy an HTML template and write the content to match the following content:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section2 Assign1-1</title>
</head>
<body>
    <h1>Javascript My First Script</h1>
    <script>
        document.write(navigator.userAgent);
        document.write("<p>");
        document.write(navigator.language);
        document.write("</p>");
    </script>
</body>
</html>
```

2026-04-04 17.20.05  7d14dcf6cb28.png.

##############    Challenge 1: ########################
Modify assign1-1.html to show other navigator object properties as show below. Remember to show your name and date.

navigator.userAgent
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
navigator.language
en-US
navigator.languages
en-US, en
navigator.onLine
true
navigator.cookieEnabled
true
navigator.hardwareConcurrency
4
navigator.platform(deprecated)
Win32
navigator.appName(deprecated)
Netscape
navigator.appVersion(deprecated)
5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
#############       SUBMIT screenshot number 1 ###########

HINT: reference https://www.w3schools.com/jsref/obj_navigator.asp (Links to an external site.)
and/or http://localhost:22022/websites/w3schools.com/jsref/obj_navigator.html (Links to an external site.)

document.write("<p><span style="color:red"> navigator.appName : </span> <br />");
document.write(navigator.appName); document.write("</p>"); 
document.write("<p><span style="color:red"> navigator.appVersion : </span> <br />");
document.write(navigator.appVersion); document.write("</p>"); 
document.write("<p><span style="color:red"> navigator.appCodeName : </span> <br />"); 
   . . .
  Replace . . . by your own code!!!
</p>
############# Challenge 2 ###############
Modify assign1-1.html to add **Show Geolocation** button

In the body add a button element
<p id="demo"></p>
<button id="btn-geo">Show Geolocation</button>
    ..........
Inside the script element add the following code:
      document.getElementById("btn-geo").addEventListener("click", getLocation);
      function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        function showPosition(position) {
            document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude + ", longitude:  " + position.coords.longitude  ;
        }
.geolocation button

#########     SUBMIT screenshot number 2    ##############
#####   Extra Credit: submit your screenshots individually   ######
You will get extra credit if your output matches the display shown in the following images

navigator properties

# Item 6 - Lab1-1: Folder structure ===============================
Lab1-1: Course Folder Location
Every week you will have a new lab assignment.

You will navigate to your Desktop. You will create a series of folders: "QUARTER-1",  "QUARTER-2",  "QUARTER-3", and  "QUARTER-4" where you are going to keep all the materials related to each quarter. Inside each folder you are going to create the following structure: 

C:\Users\LOCALS999999\DESKTOP>tree
Folder PATH listing
Volume serial number is AA58-195E
C:.
├───QUARTER-1
│   ├───exercises
│   ├───final-project
│   ├───Labs
│   │   ├───Cookie_Monster_Lab
│   │   │   ├───css
│   │   │   ├───html
│   │   │   └───images
│   │   ├───Lab1
│   │   └───Peach_Recipe_Website
│   │       ├───css
│   │       └───INSTRUCTIONS
│   └───projects
└───QUARTER-4
    ├───final-project
    │   ├───css
    │   ├───html
    │   ├───images
    │   └───videos
    └───Labs
        ├───Lab1
        ├───Lab2
        └───Lab3
The list of items do not match necessarily with the items here, this is just a guide. Make sure your note the naming conventions on each assignment. Follow the naming conventions as close as possible. It is important. Pay attentiong to the item "README.md" file. It means literally what the name entails. It is the first file to read when visiting the folders for the first time. I will explain more details during  class. 

What to submit:
Once you create the folder structure, use the command "tree" in the command line, copy/paste the output in the text entry when you are ready to submit.  MAKE SURE TO SELECT "PREFORMATTED" FOR BETTER VIEW.

# Item 7: What are your learning expectations
# Item 8 - Meet your classmates discussion
# Item 9 - User denied location
# Item 10 - check location permission

# Item 1 = Course Structure section 2 ===================================
course-structure-section-two
Course Structure Section 2
This course is structured to maximize learning potential, as well as for self paced learning. The pace can seem overwhelming

Daily Expectations
Each day, you’ll complete a set of readings: some are mandatory, some are optional but highly recommended.

Here’s how we’ll approach our learning:

-MANDATORY: w3Schools (w3): w3Schools gives a broader overview of web development topics and is particularly helpful for those interested in design. They have fewer code examples than MDN. -OPTIONAL (highly recommended): freeCodeCamp (fCC): fCC provides a great introduction to the core concepts.

OPTIONAL: Mozilla Developer Network (MDN): MDN offers a really detailed, technically-focused look at each topic. They're fantastic for understanding why things work. You’ll find plenty of clear examples.
Note: The MDN Editor tools don’t currently work while w3's "try me" features do.
Daily Lab Assignments: You’ll also work through daily “Labs” – coding exercises designed to help you solidify what you’ve learned.

Daily Journal: During this course, you will keep a journal of reflections on what you are learning. This will build your skills in engaging with and understanding content and in reflecting on what works best for you as a learner. This will help you organize your thoughts, learn key concepts and keep track of information.

Important: We understand that fitting everything in while in class can be challenging. You’ll be expected to complete all mandatory readings and Labs outside of class time. Don't worry, we'll provide the support you need!

Weekly Expectations
Each week, we’ll have a short review section to help you consolidate your knowledge. After reading the review, you'll take a quiz. These quizzes primarily consist of multiple-choice questions, typically 10 questions from a pool of 20 to 30 question banks.

Each week will have a lab that is due the first day of the next week (typically a Monday). Each lab will have a detailed list of criteria that must be meet to receive a full grade. Each week will have one or more assignment (as a homework or in-class assignment).

Assignment/Labs Expectations:
When uploading files to canvas (either labs or assignments), the file name needs to be your last name first initial and a dash ("-") followed by the lab or assignment.

Example: "John Doe" turning in a file for Lab 1.1 would name the file doej-lab1.1.html, for the week 1 assignment would be doej-assignment1.html. If uploading multiple files you need to zip the folder and follow same naming convention (doej-lab1.1.zip), unless you are asked explicitly to submit one item at a time, for example an html file and two or three image files. NOTE: you can not submit a folder containing multiple items, unless it is compressed.

If the lab/assignment is a text based submission either write in your answer, or copy/paste your code into the provided submission area. If you are submitting JavaScript as part of an html file, then no problem to submit the html file on canvas. If you are submitting a file with "js" extension, then you should rename your file by adding a "txt" second extension and upload to canvas. Canvas has the ability to recognize the extension and disable the upload to prevent JavaScript possible execution on the server side. You can copy/paste your code into the "text Entry" box. Make sure you select the "preformatted" option when entering/pasting the code as to keep the correct indentation.

Midterm and Finals
This section will have 2 Exams. A Midterm and a Final Exam. These exams must be taken in class. Midterm may be an open book exam, allowing you to utilize websites, notes, and other resources. However, you cannot ask other students, classroom assistants, or the instructor for answers. If you don’t understand a question, please ask the instructor ONLY for clarification. Final exam may be replaced by a Final Project and it will be discussed during class during the second half of the quarter.

Notes on Exams: Exams are designed to assess your understanding of the material, not to induce anxiety. To alleviate concerns, exams will be graded on a curve. This means that the overall distribution of grades will be adjusted so that most students receive at least a C- passing grade, while a few students will achieve B’s, and the top performers will receive A’s.
Late Work
Labs are due at the start of the first day of the next week as indicated in the Class Schedule. i.e. Assignment for week 0 (Your Resume) is due first thing Monday of week 1. Assignments are due at the start of class on the date indicated in the Class Schedule. i.e. Lab 1.1 is due first thing day 2 of week 1.

If a lab or assignment is turned in later than the due date, but earlier than 1 week late, it will be marked 50% off of the final grade. After being 1 week late the lab or assignment will receive a 0. During the first two week on the first quarter this rule is not enforced. I will announce the time when the rule will be enforced.

Quizzes must be taken on the day indicated in Canvas. The highest grade received on that day will be the one accepted. Quizzes taken up to 1 week late will be marked 50% off of final grade. After being more than 1 week late a 0 will be received. Quizzes can be retaken as many times as you can and only the highest grade will be recorded, unless indicated otherwise.

Final Assignment and Exams: The final project, Midterm Exam, and Final Exam must be taken on the scheduled date unless major reason prevent you from doing so. Among others, you are on a medical trip, you went to segregation, etc. If you know of another possible reason before hand you must communicate it to me to arrange a new date but only under extraordinary circumstances.

IMPORTANT: No make-up exams will be given unless prearranged. Prearranged is defined as: notifying the instructor of the inability to take the exam before the scheduled time of the exam. You can retake a quiz only if you took the quiz for the first time on the date indicated in the schedule.

Failing Grades Anything below 70%, is a failing grade. Failing a the course means you may be removed from class and have to retake it before moving on to the next section.

Course Weekly Breakdown:
Week 1: Introduction to the course. Syllabus content. Introduction to JavaScript: brief history and syntax Week 2: Variables and Data Types: Primitive/Object, Strings. Operators and Expressions Week 3: Functions and Debugging Week 4: Controling Program Flow, Arrays, Objects Week 5: Loops, DOM, more objects, DOM, midterm Week 6: More objects, DOM Manipulation. Week 7: Form Validation, Maps Week 8: JavaScript Libraries and Frameworks Week 9: Intro to Web APIs Week 10: Final Assignment and Exam

## week 1: Intro to JS
Introduction to JavaScript
Introduction to Scripting
JavaScript Characteristics
JavaScript and Common Programming Concepts
JavaScript Flavors and Versions
Technologies based on JavaScript
Server-Side vs. Client-Side Applications
Annotating Your Code with Comments
Expanding the Role of JavaScript
## Week 2: Working with Variables and Data in JavaScript
Using JavaScript to Communicate with the User
Tools for Debugging Code
Using Data More Than Once: Variables
JavaScript Operators
JavaScript Expressions
JavaScript Alerts and Prompts
Simple User Events and Basic Event Handlers
JavaScript Keywords and Reserved Words
## Week 3: Functions and Debugging
Introduction to Functions
Defining a Function
Calling a Function
Methods as Functions
Types of Functions
User Events and JavaScript Event Handlers
What Is Debugging?
Tools for Debugging Code
Testing Code in Various Browsers
Debugging Logic Errors
JavaScript and Mobile Devices
## Week 4: Controlling Program Flow
Controlling Decisional Program Flow
The if...else Statement
The while Statement
The for Statement
The break Statement
The continue Statement
The switch Statement
Week 5: More on loops, arrays, Document Object Model (DOM), midterm
The JavaScript Document Object Model (DOM)
The window Object
The document Object
The image Object
The history Object
The location Object
The navigator Object
The Virtual DOM
Week 6: Objects and DOM manipulation
Introduction to JavaScript Language Objects
The String Object
Evaluating Strings
JavaScript Regular Expressions
The Array Object
The forEach() Method
The map() Method
The Date Object
Setting and Extracting Time Information
The Math Object
Changing HTML on the Fly
Using the getElementById Method
Using the getElementsByName Method
Using the getElementsByTagName Method
Using the getElementsByClassName Method
Modifying Attributes within the DOM
Week 7: Developing Interactive Forms with JavaScript
Interactive Forms
Overview of Form Elements
Referring to form Elements
The form Object
The input Elements and text Objects
The textarea object
The select Object and select Element
Form Validation
Common form Security Errors
Week 8: JavaScript Libraries and Frameworks
Introduction to JavaScript Libraries and Frameworks
Choosing a Code Library
External and Pre-Made Scripts
Loading Your First Library
Using JavaScript Library Plug-ins
Using Frameworks
Best Practices with JavaScript Libraries and Frameworks
Copyright Issues and JavaScript
Week 9: Introduction to Web APIs
Web Application Programming Interface (API)
The Web Storage API
The Geolocation API
The Canvas API
Week10 : Final Project And/Or Final Exam


