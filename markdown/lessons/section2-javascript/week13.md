---
title: "JavaScript Fundamentals - Variables, Data Types, and Basic Operations"
description: "Introduction to JavaScript syntax, variables, primitive data types, console.log(), and string methods."
week: 13
section: 2
prerequisites: ["None"]
objectives:
  - "Understand what JavaScript is and how it enhances web pages"
  - "Declare and use variables with let, const, and var"
  - "Work with primitive data types: strings, numbers, booleans"
  - "Understand what console.log() is and how to use"
  - "Debug JavaScript using browser developer tools"
---

# Week 13: JavaScript Fundamentals - Variables, Data Types, and Basic Operations

## Keys to learning Javascript:

Javascript can be overwhelming to new students. Here are some keys to help you get the most out of this quarter:

- **<u>Practice, Practice, Practice:</u>** Throughout this quarter the key to learning JavaScript is consistent practice. Don't just do the assignment; you should experiment, try different approaches, and build small projects on your own.
- **<u>Debugging:</u>** Learn to use your browser's developer tools (Console, Elements) to debug your code. This is a crucial skill and can help save many hours of headache tracking down bugs.
- **<u>Double Check Spelling and Casing:</u>** Many issues are due to typing errors. myName and myname are two different variables. and cosnole.log() doesn't exist with in javascript. VSCode will help you catch some of these bugs but not all. Carefully and patiently review your code if you have errors.
- **<u>Don't Get Stuck:</u>** If you’re struggling with a particular concept, don’t spend _too_ long on it, this means 10-15 minutes max. If you are struggling for longer than this review the mandatory and optional readings, and if you are still struggling, write the issue down in your notebook then move on. When you come into class you can ask a classroom assistant or Dr. Lopez for assistance.

## Assignment Expectations:

Each javascript assignment you turn in this quarter needs to have your name and a brief description of what the script does at the top as a comment:

```js
// John Doe
// This code shows how to create variables
```

It will then need to have code that meets the requirements of the assignment, with comments explaining what the code does. As your skill in coding javascript applications increases you will be able to use less comments but for now over commenting is expected:

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

## Week 1 Learning Objectives

By the end of this week, you will be able to:

- Write clean, commented JavaScript code following best practices.
- Declare variables using appropriate keywords `let` and `const`, and why we don't use `var` anymore.
- Identify and work with JavaScript's primitive data types.
- Create, display, and manipulate strings
- Use browser developer tools to debug and test JavaScript code.

## Day 1: Introduction to JavaScript and Learning How to Comment

### Mandatory Reading:

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
- [w3Schools - Introduction to JS](http://localhost:22022/websites/w3schools.com/js/js_intro.html)
- [w3Schools - Comments](http://localhost:22022/websites/w3schools.com/js/js_comments.html)
- [w2Schools - Variables](http://localhost:22022/websites/w3schools.com/js/js_variables.html)

### Assignment:

- [Build a Greeting Bot](http://localhost:8001/learn/javascript-v9/workshop-greeting-bot/step-1):

1. Go through all 15 steps of building a simple greeting bot that uses strings and console.log() to communicate.
1. When you are finished copy and paste the code into a new .js file in your quarter 2 labs directory.
1. Open that file in VSCode and add appropriate comments to show understanding of the code.
1. Submit this file to canvas under assignment 1.1.

## Day 2: Working with Data Types

### Mandatory Reading

- [What is Dynamic Typing?](http://localhost:8001/learn/javascript-v9/lecture-working-with-data-types/what-is-dynamic-typing-in-javascript-and-how-does-it-differ-from-statically-typed-languages)
- [How Does typeOf Operator Work?](http://localhost:8001/learn/javascript-v9/lecture-working-with-data-types/how-does-the-typeof-operator-work-and-what-is-the-typeof-null-bug-in-javascript)

- [Data Types Review](http://localhost:8001/learn/javascript-v9/review-javascript-variables-and-data-types/review-javascript-variables-and-data-types)

- [What is Bracket Notation?](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/what-is-bracket-notation-and-how-do-you-access-characters-from-a-string)
- [How to Create Newline in Strings?](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/how-do-you-create-a-newline-in-strings-and-escape-strings)
- [What are Template Literals?](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/what-are-template-literals-and-what-is-string-interpolation)
- [Substrings](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/how-can-you-find-the-position-of-a-substring-in-a-string)
- [prompt()](http://localhost:8001/learn/javascript-v9/lecture-working-with-strings-in-javascript/what-is-the-prompt-method-and-how-does-it-work)

### Optional Readings:

- [MDN - Handling Strings](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings.html)
- [MDN - String Templates](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals.html)
- [w3Schools - Strings](http://localhost:22022/websites/w3schools.com/js/js_strings.html)
- [w3Schools - String Templates](http://localhost:22022/websites/w3schools.com/js/js_string_templates.html)

### Assignment:

- [Build a Javascript Trivia Bot](http://localhost:8001/learn/javascript-v9/lab-javascript-trivia-bot/lab-javascript-trivia-bot)

or

- [Build a Sentence Maker](http://localhost:8001/learn/javascript-v9/lab-sentence-maker/build-a-sentence-maker)

1. Go through all steps of one of these labs.
1. When you are finished copy and paste the code into a new .js file in your quarter 2 labs directory.
1. Open that file in VSCOde and add appropriate comments to show understanding of the code.
1. Submit this file to canvas under assignment 1.2.

**<u>Note:</u>** Doing both will grant you extra credit on the assignment.

## Day 3: Data Types - String Methods

### Mandatory Readings:

- [What is ASCII?](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-character-methods/what-is-ascii-and-how-does-it-work-with-charcodeat-and-fromcharcode)
- [Using includes()](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-search-and-slice-methods/how-can-you-test-if-a-string-contains-a-substring)
- [Using slice()](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-search-and-slice-methods/how-can-you-extract-a-substring-from-a-string)
- [Changing Casing](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-formatting-methods/how-can-you-change-the-casing-for-a-string)
- [Remove WhiteSpace](http://localhost:8001/learn/javascript-v9/lecture-working-with-string-formatting-methods/how-can-you-trim-whitespace-from-a-string)

### Optional Readings:

- [MDN - Useful String Methods](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods.html)
- [w3Schools - String Methods](http://localhost:22022/websites/w3schools.com/js/js_string_methods.html)

### Assignment:

- [Build a String Inspector](http://localhost:8001/learn/javascript-v9/workshop-string-inspector/step-1)

or

- [Build a Sentence Formatter](http://localhost:8001/learn/javascript-v9/workshop-string-formatter/step-1)

or

- [Build a String Transformer](http://localhost:8001/learn/javascript-v9/workshop-string-transformer/step-1)

1. Go through all steps of _TWO_ of these labs.
1. When you are finished copy and paste the code into a new .js file in your quarter 2 labs directory.
1. Open that file in VSCOde and add appropriate comments to show understanding of the code.
1. Submit this file to canvas under assignment 1.2.

**<u>Note:</u>** Doing all three will grant you extra credit on the assignment.

## Day 4: String Review and Quiz

### Mandatory Readings:

- [Review Strings](http://localhost:8001/learn/javascript-v9/review-javascript-strings/review-javascript-strings)

### Quiz:

- [Strings Quiz](http://localhost:8001/learn/javascript-v9/quiz-javascript-strings/quiz-javascript-strings)

1. Take the quiz above
1. Close the window that pops up by clicking the X in the top right
1. Review any questions you got wrong.
1. Take a screen shot that shows the bottom of the screen where it says, "You have X out of 20 questions correct."
1. Submit the screenshot to the quiz week 1 assignment for credit.

## Weekend Homework

### Lab 1: Personal Profile Creator

Create a webpage that uses JavaScript to display dynamic user information:

1. Create a scripts.js file in your quarter 2 labs folder.
1. Open that file in VSCode.
1. Add Code to meet the criteria below.
1. Don't forget to properly comment your code/file.
1. Submit the file to lab 1 assignment first thing monday.

**<u>Notes:</u>** You will be learning more about Node.js in the future. It is what allows Javascript code to be ran outside of a browser. To test your code open up a terminal in VSCode (`ctrl`+`shift`+`~`) and type `node fileName.js` and hit enter. You should see the output of your file in the terminal.

- The following criteria should be meet:

  1. Declare 4 variables, one for a name, a title, an occupation, and a hobbies.
  1. If the variable needs to change value declare with let, otherwise declare with const.
  1. At least one variable should be declared without a value.
  1. At least one variable should be declared with a double quote (").
  1. At least one variable should be declared with a single quote (').
  1. For the variable declared without a value set its value before using it.
  1. Using console.log and the string concatenation (+) method, output the sentence "[title] [name] works as a [occupation], and has [hobbies] interest."
  1. Assign the name variable value to something else.
  1. Using console.log and the (+) method, output the same sentence above with the updated data.
  1. Change the occupation variable value to something else.
  1. Using console.log and a string template (`), output the same sentence as above with the updated data.

- Extra Credit:

  1. Create a HTML page that has elements for a person's title, name, occupation and hobbies. You may use any element you think is appropriate.
  1. Using internal script tags insert the code you created above into the .html file
  1. Using the Document Object Model (DOM) target the four elements you created in the HTML and set the appropriate data to it.

  - You have not been taught about the DOM yet. Where can you go to read about it and learn how to use it? Tip querySelector and getElementById are useful here.
