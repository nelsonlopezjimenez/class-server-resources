# CIS 243 — Backend Web Development
## Quarter 3 Curriculum Guide | 10 Weeks | Mon–Thu, 3 hrs/day

> **Prerequisites assumed:** HTML/CSS (CIS 241), JavaScript (CIS 242), minimal terminal experience, some React exposure.
> **Stack:** Node.js · Express v4 · MongoDB (local) · Mongoose · JWT · React (frontend integration) · Tailwind CSS

---

## 🗓️ 10-Week Rough Schedule

<details>
| Week | Theme | Key Deliverable |
|------|-------|----------------|
| **1** | Node.js Fundamentals + Motivation | Run scripts, use npm packages |
| **2** | Express v4 from Scratch | First working HTTP server |
| **3** | REST API Design + Advanced Routing | Multi-route API w/ Postman testing |
| **4** | MongoDB Local Setup + CRUD | Database-backed Express app |
| **5** | Mongoose Schemas + Models | Typed data with validation |
| **6** | MVC Architecture | Refactored app into M/V/C folders |
| **7** | Signup / Login / Protected Routes | Working auth backend |
| **8** | Advanced Token Handling + Security | Refresh tokens, httpOnly cookies |
| **9** | Intro to Hono + SSR Modern Approaches | Side-by-side comparison with Express |
| **10** | Capstone Project + Code Review | Full-stack MERN mini-app |
</details>
---

## 🛠️ VS Code Extensions (Install Week 1)

| Extension | Purpose |
|-----------|---------|
| **REST Client** (Huachao Mao) | Test HTTP routes without Postman |
| **Thunder Client** | Lightweight Postman alternative inside VS Code |
| **ESLint** | Catch JS errors early |
| **Prettier** | Auto-format on save |
| **MongoDB for VS Code** | Browse collections inside the editor |
| **GitLens** | Git history inline |
| **Tailwind CSS IntelliSense** | Autocomplete for Tailwind classes |
| **Error Lens** | Show errors inline |
| **DotENV** | Syntax highlight `.env` files |

---

---

# 📅 WEEK 1 — Node.js Fundamentals & Full-Stack Motivation

## Learning Goals
- Articulate what backend development is and why it matters
- Run `.js` files with Node.js from the terminal
- Use `npm` to install and use packages
- Write reusable functions (modules) in Node.js
- Understand the difference between `require()` (CommonJS) and `import` (ESM)

---

## Monday — Frontend vs Backend + The Full-Stack Picture

### Motivation: Why Become a Full-Stack Developer?

| Role | What they control | Tools |
|------|-------------------|-------|
| Frontend dev | What the user **sees** | HTML, CSS, JS, React |
| Backend dev | What the server **does** | Node.js, Express, databases |
| **Full-stack dev** | **Both** | All of the above |

**The MERN Stack:**
```
React (browser) ←→ Express + Node.js (server) ←→ MongoDB (database)
     M               E        N                      M
```

> 💡 **Real-world hook:** Every time you log into Instagram, the frontend (React/React Native) sends your credentials to a backend server (Node.js/Python/Go), which checks a database (MongoDB/PostgreSQL) and sends back a token. You are about to build exactly that.

### Client-Side vs Server-Side — The Key Distinction

| | Client-Side | Server-Side |
|--|-------------|-------------|
| **Runs on** | User's browser | Server (your computer, a cloud VM) |
| **Languages** | HTML, CSS, JS | Node.js, Python, PHP, Java, Go |
| **Can access DB?** | ❌ Never directly | ✅ Yes |
| **Visible to user?** | ✅ Source is inspectable | ❌ Hidden |
| **Examples** | Form validation, animations | Auth, database queries, business logic |

### 🖥️ Classroom Discussion Prompt
> "You've built websites with HTML, CSS, and JavaScript. Where does the data go when a user submits a form? Where does it come from when you load a page?"

---

## Thursday — Your First Node.js Scripts

### Terminal Survival Kit (for students with minimal CLI experience)

```bash
pwd          # where am I?
ls           # list files
cd folder    # enter a folder
cd ..        # go up one level
mkdir name   # create a folder
touch file   # create a file
node file.js # run a JS file with Node
```

### Running JavaScript Outside the Browser

Create `hello.js`:
```js
// No DOM, no window, no document — just JavaScript
const name = "CIS 243";
console.log(`Hello from ${name}!`);

// Node.js gives us access to the system
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
```

```bash
node hello.js
```

# Item-2

# cis243 cis245 week1 Apr 6 (M) to Jun 11 (F)

## week 1: Apr 6-10

1.  Introduction to backend server development
2.  How the Internet works
3.  How the browser works
4.  Command line interface and linux commands
5.  edu.gcfglobal.org offline resources: computer basics, internet basics, html, css, JavaScript
6.  from gcfglobal.org
    1.  [https://edu.gcfglobal.org/en/internetbasics/](https://edu.gcfglobal.org/en/internetbasics/) add tutorial.html
    2.  [https://edu.gcfglobal.org/en/internet-tips/](https://edu.gcfglobal.org/en/internet-tips/)
    3.  [https://edu.gcfglobal.org/en/search-better-2018/](https://edu.gcfglobal.org/en/search-better-2018/)
    4.  [https://edu.gcfglobal.org/en/techsavvy/](https://edu.gcfglobal.org/en/techsavvy/)
    5.  [https://edu.gcfglobal.org/en/prezi](https://edu.gcfglobal.org/en/prezi)
7.  Repo books by Flavio Copes
    1.  astro-handbook.pdf
    2.  express-handbook.pdf
    3.  git-cheat-sheet.pdf
    4.  go-handbook.pdf
    5.  linux-commands-handbook.pdf
    6.  nextjs-pages-router-handbook.pdf
    7.  python-handbook.pdf
    8.  react-handbook.pdf
    9.  typescript-handbook.pdf
8.  [http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn\_web\_development/Getting\_started/Web\_standards/How\_the\_web\_works.html](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works.html)
9.  [https://developer.mozilla.org/en-US/docs/Learn\_web\_development/Getting\_started/Web\_standards/How\_the\_web\_works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
10.  [https://developer.mozilla.org/en-US/docs/Learn\_web\_development](https://developer.mozilla.org/en-US/docs/Learn_web_development)

## Lab1-1: Scavenger Hunt

# Item-3

## **Introduction to Week 14.1 April 7-11**

## [Express](https://expressjs.com/)[5.1.0](https://expressjs.com/en/changelog/4x.html#5.1.0)

# Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org/en/)

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## APIs

With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.

## Performance

Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

## Middleware

Express is a lightweight and flexible routing framework with minimal core features meant to be augmented through the use of Express [middleware](https://expressjs.com/en/resources/middleware.html) modules.

## **Learning Outcomes**

By the end of this module, students will be able to…

-   Identify the difference between backend and frontend web development
-   Understand how express is the choice for our web development and in the MERN stack (Mongo, Express, React)
-   Access the offline resources related to the backend in general, and express in particular.
-   Read offline websites correctly rendered after installing the chrome extension written by one of our classroom assistants.
-   Install nodejs modules with npm: knock-knock-jokes, cat-me, faker
-   Install an express server from scratch.

## **Week at a Glance**

To help you achieve the Week One learning outcomes, you will complete the following activities this week:

### **READ/WATCH/EXPLORE**

-   Read Section 1: Getting Started with MERN from Full-Stack React Projects by Shama Hoque, pages 9-26
-   Read Welcome to Node.js chapter 1 from Node.js In Action by Young, Meck, and Catelon, page 3-10
-   Read What is a Node web application, page 50-56 from Node.js In Action
-   Read section Using Web Protocols from Node Cookbook by Bethany Griggs, page 82-99
-   Read Exploring Nodejs web Frameworks, chapter 6 from Node Cookbook, chapter 6, page 154-169

### **COMPLETE**

-   npm install knock-knock-jokes, cat-me, faker-js modules.
-   Install your first express server from scratch
-   Install the chrome extension httRedirect
-   Install or paste node\_modules folder for the app mern-social found in chapter 05 in Full-Stack React Projects source code

### **DISCUSS**

### **REVIEW**

-   From Node.js In Action: 
    -   Building RESTful web services, page 54
    -   What is a framework? page 83
    -   Example of RESTfull routes, page 121
-   From Full-Stack React Project review:
    -   MERN stack, page 14
    -   Social media platform, page 20

    # Item-4

    
## **Week 1 Readings & Other Materials**

### **Read**

# Installing

Assuming you’ve already installed [Node.js](https://nodejs.org/), create a directory to hold your application, and make that your working directory.

-   [Express 4.x](https://expressjs.com/en/4x/api.html) requires Node.js 0.10 or higher.
-   [Express 5.x](https://expressjs.com/en/5x/api.html) requires Node.js 18 or higher.

```
$ mkdir myapp
$ cd myapp
```

Use the `npm init` command to create a `package.json` file for your application. For more information on how `package.json` works, see [Specifics of npm’s package.json handling](https://docs.npmjs.com/files/package.json).

```
$ npm init
```

This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:

```
entry point: (index.js)
```

Enter `app.js`, or whatever you want the name of the main file to be. If you want it to be `index.js`, hit RETURN to accept the suggested default file name.

Now, install Express in the `myapp` directory and save it in the dependencies list. For example:

```
$ npm install express
```

To install Express temporarily and not add it to the dependencies list:

```
$ npm install express --no-save
```

By default with version npm 5.0+, `npm install` adds the module to the `dependencies` list in the `package.json` file; with earlier versions of npm, you must specify the `--save` option explicitly. Then, afterwards, running `npm install` in the app directory will automatically install modules in the dependencies list.

### **Read**

-   Ensure your Verdaccio server is running
-   make a folder with: `$ mkdir myExpress-Date`
-   navigate to your folder and run: `$ npm init -y`
-   add `"type":"module"` to your package.json
-   run `$ npm install` for
    -   express
    -   nodemon
    -   morgan (optional)
-   create an index.js and make your server
-   Add start Scripts
    
    If using nodemon, add a start script to your package.json
    
    "scripts": {
        "start": "nodemon index.js",
    },
    
    If not using nodemon
    
    "scripts": {
        "start": "node index.js",
    },
    

If you cannot install morgan, or want more control over what you see in the console, place the following code below your exports and above the routes in your index.js file.

//log function that replicates morgan
function log(request, response, next){
    console.log(request.url);
    next();
};
app.use(log)

### The most basic express server

import express from 'express'; 
const PORT = 3000;
const app = express()
app.get('/',(request, response) => {  
   res.send('hello World')  
});
app.listen(PORT, () => {  
   console.log(\`listening on port ${PORT}\`)  
});

The most basic express server with logging middleware (morgan replacement)

import express from 'express'; 
const PORT = 3000;
const app = express();
function log(request, response, next){
    console.log(request.url);
    next();
};
app.use(log);
app.get('/',(request, response) => {  
   res.send('hello World')  
});
app.listen(PORT, () => {  
   console.log(\`listening on port ${PORT}\`)  
});

### **Watch**

### **Explore**

-   [Explore: https://v9.fakerjs.dev/guide/](https://v9.fakerjs.dev/guide/)
-   Explore: [https://v9.fakerjs.dev/api/](https://v9.fakerjs.dev/api/)
-   Explore: [https://expressjs.com](https://expressjs.com)
-   Explore: [https://expressjs.com/en/starter/hello-world.html](https://expressjs.com/en/starter/hello-world.html)
-   [https://expressjs.com/en/starter/basic-routing.html](https://expressjs.com/en/starter/basic-routing.html)
-   [https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html)

### **Listen**

# Item-5
# Lab1-1: Scavenger Hunt
Download the compressed file bash-command-line.

Extract the file into your ~/Desktop/quarter3/labs folder

In VS Code open the folder, read the README file where you find the instructions of the lab.

You will submit a txt file with your answers and/or add the same content to the text box entry (remember to use the preformatted option of the menu). Do not forget you add your name (and date) to the files you edit. 

# Item-6
What Are Your Learning Expectations?
Purpose
The purpose of this assignment is to reflect on your expectations, needs, and learning preferences and share them with your instructor.

Task
Hit the "subscribe" button if necessary
Make sure your read the instructions below, particularly on the length of your answer.
Do not forget to click "submit"
Please answer the following questions and submit your answers to Canvas. 

Do you have any questions or concerns about classes that you would like to share with me?
Do you have any accessibility requests for me regarding online teaching? For example, this could include materials available in a different format, transcriptions, specific approaches to discussion boards, a preference of video discussion vs. discussion boards, etc? If you think you may need to update existing accommodations, I recommend reaching out to the Dean of Corrections Education.
What else would you like me to know as I try to create the best possible learning environment during the rest of the quarter?
Feel free to submit a video response or type your response by clicking on the "Text Entry" button below. You may also submit your questions as a Google Doc or Microsoft Word document.

Criteria for Success
To maximize your opportunity for success, please review the guidelines listed here and check your work before submitting. Your submission should thoughtfully and thoroughly answer each of the questions listed in the prompt. Your answers to each question should be written in complete sentences. Your submission should represent your informed thoughts and ideas and should be written in your own words and phrases.

# Item-7

Week One Review
Summary
During the first and second week you learned the main goals for quarter 3. We studied the differences between frontend and backend development. You learned how nodejs, as well as npm (node package manager) work. You install the packages knock-knock-jokes, cat-me, faker as practice. Finally, you learned how to install an express server from scratch and wrote your first route to show the message "Hello World!!" on the web page served by express. 