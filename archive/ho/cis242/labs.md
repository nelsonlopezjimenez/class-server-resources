# CIS 242 - Web Development II: JavaScript

## Week 1

2019-Winter, 1/2/2019, Wednesday, 6:00 PM-8:40 PM

## Lesson Plan

### Step 1. Lesson 1 Introduction to JavaScript Assignment ……………2

Open lab1-1_complete.htm

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Lab 1-1</title>
  </head>
  <body>
    <h3>CIW JavaScript Specialist</h3>
    <hr />
    <script type="text/javascript">
      <!--
      document.write(navigator.appName);
      document.write("<p>");
      document.write(navigator.appVersion);
      document.write("</p>");
      //-->
    </script>
  </body>
</html>
```

### Challenge 1: Modify lab1-1_complete.htm

to show other navigator object properties as
shown. Remember to show your name and date.
**_navigator.properties_** in red, values in black using document.write()

```htm
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Lab 1-1</title>
</head>
<body>
<h3>CIW JavaScript Specialist</h3>
<hr />
<script type="text/javascript">
<!--
document.write(navigator.appName);
document.write("<p>");
document.write(navigator.appVersion);
document.write("</p>");
document.write("<p> <span style='color:red'> navigator.appName : </span>
<br/>");
document.write(navigator.appName);
document.write("</p>");
document.write("<p> <span style='color:red'> navigator.appVersion : </span>
<br/>");
document.write(navigator.appVersion);
document.write("</p>");
document.write("<p> <span style='color:red'> navigator.appCodeName : </span>
<br/>");
```

### Challenge 2: Modify lab1-1_complete.htm to add a Show Geolocation button.

**HINT**

```html
Hint:
<p id="demo"></p>
<button onclick="getLocation()">Show Geolocation</button>
. . . document.write("
<p>
  <span style="color:red"> navigator.taintEnabled() : </span> <br />");
  document.write(navigator.taintEnabled()); document.write("
</p>
"); function getLocation() { if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition); } else {
document.getElementById("demo").innerHTML = "Geolocation is not supported by
this browser."; } } function showPosition(position) {
document.getElementById("demo").innerHTML = "Latitude: " +
position.coords.latitude + . . . ;
```

## Week 1: CIS242_2019_Winter_Week1_InClass_Labs.docx

2019-Winter, 1/2/2019, Wednesday, 6:00 PM-8:40 PM

### Labs (in class)

Welcome to CIS 242 - WEB DEVELOPMENT II: JavaScript! This is a hybrid class. You
need to login into EDCC Canvas. Follow the steps to complete the labs.
Student Assignments for this Week

1. Step 1. Lesson 1 Introduction to JavaScript ………….………………………….………2
1. Challenge 1: Add another button “Display Year only” ………..…….…8
1. Challenge 2: Add another button “Display Month only” ………….……9
1. Challenge 3: Add another button “Display Day only” ………….…..…10
1. Challenge 4: Add another button “Display Full date” …….…….…..…11
1. Challenge 5: Add another button “Display Full time” …….…….…..…12

My name is Louis HO, the instructor for this class. Email is the best way to communicate
with me. I am a full time instructor so I will be available on campus if you need help.
Below is my contact information.
Instructor/Advisor: Louis HO
Computer Information Systems
Office: Alderwood Hall 235A
Tel: 425 640 1308
Email: louis.ho@email.edcc.edu

## Challenges

Create date.html. Enter the following code. Remember to change my name to your name. Open the file in the browser. Click the button. The current time and date are displayed.

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Louis HO</h1>
    <h2>My First JavaScript</h2>
    <button
      type="button"
      onclick="document.getElementById('demo').innerHTML = Date()"
    >
      Click me to display Date and Time.
    </button>
    <p id="demo"></p>
  </body>
</html>
```

### Chanllenge 1

Add another button "Display Year Only". Click the button
**HINT**

```html
Hint: Add
<button
  type="button"
  onclick="var myDate = new
Date();document.getElementById('demo').innerHTML =
myDate.getFullYear()"
>
  Display Year only.
</button>
<p id="demo"></p>
```

Reference: https://www.w3schools.com/js/js_date_methods.asp

### Challenge 2: Add another button “Display Month only”. Click the button.

Hint: Add
myDate.getMonth()+1
Reference: https://www.w3schools.com/js/js_date_methods.asp

### Challenge 3: Add another button “Display Day only”. Click the button.

### Challenge 4: Add another button “Display Full date”. Click the button.

Hint:
onclick="var myDate = new
Date();document.getElementById('demo').innerHTML
= (myDate.getMonth()+1) + '/'

- myDate.getDate() + . . .
  Reference: https://www.w3schools.com/js/js_date_methods.asp

### Challenge 4: Add another button “Display Full time”.

Click the button
\*\*\*It displays the full time in XX:XX:XX hour:min:sec format

=====

## Week 2: 2019-Winter, 1/9/2019, Wednesday, 6:00 PM-8:40 PM

CIS 242 - JavaScript
Week 2
2019-Winter, 1/9/2019, Wednesday, 6:00 PM-8:40 PM
Lesson Plan

1. Step 1. Lesson 2: Working with Variables and Data in JavaScript Assignment……2
1. Step 2. Lesson 3: Functions, Methods and Events in JavaScript Assignment………8

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Optional Lab 2-2: Mortgage Calculator</title>
</head>
<body>
<script>
// Calculates the payments and updates for fields to
// display the result
function calcpayment() {
var amt = document.frm.amt.value;
var ir = document.frm.ir.value / 1200;
var term = document.frm.term.value * 12;
var total=1;
for (i=0;i<term;i++) {
total = total * (1 + ir);
}
mp = amt * ir / ( 1 - (1/total));
// Use Math object to chop all numbers after 2 digits
document.frm.payment.value = Math.round(mp*100)/100;
document.frm.total.value = Math.round(mp * term *100)/100 ;
}
</script>
<h1 style="text-align: center; color: blue">CIW JavaScript Specialist</h1>
<h2 style="text-align: center; color: green">JavaScript Mortgage
Calculator</h2>
<hr />
<center>
<form name="frm">
<table bgcolor="black" cellpadding="2"><tr><td>
<table bgcolor="wheat" cellspacing="10">
<tr>
<td>Mortgage amount:</td>
<td><input type="text" name="amt" /></td>
</tr>
<tr>
<td>Yearly interest rate:</td>
<td><input type="text" name="ir" /></td>
</tr>
<tr>
<td>Term (in years):</td>
<td><input type="text" name="term" /></td>
</tr>
<tr >
<td colspan="2" width="100%">
<input type="button" value="Click to Calculate Monthly Payment"
onclick="calcpayment();" />
</td>
</tr>
<tr><td colspan="2"><hr/></td></tr>
<tr>
<td>Monthly payment:</td>
<td><input type="text" name="payment" /></td>
</tr>
<tr>
<td>Total payments:</td>
<td><input type="text" name="total" /></td>
</tr>
</table>
</td></tr></table>
</form>
</center>
</script>
</body>
</html>
```

### Challenge 1:

Modify optionalLab2-2.htm to calculate the monthly payment with Term (in months). Remember to show your name.
**HINT**

```html
<script>
  //Hint: Modify
  function calcpayment(). function calcpayment() {
    var amt =document.frm.amt.value;
    var ir = document.frm.ir.value / 1200;
    var term;

    if (document.frm.term.value !=="" && document.frm.termMonth.value !=="" ) {
      alert("Enter term in either years or months");
      return false;
      }

    if (document.frm.term.value !=="") {
        term = document.frm.term.value * 12;
    } else {

   }
</script>
<tr>
  <td>Term (in years):</td>
  <td><input type="text" name="term" /></td>
</tr>
<tr>
  <td>OR</td>
</tr>
<tr>
  <td>Term (in months):</td>
  . . .
</tr>
```

---

## Step 2. Lesson 3: Functions, Methods and Events in JavaScript

```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Optional Lab 3-1: JavaScript Functions</title>
<script type="text/javascript">
  <!--
  // return the value of the radio button that is checked
  // return an empty string if none are checked, or
  // there are no radio buttons
  function getCheckedValue(radioObj) {
    if (!radioObj) return "";
    var radioLength = radioObj.length;
    if (radioLength == undefined)
      if (radioObj.checked) return radioObj.value;
      else return "";
    for (var i = 0; i < radioLength; i++) {
      if (radioObj[i].checked) {
        return radioObj[i].value;
      }
    }
    return "";
  }
  // set the radio button with the given value as being checked
  // do nothing if there are no radio buttons
  // if the given value does not exist, all the radio buttons
  // are reset to unchecked
  function setCheckedValue(radioObj, newValue) {
    if (!radioObj) return;
    var radioLength = radioObj.length;
    if (radioLength == undefined) {
      radioObj.checked = radioObj.value == newValue.toString();
      return;
    }
    for (var i = 0; i < radioLength; i++) {
      radioObj[i].checked = false;
      if (radioObj[i].value == newValue.toString()) {
        radioObj[i].checked = true;
      }
    }
  }
  //-->
</script>
<style type="text/css">
  <!-- label {
    background-color: #fdfdf0;
    color: black;
    border: 2px outset #8b8378;
    padding: 0.1em 2ex 0.1em 0.5ex;
    line-height: 1.6em;
  }
  //-->
</style>
```

### Challenge: Add another radio button Five and another button Set Checked to Five.

Click Uncheck All. All the radiobuttons including radiobutton Five is cleared.

**HINT**

```html
Hint:
<input type="radio" value="4" name="number" id="number4" /> Four</label>
&nbsp;<label for="number5">
<input type="radio" value="5" . . .
</p>
. . .
<p>
onclick="setCheckedValue(document.forms['radioExampleForm'].elements['number'
], '4');" value="Set Checked to Four" />
&nbsp;<input type="button"
onclick="setCheckedValue(document.forms['radioExampleForm'].elements['number'
], '5');" . . .
. . .
```

## CIS 242 - Web Development II: JavaScript Week 2

2019-Winter, 1/9/2019, Wednesday, 6:00 PM-8:40 PM
Labs (in class)
