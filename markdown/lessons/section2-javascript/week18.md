---
publishDate: 2026-01-21
title: "jsFun and JavaScript Midterm"
description: "Download and use jsFun and take the Midterm"
week: 18
section: 2
---

# Week 18: jsFun and Midterm Exam

## Day 1-3: Level 1 Test

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

## Day 4: Midterm Exam

### Mandatory Readings:

Review all of the mandatory readings from day 4 of previous weeks.

### Exam:

- Log into Canvas and navigate to this section's class page
- Click on Quizzes
  - Take the Midterm: Javascript Exam
