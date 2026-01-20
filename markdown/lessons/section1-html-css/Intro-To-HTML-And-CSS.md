---
publishDate: 2026-01-21
description: "Introduction to CIS Web Developer Certification course work"
title: "Welcome to Web Development!"
week: 0
section: 1
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

Today you will be given a laptop. Make sure the following icons appear on your desktop:

- MGL Launcher (currently v2.0): This is the class server and needs to be up and running anytime you wish to access class resources
- fCC (Free Code Came): This is where the bulk of mandatory reading
- VSCode: This is the main program that will be used to edit/create code files
- Chrome: This is the default browser for this course
- NUValidator: This is used to validate your HTML code.
- Zeal: Resource for searching information across multiple websites
- Video Viewer: Used to view Videos on your laptop.

### Mandatory Readings

[HTML and CSS Syllabus](/api/infomration/syllabus-quarter-1)
[What Are the Basic Parts of a Computer?](http://localhost:8001/learn/responsive-web-design-v9/lecture-understanding-computer-internet-and-tooling-basics/what-are-the-basic-parts-of-a-computer)
[How Can You Effectively Work With Your Keyboard, Mouse, and Other Pointing Devices?](http://localhost:8001/learn/responsive-web-design-v9/lecture-understanding-computer-internet-and-tooling-basics/how-to-effectively-work-with-your-keyboard-mouse-and-other-pointing-devices)
[What Are the Different Types of Internet Service Providers?](http://localhost:8001/learn/responsive-web-design-v9/lecture-understanding-computer-internet-and-tooling-basics/what-are-the-different-types-of-internet-service-providers)
[What Are Safe Ways to Sign Into Your Computer?](http://localhost:8001/learn/responsive-web-design-v9/lecture-understanding-computer-internet-and-tooling-basics/what-are-safe-ways-to-sign-into-your-computer)

**Important** For the Following links to work click on the GCF button on the top menu bar of this site and download the following sections:

1. learning-tips
1. problem-solving-and-decision-making

[Learning Tips](/websites/gcfglobal-learning-tips/tutrial.html)
[🧠 Discover your learning style](/websites/gcfglobal-learning-tips/discover-your-learning-style/lesson.html)
[🔄 The study cycle](/websites/gcfglobal-learning-tips/the-study-cycle/lesson.html)
[Problem Solving And Decision Making](/websites/gcfglobal-problem-solving-and-decision-making/tutorial.html)

### Exercise 1.1: Set up folders

1. On your desktop right click.
   - In the menu that pops up hover over the `new >` and select folder
1. Name this folder `section 1`
1. Double click the section one folder and repeat step 1 to create a folders for
   - Labs - This is where your various daily labs will reside
   - Assignments - This is where the weekly assignment files/folders will be
   - Practice - This is where you can put files/folders that your using to practice the various skills you will be learning through out the section.

- Examples - This is where you will store example files of HTML, CSS, so that you can view them and see the full code.

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

### Working with DevTools and Validators

- [What Is an HTML Validator, and How Can It Help You Debug Your Code?](http://localhost:8001/learn/responsive-web-design-v9/lecture-working-with-html-tools/what-is-an-html-validator) - **Note**: We use NU Validator as we don't have access to w3's online validator. If a link is not on your desktop already you can find it here: C:\Users\Public\bin\Desktop-icons or ask an instructor/ca for assistance.
- [How to Use the DOM Inspector and DevTools to Debug and Build Your Projects](http://localhost:8001/learn/responsive-web-design-v9/lecture-working-with-html-tools/how-to-use-the-dom-inspector-and-devtools)

### Mandatory Readings

[What Are the Different Types of Tools Professional Developers Use?](http://localhost:8001/learn/responsive-web-design-v9/lecture-understanding-computer-internet-and-tooling-basics/what-are-the-different-types-of-tools-professional-developers-use)
[How Can You Use File Management Applications on Your Computer?](http://localhost:8001/learn/responsive-web-design-v9/lecture-working-with-file-systems/how-can-you-use-file-management-applications-on-your-computer)
[What Are Best Practices for Naming Files for Web Applications?](http://localhost:8001/learn/responsive-web-design-v9/lecture-working-with-file-systems/what-are-best-practices-for-naming-files-for-web-applications)
[What Are Best Practices for File/Folder Organization in Web Applications?](http://localhost:8001/learn/responsive-web-design-v9/lecture-working-with-file-systems/what-are-best-practices-for-file-folder-organization-in-web-applications)
[How Can You Create, Move, and Delete Files and Folders Using Explorer/Finder?](http://localhost:8001/learn/responsive-web-design-v9/lecture-working-with-file-systems/how-to-create-move-and-delete-files-and-folders-using-explorer-finder)
[How Can You Search for Files and Folders on Your Computer?](http://localhost:8001/learn/responsive-web-design-v9/lecture-working-with-file-systems/how-to-search-for-files-and-folders-on-your-computer)
[What Are Some Common File Types You Will Work With in Web Applications?](http://localhost:8001/learn/responsive-web-design-v9/lecture-working-with-file-systems/what-are-some-common-file-types-you-will-work-with-in-web-applications)
[What Are Some of the Common Web Browsers Available Today and How Do You Install One?](http://localhost:8001/learn/responsive-web-design-v9/lecture-browsing-the-web-effectively/what-are-some-of-the-common-web-browsers-available-today)
[What Is the Difference Between a Web Browser, a Website, and a Search Engine?](http://localhost:8001/learn/responsive-web-design-v9/lecture-browsing-the-web-effectively/what-is-the-difference-between-a-web-browser-a-website-and-a-search-engine)
[How to Use a Search Engine Effectively to Achieve Optimal Results](http://localhost:8001/learn/responsive-web-design-v9/lecture-browsing-the-web-effectively/how-to-use-a-search-engine-effectively-to-achieve-optimal-results)

## Day 3: Automation, plagiarism, downloads, zip files

### Mandatory Readings

**Important** For the Following links to work click on the GCF button on the top menu bar of this site and download the following sections:

1. resumewriting
1. thenow
1. usinginformationcorrectly
1. techsavvy

[📄 Resume Writing](/websites/gcfglobal-resumewriting/tutorial.html)
[🖼️ Resume Writing Gallery](/websites/gcfglobal-resumewriting/gallery-of-sample-resumes/lesson.html)
[🤖 Automation impact](/websites/gcfglobal-thenow/how-will-automation-impact-our-lives/lesson.html)
[Understanding login](/websites/gcfglobal-thenow/understanding-login-methods/lesson.html)
[⚠️ What is plagiarism ](/websites/gcfglobal-usinginformationcorrectly/avoiding-plagiarism/lesson.html)
[📸 Taking screenshots](/websites/gcfglobal-techsavvy/taking-screenshots/lesson.html)
[📁 Finding your downloads](/websites/gcfglobal-techsavvy/finding-your-downloads/lesson.html)
[🗜️ Working with zip files](/websites/gcfglobal-techsavvy/working-with-zip-files/lesson.html)
[Common keyboard shortcuts](/websites/gcfglobal-techsavvy/keyboard-shortcuts/lesson.html)
[⇥ tab key usage](/websites/gcfglobal-techsavvy/speed-up-your-workflow-with-the-tab-key/lesson.html)

You can also download any other GCF sites you want to explore.

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

### Assignment 1: Create a Basic Resume

In canvas under assignment 1 - copy or write a resume in the "text" submission box.

Resume should include:

- **Contact Information:** Name, Phone Number, and Email Address. If you don't have a number or email create a fake one.
- **Education:** Any Degrees, Certificates, or diplomas you have.
- **Work Experience:** List any jobs (paid or unpaid), volunteer roles, internships, or significant projects. Focus on responsibilities and accomplishments, not just job duties.
- **Skills:** List both hard skills (e.g., software proficiency, coding languages) and soft skills (e.g., teamwork, communication).
- **Extracurricular Activities:** Clubs, organizations, sports teams – again, highlight any leadership roles or significant involvement.
