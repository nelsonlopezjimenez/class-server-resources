# jsFUN

Welcome to the jsFUN project directory!

## Table of Contents

- [Introductions](#introductions)
- [Setup Instructions](#setup-instructions)
- [Using jsFUN](#using-jsFUN)
- [Challenges](#challenges)
- [Resources](#resources)
- [Tech Stack](#tech-stack)
- [Collaboration](#collaboration)

## Introductions

This repository is inspired by Turing School of Software and Design's exercise of the same name, where you can have FUN working on your JavaScript FUNdamentals. The jsFUN test suites will challenge your ability to manipulate simple JavaScript data types, access deeply nested data inside of objects through dot and bracket notation, create class template constructors, and manipulate larger datasets with and without access to JavaScripts powerful built-in array iterator methods.

One of the hardest aspects of learning any programming or programming-adjacent language is the syntax, a.k.a. the structure and grammar for a spoken language such as English, French, or Spanish. The more time you spend reading and writing a particular language, the quicker you will begin to understand and pick up on how it should look when it is written well. As Malcolm Gladwell famously stated, you can never truly begin to master something until you've put at least 10,000 hours into practicing it.

The exercises in this repo are designed for you to feel a little overwhelmed at first, but as you begin to learn new concepts throughout the course, you can continuously come back to these exercises and build on what you've already completed by writing your code more efficiently and effectively. One example of this would be using the JavaScript `function` keyword to define a function, but at a later date coming back to declare the function with `const` and using the ES6 big arrow function syntax. Alternatively, after completing some exercises with `if (this) {} else {}` pathways, you might learn about `switch case` or the "ternary" operator to write more efficient conditionals.

However you choose to use jsFUN, take the time you use resources like:

- W3Schools
- Mozilla Developer Network

In order to find the concepts you are struggling with before asking your Classroom Assistants or Dr. Lopez. Good luck, work hard, don't give up, and keep coding!

## Setup Instructions

In order to begin working with the jsFUN project directory, you will need to follow the instructions below:

1. Look at the root folder. If there is a `node_modules` folder, skip to step 5

1. Make sure the verdaccio server is running
1. Open a new terminal using the VS Code taskbar with `... > Terminal > New Terminal` or the keyboard shortcut `` Ctrl+Shift+` ``
1. Run the command `npm install` to install all the necessary node_modules
1. Run the command `npm run start`. This will open the Vitest User Interface in your default browser, giving you a handy dashboard to view all the code challenges

## Using jsFUN

The long-term purpose of jsFUN is to introduce you to test suites. Test suites help you, the developer, write code that produces the results you want while also planning for edge cases (a rare situation where the user inputs an incorrect data type or misses a form field completely), throwing errors, and DOM updates and manipulation. From structuring your data at application conceptualization, to implementing new features on existing projects, test suites are your first step towards creating successful code.

For example, if you wanted to tackle the exercises regarding JavaScript Classes, you would want to use the following steps:

1. Choose a series of JS classes you want to build out (e.g. the Room and Hotel classes).
2. Open `tests/classes.tests.js` and find the tests suite that start with:
   ```js
   describe('Room & Hotel Class', () => {
     test('THIS IS THE WHAT THE TEST OUTPUT SHOULD BE', () => {
       // test descriptions...
     })
   })
   ```
3. In a separate tab in VS Code, open up `data/room-data.js` and look at the structure of the data.
4. In a third tab, or stacked tab in VS Code, open up `classes/Room.js` and `classes/Hotel.js` (because JS class files are always capitalized) and begin building out your Room class.
5. As you complete tests, check your code back in the Vitest UI in your browser and look at the output to decide if it is appropriate to move on!

## Challenges

Below is a breakdown of the various categories of challenges available in the jsFUN project directory:

### Strings

Practice manipulating strings with interpolation, concatenation, and JavaScript String methods.

```js
const helloWithName = () => {
  // use a parameter that represents a string that is a name
  // the default value should be 'friend' if no string is given
  // return a string that represents the message "Hello ${NAME OR FRIEND}!"

  const result = 'ENTER YOUR ANSWER HERE'
  return result
}

helloWithName('Dr. Lopez') // 'Hello Dr. Lopez!'
helloWithName() // 'Hello friend!'
```

#### String Resources

- [W3Schools Strings](http://localhost:22022/Public/Downloads/2025/W3S/www.w3schools.com/js/js_strings.html)
- [MDN String Documentation](http://localhost:22022/Public/Downloads/2025/mdn2025/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String.html)

### Numbers

Practice manipulating numbers using mathematical operators and JavaScript Number methods.

```js
const numberSum = () => {
  // use a parameter that is a number
  // return a number that represents the sum of all the digits added together

  const result = 'ENTER YOUR ANSWER HERE'
  return result
}

numberSum(23) // 5
numberSum(12345678910) // 55
```

#### Number Resources

- [W3Schools Numbers](http://localhost:22022/Public/Downloads/2025/W3S/www.w3schools.com/js/js_numbers.html)
- [MDN Number Documentation](http://localhost:22022/Public/Downloads/2025/mdn2025/developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates.html)

### Objects

Practice accessing nested data by using both bracket and dot notation inside of asymmetrically structured data.

```js
const restaurant = {
  contact: {
      name: "Cafe Near You",
      address: {
          street: "115 54th Avenue North",
          city: "Seattle",
          state: "Washington",
          zip: 92504
      },
      phone: 1234567890,
      website: "https://www.cafenearyou.com",
      email: "cafenearyou@cafe.com"
  }
  finances: {
    // ... more stuff here...
  }
}

getRestaurantFullAddress(); // 115 54th Avenue North Seattle, Washington 92504
```

#### Object Resources

- [W3Schools Objects](http://localhost:22022/Public/Downloads/2025/W3S/www.w3schools.com/js/js_objects.html)
- [MDN Object Documentation](http://localhost:22022/Public/Downloads/2025/mdn2025/developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects.html)

### Classes

Practice class-to-class interactions by building JavaScript classes in order to understand how different data will interact with each other on a larger scale (think: a store, a user, and a product) and the functionalities that will be allocated to each one.

```js
const rooms = [
  {
    roomType: 'economy',
    roomNum: 101,
    bedType: 'twin',
    bedNum: 2,
    price: 89.99,
    amenities: ['hair dryer', 'mini-fridge'],
    available: false
  }
  // ... more data
]

class Room {
  constructor(room) {
    this.roomType = room.roomType
    this.roomNum = room.roomNum
    // ... more properties
  }
}
```

#### Class Resources

- [W3Schools Classes](http://localhost:22022/Public/Downloads/2025/W3S/www.w3schools.com/js/js_classes.html)
- [MDN Class Documentation](http://localhost:22022/Public/Downloads/2025/mdn2025/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes.html)

### Rithm Interview Prep

Inspired by Rithm Interview Prep's test suites using the Jasmine testing library. Write function definitions for common JavaScript built-in methods to gain a better understanding of the native code being executed behind the scenes. **When working in this category it is important to remember that you do not have access to using any built-in JavaScript methods.** You must create efficient solutions to reproduce the same functionality that methods such as `.append()`, `.includes()`, `.lastIndexOf()`, `.filter()`, and others provide developers.

### Iterators

Using the provided data, practice your array iterator methods to achieve the intended result.

```js
const kitties = [
  {
    name: 'Felicia',
    color: 'grey'
  },
  {
    name: 'Tiger',
    color: 'orange'
  },
  {
    name: 'Snickers',
    color: 'orange'
  },
  {
    name: 'Max',
    color: 'tuxedo'
  }
]

getOrangePetNames() // ['Tiger', 'Snickers']
```

#### Iterator Resources

- [W3Schools Array Iteration](http://localhost:22022/Public/Downloads/2025/W3S/www.w3schools.com/js/js_array_iteration.html)
- [MDN Array Documentation](http://localhost:22022/Public/Downloads/2025/mdn2025/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array.html)

### Scope

Read through the nested functions, paying close attention to the scope of the variables. Then assign the result variable to look like:

```js
const scopeD = () => {
  let greeting = 'howdy'

  const greetingGenerator = () => {
    let greeting = 'hi'

    if (greeting === 'hi') {
      let greeting = 'hello'
    }

    // ===> Log A: greeting

    const newGreeting = () => {
      greeting = 'welcome'

      // ===> Log B: greeting
    }

    newGreeting()

    // ===> Log C: greeting
  }

  greetingGenerator()

  // ===> Log D: greeting

  const result = 'ENTER YOUR ANSWER HERE'
  return result
}

// Where you change the value of "result" above to match the values of the console.log() statements in the format below:
const result = [
  { A: 'ANSWERA' },
  { B: 'ANSWERB' },
  { C: 'ANSWERC' },
  { D: 'ANSWERD' }
]
```

The A, B, C, D keys in the result object correspond with the hypothetical console.log() invocations found throughout the nested functions. The values of said keys would be what variable A/B/C/D would equate to if logged at that time, based on the scope.

#### Scope Resources

- [W3Schools Scope](http://localhost:22022/Public/Downloads/2025/W3S/www.w3schools.com/js/js_scope.html)
- [MDN Var Documentation](http://localhost:22022/Public/Downloads/2025/mdn2025/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var.html)
- [MDN Let Documentation](http://localhost:22022/Public/Downloads/2025/mdn2025/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let.html)
- [MDN Const Documentation](http://localhost:22022/Public/Downloads/2025/mdn2025/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const.html)

### Miscellaneous

This is a random selection of code challenges that will test your ability to create efficient solutions to real-world problems.

```js
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, -2, 14, -8, 4, 9]
const arr3 = [4, 93, 5]

getHighestPosAdjNumberProduct(arr1) // 20 => because 4 * 5 = 20
getHighestPosAdjNumberProduct(arr2) // 36 => because 4 * 9 = 36
getHighestPosAdjNumberProduct(arr3) // 465 => because 93 * 5 = 465
```

## Resources

- [W3Schools](http://localhost:22022/Public/Downloads/2025/W3S/www.w3schools.com/index.html)
- [MDN](http://localhost:22022/Public/Downloads/2025/mdn2025/developer.mozilla.org/en-US/index.html)

## Tech Stack

- [React](http://localhost:22022/Public/Downloads/2025/react2025/react.dev/index.html)
- [Vite](http://localhost:22022/Public/Downloads/2025/vite/vite.dev/index.html)
- [Vitest](http://localhost:22022/Public/Downloads/2025/vitest-2025/vitest.dev/index.html)
- [TailwindCSS](http://localhost:22022/Public/Downloads/2025/tailwindcss.com/index.html)
- [TypeScript](http://localhost:22022/Public/Downloads/2025/typescript-lang-2025/www.typescriptlang.org/index.html)

## Team Collaboration

This project required collaboration from numerous resources, including but not limited to:

- [Turing School of Software and Design]()
- [Edmonds College](http://192.168.1.28:3000/CIS_Team_EDCC)
- [Dr. Nelson Lopez](http://192.168.1.28:3000/s888888)
- [Matthew Wellington](http://192.168.1.28:3000/mWellington)
- [Alex Fritz](http://192.168.1.28:3000/alexmfritz)
- [Michael Munro](http://192.168.1.28:3000/mmunro)
- [Rocky Connor](http://192.168.1.28:3000/rconnor)

[Top](#jsFUN)
