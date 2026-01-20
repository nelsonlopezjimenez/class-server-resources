---
publishDate: 2026-01-21
title: "DOM Manipulation, Debugging, and Form Validation"
description: "Learn how to interact with the DOM, Catch common errors, and validate form data."
week: 20
section: 2
---

# Week 20: DOM Manipulation and Debugging

## Learning Objectives

By the end of this week, students will be able to:

- Use Event listeners and other DOM manipulation methods
- use try...catch, throw and other error checking code

## Day 1-2: DOM Manipulation

### Mandatory Reading:

These section has many small sections to read. Between today and tomorrow work through them all and the 4 associated labs

[Working with the DOM](http://localhost:8001/learn/javascript-v9/#lecture-working-with-the-dom-click-events-and-web-apis)

[Understanding Events](http://localhost:8001/learn/javascript-v9/#lecture-understanding-the-event-object-and-event-delegation)

### Optional Readings:

- [MDN - DOM](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents.html)
- [w3Schools - DOM](http://localhost:22022/websites/w3schools.com/js/js_htmldom.html) - Work through these lengthy tutorial

### Lab 20.2

- [Build a Favorite Icon Toggler](http://localhost:8001/learn/javascript-v9/lab-favorite-icon-toggler/build-a-favorite-icon-toggler)

1. Go through all 9 steps to Build a Favorite Icon Toggler.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 20.2.A.

AND

- [Build a Real Time Counter](http://localhost:8001/learn/javascript-v9/lab-real-time-counter/build-a-real-time-counter)

1. Go through all 6 steps to Build a Real Time Counter.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 20.2.B.

AND

- [Build a Lightbox Viewer](http://localhost:8001/learn/javascript-v9/lab-lightbox-viewer/build-a-lightbox-viewer)

1. Go through all 17 steps to Build a Lightbox Viewer.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 20.2.C.

AND

- [Build a Set of Football Team Cards](http://localhost:8001/learn/javascript-v9/lab-football-team-cards/lab-football-team-cards)

1. Go through all 15 steps to Build a Set of Football Team Cards.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 20.2.D.

### Day 3: Debugging JavaScript

### Mandatory Reading:

[What Are Some Examples of Common JavaScript Errors?](http://localhost:8001/learn/javascript-v9/lecture-debugging-techniques/what-are-some-examples-of-common-javascript-errors)
[How Does the Throw Statement Work?](http://localhost:8001/learn/javascript-v9/lecture-debugging-techniques/how-does-the-throw-statement-work)
[How Does try...catch...finally Work?](http://localhost:8001/learn/javascript-v9/lecture-debugging-techniques/how-does-try-catch-finally-work)
[How Does the Debugger Statement Work?](http://localhost:8001/learn/javascript-v9/lecture-debugging-techniques/how-does-the-debugger-statement-work)
[What Are Some Examples of Using Advanced JavaScript Debugging Techniques?](http://localhost:8001/learn/javascript-v9/lecture-debugging-techniques/what-are-some-examples-of-using-advanced-javascript-debugging-techniques)

### Lab 20.3

- [Debug a Random Background Color Changer](http://localhost:8001/learn/javascript-v9/lab-random-background-color-changer/debug-a-random-background-color-changer)

1. Go through all 7 steps to Debug a Random Background Color Changer.
1. When you are finished copy and paste the code into a new .js file in your section 2 labs directory.
1. Add appropriate comments to show understanding of the code.
1. Submit this to the "text box" in canvas under under lab 20.3

## Day 4: DOM and Debugging Quiz

### Mandatory Readings:

- [DOM Manipulation and Click Events with JavaScript Review](http://localhost:8001/learn/javascript-v9/review-dom-manipulation-and-click-events-with-javascript/review-dom-manipulation-and-click-events-with-javascript)
- [Debugging JavaScript Review](http://localhost:8001/learn/javascript-v9/review-debugging-javascript/review-debugging-javascript)

### Quiz:

- Log into Canvas and navigate to this section's class page
- Click on Quizzes
  - Take the Week 20: DOM
  - Take the Week 20: Debugging

## Assignment 20:

You will build a simple interactive to-do list application using the DOM, incorporating error handling and debugging practices. You create a basic to-do list application that allows users to add, delete, and view tasks. The application should be responsive and user-friendly, use proper HTML code and ascetically pleasing style choices.

**Requirements:**

**HTML Structure (index.html):**

- Create a basic HTML structure with:
- An input field for new task name.
- A button to add the task to the list.
- An unordered list to display the to-do items.
- Two buttons on each list item:
  - Delete Task
  - Mark Task as finished/unfinished
- Create an empty UL that will be used to display to-do task.

Ensure that HTML is well structured and uses proper semantic elements

**JavaScript Logic (script.js):**

- **Variables**

  - An array that stores to-do objects
  - Each object must have a:
    - Title
    - Completed Flag

- **Functions:**

  - Create a function to add an item to the to-do array
    - The function should get the task title from the input element using the DOM and create a new object in the array with a completed status of false.
  - Create a function to remove a task from the to-do array
    - The function should search the array, or use an index, to find the specific task and remove it.
  - Create a function that marks a task as completed.
    - The function should find the selected task and modify the completed property to be true

- **DOM Manipulation:**

  - You will need to use event listeners to add events to various buttons (add task, delete task, complete task), as well as proper element selectors to get data from HTML page.

- **Callbacks & Higher-Order Functions:**
  - Use the .map() method to map each element in the array to add a new li to the UL element.

**Error Handling & Debugging:**

- Implement `try...catch` blocks to handle potential errors, such as invalid input. For example, prevent adding tasks with empty titles.
- Use `throw` statements to handle unexpected situations. (e.g., If something goes wrong internally).
- Use `finally` block to handle cleanup.

**Grading Criteria (100 Points)**

**HTML Structure (20%)** Correct HTML structure with all required elements. Semantic and well-formatted.
**JavaScript Logic (30%)** Accurate implementation of the required functions. Correct use of data structures (arrays, objects). Proper use of variables and data types.
**DOM Manipulation (20%)** Effective use of DOM manipulation methods `createElement`, `appendChild`, `removeChild` etc. as needed.
**Error Handling & Debugging (15%)** Implementation of a `try...catch` block, `throw` statements to reduce errors.
**Code Quality & Readability (15%)** Clean, well-commented code, consistent formatting, and adherence to coding best practices.
