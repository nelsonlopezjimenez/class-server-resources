---
publishDate: 2026-04-05
title: "CIS 242 - Web Development II: JavaScript"
description: "Lab 1-2: Date() - Temporal (new syntax)"
week: 13
section: 2
---

# CIS 242 - Web Development II: JavaScript Lab 1-2

## Introduction to JavaScript 
1. Challenge 1: Add another button “Display Year only” 
1. Challenge 2: Add another button “Display Month only"
1. Challenge 3: Add another button “Display Day only” 
1. Challenge 4: Add another button “Display Full date” 
1. Challenge 5: Add another button “Display Full time” 

## Steps
1. Navigate to your Desktop/Quarter2/Labs/ folder
1. Right-click on your work folder and click New > Text Document.
1. Create date.html file
1. Open the folder in your VS Code
1. Select date.html file to edit
1. Select an HTML5 template using the shortcut
1. add the following code:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Section2 Lab1-2</title>
  </head>
  <body>
    <h1>YOUR NAME and DATE</h1>
    <h2>My First JavaScript</h2>
    <button id="btn">Click me to display Date and Time.</button>
    <p id="demo"></p>
  <script>
        const date = document.querySelector('#btn').addEventListener("click", myFunc);
        function myFunc(){
            const currentDate = Date();
            document.querySelector("#demo").innerHTML = currentDate;
        }
    </script>
  </body>
</html>
```






# CIS 242 
## Prompt: Refactor date.html to use Temporal new syntax
Key teaching moments built into the comments:

**Top of script block** — a full conceptual intro covering why `Date` is broken and how Temporal fixes each issue, plus definitions of `PlainDate`, `PlainTime`, `ZonedDateTime`, `Instant`, and immutability.

**Per-button comments explain:**
- Starter — `ZonedDateTime` vs `Date().toString()` locale variance
- Year — property access (`today.year`) vs method call (`getFullYear()`)
- Month — the big fix gets a box comment; also renders the old vs new value live in the page so students see the difference without reading code
- Day — `today.day` vs `today.dayOfWeek` distinction (mirrors the old `getDate()` vs `getDay()` confusion)
- Full date — explains `today.toString()` ISO shortcut vs manual MM/DD/YYYY
- Full time — explains `time.toString()` shortcut as a bonus comment

**One line worth pointing out in class:**
```javascript
const { Temporal } = temporalPolyfill;
```
This is destructuring — worth a brief mention since students will see that pattern throughout modern JS.