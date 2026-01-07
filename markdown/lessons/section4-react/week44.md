---
title: "Week 10 - React" 
description: "Week 10 : Final Project Instructions to submit. Edited on 11/19/2025 "
week: 44
---

# Final Project

## To turn in your Full Stack Recipe App: 

### Prior to submission, ensure the following:

1. [     ] Web page looks similar to the provided screenshots.
1. [     ] Code is indented correctly (to show parent-child relationships)
1. [     ] Comment with student and assignment information at top of EVERY file you edit.

<hr>

### Readying your app files for submission

The following folder structure may not match exactly yours, this is only a guide. The naming may vary too. 

```
| fullstack-recipe-app/
|
|-- .gitignore
|-- README.md
|-- 
|-- backend/
|     |-- src/
|          |--- controllers/
|          |        |---- auth.controller.js
|          |        |---- user.controller.js
|          |--- helpers/
|          |       | ---- dbErrorHandler.js
|          |--- models/
|          |       |---- user.model.js
|          |--- routes/
|          |       |---- auth.routes.js
|          |       |---- user.routes.js
|          |--- express.js
|          |--- server.js
|     
|-- frontend/
|     |-- index.html
|     |-- package.json
|     |-- vite.config.js
|     |-- public
|     |-- src/
|          |--- assets/
|          |--- models/
|          |       |---- user.model.js
|          |--- routes/
|          |       |---- auth.routes.js
|          |       |---- user.routes.js
|          |--- App.jsx
|          |--- App.css
|          |--- index.css
|          |--- main.jsx
|     

```
1.  README.md file must include: 
    1. Your Name
    1. Date
    1. Web Application Developer Certificate Program Final Project
    1. Assignment Title
    1. folders included
    1. HTML/CSS/JavaScript files included
    1. Instructions on how to install, view, use, modify your web app. Be brief but through. Assume the person looking at your app is a beginner. 

Example of a README.md file (example is from ASPCA website. You must change the contents to apply to your recipe app):

```markdown
“Your Name”, ASPCA Website Assignment

This website includes the following files: index.html, key_issues.html, our_response.html, how_you_can_help.html, style.css, and images.

To view the website, open any of the HTML files in the Google Chrome browser. 

Make sure you have saved your README.md file into your website folder.
```

NOTE: in our environment we are unable to install reliably the node_modules folder. In general, the node_modules folder content should not be tracked (.gitignore file content should include a "node_modules" entry). If you created a repository with the node_modules, you are going to compress it without the node_modules folder.

Also, if you created two separate repositories corresponding to backend/frontend, you should create a new repository the would include the content of both. If you want your project (as well as your data) saved and transferred to you or anyone on your visitors list, make sure to save it, compress it and add your full name to the file's name. DO NOT INCLUDE MATERIALS THAT YOU MIGHT BE ABLE TO ACCESS ON THE PUBLIC INTERNET LIKE VIDEOS, REPOSITORIES, FILES, DOCUMENTS THAT YOU DID NOT EDIT. 