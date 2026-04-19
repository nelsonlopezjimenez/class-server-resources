# Week 15 Item-1 assign3-1

# Assign3-1: Controlling Program Flow

## Week 3 : April 20

## Lesson Plan

### Step 1. Lesson 4:

In ~/Desktop/Quarter2/Assignments/ folder add a folder week3. Inside the folder create the following file: example\_continue.html. Add the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example: continue Statement</title>
  </head>
  <body>
    <h3>CIW JavaScript Specialist</h3>
    <hr />
    <div id="years"></div>
    <h3 id="count"></h3>

    <script>
      /*
      continue skips the rest of the loop body for the current iteration
      and jumps back to the loop condition.
      Here: skip any year NOT divisible by 4 — only leap years get through.
      NOTE: this is a simplified leap year check (real rule also excludes
      century years unless divisible by 400).
    */
      let leapYears = 0;
      let curYear = 2001;
      const results = [];

      while (curYear <= 2100) {
        curYear++;
        if (curYear % 4) continue; // not divisible by 4 — skip it
        leapYears++;
        results.push(curYear);
      }

      document.getElementById("years").textContent = results.join(" ");
      document.getElementById(
        "count"
      ).textContent = `The number of leap years from 2001 to 2100 is: ${leapYears}`;
    </script>
  </body>
</html>
```

## Step 2: Render the file

It will display the number of lear years from 2001 to 2100 as shown:

![leap\_years\_25.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064949/preview)

### Challenge 1: Modify example\_continue.html to display the non-leap years.

![userName\_datenow.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064956/preview)

**HINT** Add the code:

```js
let nonLeapYears = 0;
curYear = 2001;
while (curYear <= 2100) {
  curYear++;
  if (curYear % 4 === 0) continue; // divisible by 4 — skip it
  // ...... Add your code HERE


}
```

### Take a screenshot of the output and submit

## Step 3: create a file example\_doWhile.html file

Write the following html code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example: do...while Loop - Fixed</title>
</head>
<body>
  <h3>CIW JavaScript Specialist</h3>
  <hr>
  <div id="output"></div>

  <script>
    /*
      Fixed version: the original used document.write() inside a function
      called via onload — which wipes the entire page after it has loaded.
      Fix: collect output into an array, render via innerHTML.
    */
    function dowhiletest() {
      let num = 0;
      const lines = [];
      do {
        lines.push(num);
        num++;
      } while (num < 10);
      document.getElementById("output").innerHTML = lines.join("<br>");
    }

    window.addEventListener('load', dowhiletest);
  </script>
</body>
</html>
```

### Render the file

This will display the number 0 to 9 using a do-while loop.

![doWhileFixed.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064953/preview) 

### Challenge 2: Modify example\_doWhile.html to display the numbers from 9 to 0

Remember to show your name and date 

![do\_while\_fixed\_challng.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064952/preview)

**HINT** Use:

```js
function dowhiletest() {
      let num = 9;
      const lines = [];
      do {
        lines.push(num);
        num--;
      } while (num .....);// write your code HERE
      document.getElementById("output").innerHTML = lines.join("<br>");
    }
```

### Take a screenshot of the output and submit

## Step 4: Write example\_switch.html file and open it with the browser

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example: Switch Statement</title>
</head>
<body>
  <h2>CIW JavaScript Specialist</h2>
  <hr>
  <h3>Thank you for your order!</h3>

  <script>
    /*
      switch evaluates one expression and jumps to the matching case.
      Cleaner than chained if/else when comparing one variable to many values.

      fall-through: WA and NV share the same code block — no break between
      them means both cases execute the same alert. Intentional pattern.

      .toUpperCase() normalizes input so "wa", "WA", "Wa" all match "WA".
    */
    const orderAmount = 50;

    const state = prompt("To which state will your order be shipped?", "");

    // Tax rates by state
    switch (state.toUpperCase()) {
      case "CA":
        alert(`Your total is: ${(orderAmount * 1.0825).toFixed(2)}`);
        break;
      case "HI":
        alert(`Your total is: ${(orderAmount * 1.04).toFixed(2)}`);
        break;
      case "WA":  // fall-through — WA and NV share the same rate
      case "NV":
        alert(`Your total is: ${(orderAmount * 1.065).toFixed(2)}`);
        break;
      case "AZ":
        alert(`Your total is: ${(orderAmount * 1.05).toFixed(2)}`);
        break;
      case "UT":
        alert(`Your total is: ${(orderAmount * 1.0475).toFixed(2)}`);
        break;
      default:
        alert(`Your total is: ${orderAmount.toFixed(2)}`);
    }
  </script>
</body>
</html> 
```

You will be prompted to enter a state:

```html
  The total (with tax) will be displayed: Repeat with other states.
```

### Challenge 3: Modifiy the example\_switch.html file to display the total when full state names are entered

![PROMPT-CALIFORNIA.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064951/preview)

![show\_wa\_tax\_value.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064955/preview)

Repeat with other states.

**HINT**

```js
    switch (state.toUpperCase()) {
      case "CA":
      case "CALIFORNIA":
        alert(`Your total is: ${(orderAmount * 1.0825).toFixed(2)}`);
        break;
      case "HI":
      case "HAWAII":
        // ........ continue your answer here
```

### Take a screenshot of the output and submit: you should submit two screenshots per state and at least for one state.

# Item-2
# Lab3-1: Controlling Program Flow

## Week 3 : April 20

1.  Use the if... statement
2.  Use the while... statement
3.  Use the do...while statement
4.  Use the for... statement
5.  Use the break and continue statements
6.  Use the switch... statement

### Step 1. Lesson 4: Use the if .. non-else statement

Create a file in your ~/Desktop/Quarter2/Labs folder. The name if-no-else.html. Write the following code and render the file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Grade Checker</title>
  </head>
  <body>
    <p>Enter a percentage grade and click Check Grade:</p>
    <label for="grade">Percentage Grade:</label>
    <input type="number" id="grade" min="0" max="100" />
    <br /><br />
    <button type="button" id="checkBtn">Check Grade</button>
    <p id="demo"></p>

    <script>
      function checkGrade() {
        const grade = parseFloat(document.getElementById("grade").value);
        if (isNaN(grade)) {
          // guard
          document.getElementById("demo").textContent =
            "Please enter a valid number.";
          return;
        }
        let letterGrade;
        if (grade >= 90) {
          letterGrade = "A";
          document.getElementById(
            "demo"
          ).textContent = `Letter Grade: ${letterGrade}`;
        }
      }
      document.addEventListener("DOMContentLoaded", () => {
        document
          .getElementById("checkBtn")
          .addEventListener("click", checkGrade);
      });
    </script>
  </body>
</html>
```

![gradeA.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064979/preview)

### Take a screenshot of the output and submit

## Step 2: use if .. else statements

This webpage will calculate your grade to display

1.  A if your percentage grade is >= 90
2.  B if your percentage grade is >= 80
3.  C if your percentage grade is >= 70.
4.  D if your percentage grade is >= 60.
5.  F if your percentage grade is < 60

### Challenge 1: write the code to calculate the grade with different values

**HINT**

```js
if (grade >= 90) {
  letterGrade = "A";
} else if (grade >= 80) {
  letterGrade = "B";
} else if (grade >= 70) {
  letterGrade = "C";
} else if (grade >= 60) {
  letterGrade = "D";
} else {
  letterGrade = "F";
}
```

![gradeC.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064978/preview)

### Take a screenshot of the output and submit

## Step 3: Use the while loop

Create a file while\_count\_to\_ten.html. Write the following code and render.

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript while loop</h2>
    <p id="demo"></p>
    <script>
      let text = "";
      let i = 0;
      while (i < 10) {
        text += `<br>The number is ${i}`;
        i++;
      }
      document.getElementById("demo").innerHTML = text;
    </script>
  </body>
</html>
```

![while\_1\_10.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064977/preview)

### Take a screenshot of the output and submit

### Challenge 1: create a file while\_minus5\_to\_plus5.html

**HINT**

```js
let i = -5;
while (i <=  .......)
```

 ![while\_minu5\_5.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064976/preview)See also [https://www.w3schools.com/js/js\_loop\_while.asp](https://www.w3schools.com/js/js_loop_while.asp)

### Take a screenshot of the output and submit

### Challenge 2: create a file while\_plus5\_to\_minus5.html

```js
let i = 5;
while (i >=  .......){
    //....
    i--;
}
```

### Take a screenshot of the output and submit

### Challenge 3: while\_1to10\_step\_2.html

HINT

```js
while (i <= 10) {
  // .....
  i = i + 2;
}
```

### Take a screenshot of the output and submit

## Step 4: Use the do....while loop

Create a file doWhile\_1\_to\_10.html

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript do-while loop</h2>
    <p id="demo"></p>
    <script>
      let text = "";
      let i = 1;
      do {
        text += `<br>The number is ${i}`;
        i++;
      } while (i <= 10);
      document.getElementById("demo").innerHTML = text;
    </script>
  </body>
</html>
```

### Take a screenshot of the output and submit

See also [https://www.w3schools.com/jsref/jsref\_dowhile.asp](https://www.w3schools.com/jsref/jsref_dowhile.asp)

### Challenge 4: File doWhile\_10\_to\_1.html

HINT

```js
let i = 10;
do {
    // .....
    i--;
    // .....
} while // .......
```

![dowhile\_10to1.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064971/preview)

### Take a screenshot of the output and submit

## Step 5 : Use the for loop

Create a file for\_loop\_1\_to\_10.html. Write the following code and render.

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript for loop</h2>
    <p id="demo"></p>
    <script>
      let text = "";
      for (let i = 1; i <= 10; i++) {
        text += `${i} <br>`;
      }
      document.getElementById("demo").innerHTML = text;
    </script>
  </body>
</html> 
```

### Challenge 5: for\_loop\_from10\_to1.html

**HINT**

```js
for (let i = 0; i > 0; i++) {
  // .........
}
```

![forloop\_10\_to\_1.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064969/preview)

### Take a screenshot of the output and submit

## Step 6: for\_loop\_break.html

Write the following code and render the file

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript for loop with break</h2>
    <p id="demo"></p>
    <script>
      let text = "";
      for (i = 1; i <= 10; i++) {
        text += `${i} <br>`;
        if (i === 3) {
          break;
        }
      }
      document.getElementById("demo").innerHTML = text;
    </script>
  </body>
</html>
```

### Take a screenshot of the output and submit

### Challenge 5: create for\_loop\_with\_continue.html

HINT

```js
if (i >= 4) {
    continue;
}
```

![forloop\_continue.png](https://canvas.corrections.sbctc.edu/courses/392419000000591/files/392419000064967/preview)

### Take a screenshot of the output and submit

See also [https://www.w3schools.com/js/js\_break.asp](https://www.w3schools.com/js/js_break.asp) 

## Step 7: Using switch statement

Create file switch\_AB.html. This page will calculate the grade to display A if your percentage grade is >= 90. B if your percentage grade is >= 80.

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Click the button to display your letter grade using switch:</p>
    Percentage Grade: <input type="number" id="grade" /><br />
    <input type="button" id="checkBtn" value="Try it!!" />
    <p id="demo"></p>
    <script>
      function checkGrade() {
        let letterGrade;
        let grade = parseFloat(document.getElementById("grade").value);
        if (isNaN(grade)) {
          document.getElementById("demo").textContent =
            "Please enter a valid number.";
          return;
        }
        switch (true) {
          case grade >= 90:
            letterGrade = "A";
            break;
          case grade >= 80:
            letterGrade = "B";
            break;
        }
        document.getElementById("demo").innerHTML = letterGrade;
        document.addEventListener('DOMContentLoaded', () => {
      document.getElementById("checkBtn").addEventListener('click', checkGrade);
      }
    </script>
  </body>
</html>
```

### Take a screenshot of the output and submit

### Challenge 6: switch\_ABCDF.html

This web page will calculate the grade to display using a switch

1.  A if your percentage grade is >= 90
2.  B if your percentage grade is >= 80
3.  C if your percentage grade is >= 70.
4.  D if your percentage grade is >= 60.
5.  F if your percentage grade is < 60.

HINT

```js
 switch (true) {
          case grade >= 90:
            letterGrade = "A";
            break;
          case grade >= 80:
            letterGrade = "B";
            break;
            // ......
          default:
            letterGrade = "F";
            break;
 }  
```

### Take a screenshot of the output and submit

 See also [https://www.w3schools.com/js/js\_switch.asp](https://www.w3schools.com/js/js_switch.asp)