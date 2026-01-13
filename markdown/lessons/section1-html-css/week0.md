---
publishDate: 2026-01-07
tags: ["Introduction", "Grading", "Expectations", "Resume", "Labs/Assignments"]
description: "Introduction to CIS Web Developer Certification course work"
title: "Welcome to Web Development!"
week: 0.1
---

# Getting Started with CIS Fullstack Web Development

Welcome to the CIS Fullstack web Development certificate program. This is a 12 month course consisting of 40 weeks of course work to do. You will learn the necessary skills to develop, create, and deploy a fully functional web based application.

## To be successful in this class, you should plan to:

1. Arrive on time and prepared for class
1. Take an active role in your own learning and understanding of the material
1. Commit twelve hours a week to homework and assignments outside of class.
1. Let me know if material is not clear or when its relevance to the student learning outcomes for the course is not apparent (or when you’re bored out of your mind!).
1. It is also expected that you will treat classmates with respect, avoiding gratuitous arguments,
1. I expect you to take the opportunity to learn from your peers through activities in lecture and section, and I expect you to be respectful and courteous to one another. Finally, I expect you to hold yourself to the highest standards for academic honesty and integrity in your work.

## Day 1: Course Introduction

### What You’ll Be Doing Each Day

This week, we’ll be laying the groundwork for your full-stack journey! Each day, you’ll complete a set of readings from the freeCodeCamp (fCC) website – these are your _mandatory_ readings. We'll also provide a list of _optional_ readings to give you different perspectives on the same concepts.

Here’s how we’ll approach our learning:

- **freeCodeCamp (fCC):** fCC provides a great introduction to the core concepts.
- **Mozilla Developer Network (MDN):** MDN offers a really detailed, technically-focused look at each topic. They're fantastic for understanding _why_ things work. You’ll find plenty of clear examples.
- **w3Schools (w3):** w3Schools gives a broader overview of web development topics and is particularly helpful for those interested in design. They have fewer code examples than MDN.
- **Note: The MDN Editor tools don’t currently work while w3's "try me" features do.**

**Daily Lab Assignments:** You’ll also work through daily “Labs” – small coding exercises designed to help you solidify what you’ve learned. Many of these Labs come directly from freeCodeCamp.

**Daily Journal**

During this course, you will keep a journal of reflections on what you are learning. This will build your skills in engaging with and understanding content and in reflecting on what works best for you as a learner. This will help you organize your thoughts, learn key concepts and keep track of information.

**Important:** We understand that fitting everything in while in class can be challenging. You’ll be expected to complete all mandatory readings and Labs _outside_ of class time. Don't worry, we'll provide the support you need!

### What Your Be Doing Each Week

Each week, we’ll have a short review section to help you consolidate your knowledge. After reading the review, you'll take a quiz. These quizzes primarily consist of multiple-choice questions, typically ranging from 10 to 20 questions, and they're based directly on the review material.

Each week will have an assignment that is due the first day of the next week (typically a Monday). Each assignment will have a detailed list of criteria that must be meet to receive a full grade.

### Assignment\Labs Expectations:

When uploading files to canvas (either labs or assignments), the file name needs to be your last name first initial and a - followed by the lab or assignment.

I.E. John Doe turning in a file for Lab 1.1 would name the file doej-lab1.1.html, for the week 1 assignment would be doej-assignment1.html. If uploading multiple files you need to zip the folder and follow same naming convention (doej-lab1.1.zip).

### Midterm and Finals

Each section will have two exams: a midterm and a final.

These exams must be taken in class and are open book, allowing you to utilize websites, notes, and other resources. However, _you cannot_ ask other students, classroom assistants, or the instructor for answers. If you don’t understand a question, please ask the instructor or classroom assistants for clarification.

### Grading Information

#### ⭐ Grade Weights

1.  Labs/Assignments: **30%**
2.  Quizzes: **10%**
3.  Participation: **10%**
4.  Midterm Exam: **10% or 20%**
5.  Final Exam: **10% or 20%**
6.  Attendance: **10%**
7.  Extra Credit: **1%**

- **Notes on Exams:**
  Exams are designed to assess your understanding of the material, not to induce anxiety. To alleviate concerns, exams will be graded on a curve. This means that the overall distribution of grades will be adjusted so that most students receive at least a C- passing grade, while a few students will achieve B’s, and the top performers will receive A’s. The higher of the two exams (midterm or final) will contribute 20% to your final grade, while the lower one contributes 10%.

### Mandatory Readings

1. [Learning Tips](/websites/gcfglobal-learning-tips/tutrial.html)
1. [🧠 Discover your learning style](/websites/gcfglobal-learning-tips/discover-your-learning-style/lesson.html)
1. [🔄 The study cycle](/websites/gcfglobal-learning-tips/the-study-cycle/lesson.html)
1. [Problem Solving And Decision Making](/websites/gcfglobal-problem-solving-and-decision-making/tutorial.html)

### Exercise 0.1: Set up folders

1. On your desktop right click.
   - In the menu that pops up hover over the `new >` and select folder
1. Name this folder `section 1`
1. Double click the section one folder and repeat step 1 to create a folders for
   - Labs - This is where your various daily labs will reside
   - Assignments - This is where the weekly assignment files/folders will be
   - Practice - This is where you can put files/folders that your using to practice the various skills you will be learning through out the section.

## Day 2: Web Technology Overview

### What is HTML, CSS and Javascript?

**HTML – The Foundation & Structure**

- **What it is:** HTML (HyperText Markup Language) is the _structure_ of your website. It tells the browser _what_ is on the page – headings, paragraphs, images, links, etc.
- **House Analogy:** Think of HTML as the _walls_ and _rooms_ of your house. You need walls to define where the rooms are, and you need rooms themselves (like a living room, kitchen, bedroom) to make the house functional. Without these basic building blocks, you just have a pile of materials.
- **What you do with it:** You use HTML tags (like `<p>` for paragraphs, `<h1>` for headings, `<img>` for images) to tell the browser exactly how to display elements on the page. You're essentially labeling everything.
- **Example:**

  ```html
  <h1>Welcome to My Website</h1>
  ```

  This HTML code tells the browser to display "Welcome to My Website" as the main heading of your page.

**CSS – The Style & Decoration**

- **What it is:** CSS (Cascading Style Sheets) is responsible for the _appearance_ of your website – the colors, fonts, layout, and overall visual style.
- **House Analogy:** CSS is like the _paint_, _furniture_, and _decor_ inside your house. The walls might be structurally sound (HTML), but you need to paint them, put in furniture, and add curtains to make it a comfortable and attractive space.
- **What you do with it:** You use CSS rules to tell the browser _how_ to style HTML elements. You can control things like font size, color, spacing, and the arrangement of elements on the page.
- **Example:**

  ```css
  h1 {
    color: blue;
    font-size: 36px;
  }
  ```

  This CSS code says: "Make all `<h1>` headings blue and make them 36 pixels tall."

**JavaScript – The Intelligence & Interactivity**

- **What it is:** JavaScript is a programming language that adds _behavior_ and _interactivity_ to your website. It allows you to make things happen when the user interacts with the page – like responding to button clicks, changing content dynamically, or creating animations.
- **House Analogy:** JavaScript is like the _plumbing_ or _electricity_ of your house – when a user flushes a toilet water runs, when a switch is turned lights turn on. It makes the house respond to your actions and creates a more dynamic experience.
- **What you do with it:** You use JavaScript code to write instructions that tell the browser what to do when certain events occur. You can create things like forms that validate user input, slideshows, or games.
- **Example:**

  ```javascript
  document.getElementById("myButton").addEventListener("click", function () {
    alert("Button clicked!");
  });
  ```

  This JavaScript code waits for the user to click a button with the ID "myButton" and, when the button is clicked, it displays an alert box.

### Mandatory Readings

1. [📄 Resume Writing](/websites/gcfglobal-resumewriting/tutorial.html)
1. [🖼️ Resume Writing Gallery](/websites/gcfglobal-resumewriting/gallery-of-sample-resumes/lesson.html)
1. [Windows 10 ⚙️](/websites/gcfglobal-windows10/tutorial.html)
   1. [Windows 10 Features](/websites/gcfglobal-windows-10/windows-10-features/lesson.html)
1. [Computer Basics](/websites/gcfglobal-computerbasics/tutorial.html)
   1. [🖥️ Your First Computer](/websites/gcfglobal-basic-computer-skills/getting-started-with-your-first-computer/lesson.html)
1. [Computer Basics](/websites/gcfglobal-computerbasics/tutorial.html)

   1. [Computer Basics Parts](/websites/gcfglobal-computerbasics/basic-parts-of-a-computer/lesson.html)
   1. [🌐 Connecting to the Internet](/websites/gcfglobal-computerbasics/connecting-to-the-internet/lesson.html)
   1. [💾 The Operating System](/websites/gcfglobal-computerbasics/getting-to-know-the-os/lesson.html)
   1. [📚 Learning a new program](/websites/gcfglobal-computerbasics/learning-a-new-program/lesson.html)

1. [🌍 What is the internet](/websites/gcfglobal-internetbasics/what-is-the-internet/lesson.html)
1. [🔍 Using a web browser](/websites/gcfglobal-internetbasics/using-a-web-browser/lesson.html)
1. [Understanding URL](/websites/gcfglobal-internetbasics/understanding-urls/lesson.html)
1. [What is gif](/websites/gcfglobal-internet-tips/what-is-an-animated-gif/lesson.html)

## Day 3: Automation, plagiarism, downloads, zip files

### Mandatory Readings

1. [🤖 Automation impact](/websites/gcfglobal-thenow/how-will-automation-impact-our-lives/lesson.html)
1. [Understanding login](/websites/gcfglobal-thenow/understanding-login-methods/lesson.html)
1. [⚠️ What is plagiarism ](/websites/gcfglobal-usinginformationcorrectly/avoiding-plagiarism/lesson.html)
1. [📸 Taking screenshots](/websites/gcfglobal-techsavvy/taking-screenshots/lesson.html)
1. [📁 Finding your downloads](/websites/gcfglobal-techsavvy/finding-your-downloads/lesson.html)
1. [🗜️ Working with zip files](/websites/gcfglobal-techsavvy/working-with-zip-files/lesson.html)
1. [Common keyboard shortcuts](/websites/gcfglobal-techsavvy/keyboard-shortcuts/lesson.html)
1. [⇥ tab key usage](/websites/gcfglobal-techsavvy/speed-up-your-workflow-with-the-tab-key/lesson.html)
1. [🛒 Buying Computers](/websites/gcfglobal-buying-computers/computer-buying-guide/lesson.html)
1. You can select any other tutorial among the ones presented or watch them all.

## Setting Up Your Environment

**Required Software**

These should already be set up but if they are not and you don't know how to get to them notify the instructor or a classroom assistant

1. **Browser** - Chrome<img src="/images/week1/chrome.svg" alt="Chrome Logo" width="40" height="30">

   - Ensure Chrome is properly installed, a shortcut is on your desktop, and it is set as the default browser.

1. **Text\Code Editor**- VS Code<img src="/images/week1/vscode.png" alt="VSCODE logo" width="50" height="40" />

   - Ensure VSCode is properly installed, a shortcut is on your desktop, and you see extensions on the left hand side (don't worry that you don't know what they do yet!)

1. **Programming Language** - HTML, CSS, JavaScript<img src="/images/week1/html-css-js.png" alt="HTML-CSS-JS logos" width="100" height="80" />

1. **Terminal/Command Prompt Editor** - vim, vi, nano<img src="/images/week1/terminal.png" alt="terminal image" width="50" height="40" />
   - You wont be using these much as in terminal coding is not required but they are installed by default and are worth looking into how they function when you have the time.

**LASTLY!**: Programming is a skill that improves with practice. Don't worry if everything doesn't make sense immediately – that's completely normal!

### Assignment 0: Create a Basic Resume in Microsoft Word

Create a single-page resume highlighting your academic background and relevant experiences. Use one of the built in Resume templates for Word.

Resume should include:

- **Contact Information:** Name, Phone Number, and Email Address. If you don't have a number or email create a fake one.
- **Education:** Any Degrees, Certificates, or diplomas you have.
- **Work Experience:** List any jobs (paid or unpaid), volunteer roles, internships, or significant projects. Focus on responsibilities and accomplishments, not just job duties.
- **Skills:** List both hard skills (e.g., software proficiency, coding languages) and soft skills (e.g., teamwork, communication).
- **Extracurricular Activities:** Clubs, organizations, sports teams – again, highlight any leadership roles or significant involvement.

Formatting:

- **Font:** Use a clear, professional font like Times New Roman, Arial, or Calibri (size 10-12).
- **Consistency:** Ensure consistent formatting throughout (bullet point style, font size, spacing).

Review & Refinement

- **Proofread Carefully:** Check for typos, grammatical errors, and inconsistencies. Ask a friend or other student to review it too.
