---
publishDate: 2026-04-02
description: "Introduction to JavaScript, scripting, history, comments, git"
title: "Welcome to Javascript Programming"
week: 13
section: 2
---

# Week 01: Introduction to JavaScript, syllabus, some history

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