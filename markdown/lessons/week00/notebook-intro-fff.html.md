[0]: +
JavaScript Programming Using Notebook Concept
[1]: +
What is a notebook?
[2]: +
It is a web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text

It is a browser-based REPL containing an ordered list of input/output cells which can contain code, text, mathematics, plots, and rich media.

[3]: +
Use:
Document is divided into cells in input/output order

Input cell: enter either HTML or javascript code and hit the "button" txt to run HTML or "go" to execute javascript code.

Use the "clr" button to clear the output

[4]: +
Let's start with HTML code
You can configure global style properties in the first cell
You can add in-line properties if needed
Practice with as much HTML tags as possible: add images, videos, sound, etc
[5]: +
[6]: +
CSS Animation: the previous cell is an example of animation
CSS Transitions: the following examples demonstrate the functionality
[7]: +
This is an example of transition. HOVER ME !!!

[8]: +
Error: SyntaxError: Private field '#delay' must be declared in an enclosing class
[9]: +
9]: gotxtclr-
<style>.box {border-style: solid; border-width: 1px; display: block; width:100px; height: 100px; background-color: #00f; transition: width 2s, height 2s, background-color 2s, transform 2s;} .box:hover {background-color: #fcc; width: 200px; height: 200px; transform: rotate(180deg);}</style>
<div class="box"></div>

[10]: +
Using transitions when highlighting menus
Home
About
Contact Us
Links
[11]: +
Using transitions to make JavaScript functionality smooth
Transitions are a great tool to make things look much smoother without having to do anything to your JavaScript functionality.

[12]: +
Using JavaScript you can make the effect of moving the ball to a certain position happen:
[13]: +
with CSS you can make it smooth without any extra effort. Add a transition to the element and any change will happen smoothly
[14]: +
Click anywhere to move the ball
[15]: gotxtclr-
<p id="delay">This is an example of transition with JavaScript. <b>PENDING!!!</b></p>
This is an example of transition with JavaScript. PENDING!!!

[16]: gotxtclr-
<style>#paraMover {width:50px; height:50px; border: 2px solid blue;}</style>
<div id="paraMover"></div>
[17]: +
The following code does not run in a cell but it can run in a separate html page
[18]: +
Error: SyntaxError: Unexpected token '<'
[19]: +
Let's start using MDN "a first splash into JavaScript
[20]: +
undefined
[21]: +
[22]: +
Bingo says hello!
[23]: +
Operators
[24]: +
Strict equality === is it exactly the same?

[25]: +
[26]: +
Non-equality !== is it not the same?

[27]: +
true
[28]: +
less than

[29]: +
false
[30]: +
Greater than

[31]: +
true
[32]: +
Variables
Note: We say variables contain values. This is an important distinction to make. Variables aren't the values themselves; they are containers for values. You can think of them being like little cardboard boxes that you can store things in.

[33]: +

[34]: +
Initializing a variable
Please review:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

[35]: gotxtclr-
myName = "Nelson";
myAge = 37;
let { bar } = foo //Destructuring
37
[36]: +
The difference between var, let, and const
[37]: +
2
[38]: +
Error: SyntaxError: Unexpected end of input
[39]: +
undefined
[40]: +
[41]: gotxtclr-
function letTest(){
   let x = 1;
   {
      let x = 2;
      //put(x + "\n"); //local scope
   }
   return x;
}
letTest();
1
[42]: gotxtclr-
<h1>Truthy and Falsy</h1>
undefined
[43]: +
Data types
The latest ECMAScript standard defines eight data types:
Seven data types that are primitives:
Boolean. true and false.
null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
undefined. A top-level property whose value is not defined.
Number. An integer or floating point number. For example: 42 or 3.14159.
BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
String. A sequence of characters that represent a text value. For example: "Howdy"
Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.
and Object
[44]: +
Temporal dead zone (TDZ)
a variable cannot be read/written until they have been initialized.

[45]: +
Error: ReferenceError: Cannot access 'foo' before initialization
[46]: +
The term "temporal" is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position). For example, the code below works because, even though the function that uses the let variable appears before the variable is declared, the function is called outside the TDZ.

[47]: +
Error: ReferenceError: Cannot access 'letVar' before initialization
[48]: +
Error: ReferenceError: Cannot access 'i' before initialization
[49]: +
undefined
[50]: +
Error: ReferenceError: Cannot access 'foo' before initialization
[51]: +
Var hoisting
Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code.

[52]: gotxtclr-
let myName = 'Nelson';
let myName = 'John';
Error: SyntaxError: Identifier 'myName' has already been declared
[53]: +
Variable naming rules
You shouldn't use other characters because they may cause errors or be hard to understand for an international audience.
Don't use underscores at the start of variable names — this is used in certain JavaScript constructs to mean specific things, so may get confusing.
Don't use numbers at the start of variables. This isn't allowed and causes an error.
A safe convention to stick to is so-called "lower camel case", where you stick together multiple words, using lower case for the whole first word and then capitalize subsequent words. We've been using this for our variable names in the article so far.
Make variable names intuitive, so they describe the data they contain. Don't just use single letters/numbers, or big long phrases.
Variables are case sensitive — so myage is a different variable from myAge.
One last point: you also need to avoid using JavaScript reserved words as your variable names — by this, we mean the words that make up the actual syntax of JavaScript! So, you can't use words like var, function, let, and for as variable names. Browsers recognize them as different code items, and so you'll get errors
[54]: +
Good names:
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
[55]: +
Bad names:
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongstupidvariablenameman
[56]: +
Numbers and the '+' operator
In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings. For example, consider the following statements:

[57]: gotxtclr-
'37' + 7
377
[58]: +
Converting strings to numbers
In the case that a value representing a number is in memory as a string, there are methods for conversion.

[59]: gotxtclr-
parseInt('101',2)
5
[60]: +
String literals
'foo'
"bar"
'1234'
'one line \n another line'
"John's cat"


[61]: gotxtclr-
<h1>Template literals</h1>
[62]: gotxtclr-
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// String interpolation
var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?`

In JavaScript '
' is a line-feed.Error: TypeError: put(...) is not a function
[63]: gotxtclr-
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`


In JavaScript '
' is a line-feed.
[64]: gotxtclr-
<h1>Escaping characters</h1>
[65]: +
He read "The Cremation of Sam McGee" by R.W. Service.undefined
[66]: gotxtclr-
//You can also escape line breaks by preceding them with backslash. The backslash and line break are both removed from the value of the string.
var str = 'this string \
is broken \
across multiple \
lines.'
console.log(str);   // this string is broken across multiple lines.

undefined
[67]: +
Control flow
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

[68]: +
Block statement
The block is delimited by a pair of curly brackets

[69]: gotxtclr-
{
  statement_1;
  statement_2;
  ⋮
  statement_n;
}

Error: SyntaxError: Invalid or unexpected token
[70]: gotxtclr-
//Example
let x = 0;
while (x < 10) {
  x++;
}
// Here { x++; } is the block statement
9
[71]: +
Conditional statements

if (condition) {
  statement_1;
} else {
  statement_2;
}


[72]: +
Falsy Values
false
undefined
null
0
NaN
the empty string ("")
[73]: gotxtclr-
<h1>switch statement</h1>
[74]: gotxtclr-
switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    …
  default:
    statements_def
    [break;]
}

[75]: gotxtclr-
EXAMPLE
[76]: gotxtclr-
let fruittype = 'Banana';
switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log(`Sorry, we are out of ${fruittype}.`);
}
console.log("Is there anything else you'd like?");

undefined
[77]: gotxtclr-
[78]: +
Loops and iteration
[79]: +
The statements for loops provided in JavaScript are: for statement do...while statement while statement labeled statement break statement continue statement for...in statement for...of statement