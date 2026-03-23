---
publishDate: 01-20-2026
description: "Introduction to JavaScript"
title: "Welcome to Javascript Programming"
week: 0
section: 2
---

# Introduction to JavaScript, syllabus, some history

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

### Main Characteristics

- **high level**: it provides abstraction that allow to ignore details of the hardware where it is running
- **dynamic**: it executes at runtime things that are compiled in other languages: it allows dynamic typing, closures.
- **dynamically typed**: equal to reassigning a variable (one type into another)
-**loosely typed**: do not enforce a type which typescript does
-**interpreted**: it does not need compilation step before program can run. In reality it happens but it is called Just In Time compilation
- **Multi-paradigm**: it can be either object-oriented or imperative or functional style
- It has nothing to do with Java programming language.


### freeCodeCamp

Make sure your freeCodeCamp server is up and running.

### Git and GiTea

Let’s talk about a tool that’s incredibly common in web development: Git. Git is a version control system – think of it like a super-powered ‘undo’ for your code. It tracks every change you make to your files, allowing you to revert to previous versions, compare differences, and collaborate with others. Essentially, it's how we manage and organize our code, especially when we're building complex projects.

Now, GitHub is a _platform_ built around Git. It’s a website where you can store your Git repositories (collections of code and its history) remotely. Think of it like a cloud-based storage space for your code. GitHub makes it super easy to share your code with your team, track progress, and work together on the same project. It's become the standard way developers share and manage their code.

We have a version yf GitHub called [GiTea](http://192.168.1.28:3000/). You will need to create an account in order to be able to create your own repositories, fork other repositories, and begin keeping track of your code.

To learn more on how to use Git read [w3Schools - Git Tutorial](http://localhost:22022/websites/w3schools.com/git/default6248.html)
