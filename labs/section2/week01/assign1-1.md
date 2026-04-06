---
publishDate: 2026-04-0
title: "CIS 242 - Web Development II: JavaScript"
description: "Lesson 1: First JavaScript: navigator object, assign1-1"
week: 13
section: 2
---

# CIS 242 - Web Development II: JavaScript Lesson 1

Welcome to CIS 242 - Web Development II: JavaScript. Follow the steps to complete the assignments.

If you have not created a folder structure for this section 2 (or quarter 2) now it is time to do so. The default location for the course materials is the Desktop location in you laptop.

In your quarter2/labs folder create a file assign1-1.html. Using VS Code either create or copy an HTML template and write the content to match the following content:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Section2 Assign1-1</title>
  </head>
  <body>
    <h1>Javascript My First Script</h1>
    <script>
      document.write(navigator.userAgent);
      document.write("<p>");
      document.write(navigator.language);
      document.write("</p>");
    </script>
  </body>
</html>
```

## Challenge 1:

Modify assign1-1.html to show other navigator object properties as
shown below. Remember to show your name and date.

```sh
navigator.userAgent
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36

navigator.language
en-US

navigator.languages
en-US, en

navigator.onLine
true

navigator.cookieEnabled
true

navigator.hardwareConcurrency
4

navigator.platform(deprecated)
Win32

navigator.appName(deprecated)
Netscape

navigator.appVersion(deprecated)
5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
```

**Hint**: Refer to [http://www.w3schools.com/jsref/obj_navigator.asp](http://www.w3schools.com/jsref/obj_navigator.asp) and/or [localhost](http://localhost:22022/websites/w3schools.com/jsref/obj_navigator.html)

```html
document.write("
<p>
  <span style="color:red"> navigator.appName : </span> <br />");
  document.write(navigator.appName); document.write("
</p>
"); document.write("
<p>
  <span style="color:red"> navigator.appVersion : </span> <br />");
  document.write(navigator.appVersion); document.write("
</p>
"); document.write("
<p>
  <span style="color:red"> navigator.appCodeName : </span> <br />"); . . .
  Replace . . . by your own code!!!
</p>
```

## Challenge 2:

Modify assign1-1.html to add **Show Geolocation** button

**HINT** In the body add a button element
<p id="demo"></p>
<button id="btn-geo">Show Geolocation</button>
    ..........

Inside the script element add the following code:
<script>
  document.getElementById("btn-geo").addEventListener("click", getLocation);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("demo").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    document.getElementById("demo").innerHTML =
      "Latitude: " +
      position.coords.latitude +
      ", longitude:  " +
      position.coords.longitude;
  }


