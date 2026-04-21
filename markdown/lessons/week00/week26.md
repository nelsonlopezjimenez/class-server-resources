# 📅 WEEK 2 — Monday April 13
## Monday — April 13

# Item-1
Week 2: Introduction
Intro to week 2: April 13
On week 1 you learned the differences between frontend and backend in Full-Stack Web Development. You began working with command line interfaces: cmd for windows OS, git-bash for windows machines but using linux syntax. You practiced few linux commands on the command line interface. You finished Lab1-1: folder structure, and Lab1-2: Bash command line. In this week you will learn backend development using express with nodejs. You will be practicing installing packages and installing a basic express server from scratch.

What is Express??
Fast, unopinionated, minimalist web framework for Node.js (Links to an external site.) Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Feature: APIs (Application Programming Interface)
With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.

Feature: Performance
Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

Feature: Middleware
Express is a lightweight and flexible routing framework with minimal core features meant to be augmented through the use of Express middleware (Links to an external site.) modules.

Learning Outcomes
By the end of this week, students will be able to…

Identify the difference between backend and frontend web development
Understand how express is the choice for our web development and in the MERN stack (Mongo, Express, React)
Access the offline resources related to the backend in general, and express in particular.
Install nodejs modules with npm: knock-knock-jokes, cat-me, faker
Install an express server from scratch.
Week at a Glance
To help you achieve the Week One learning outcomes, you will complete the following activities this week:
READ/WATCH/EXPLORE
Read Section 1: Getting Started with MERN from Full-Stack React Projects by Shama Hoque, pages 9-26
Read Welcome to Node.js chapter 1 from Node.js In Action by Young, Meck, and Catelon, page 3-10
Read What is a Node web application, page 50-56 from Node.js In Action
Read section Using Web Protocols from Node Cookbook by Bethany Griggs, page 82-99
Read Exploring Nodejs web Frameworks, chapter 6 from Node Cookbook, chapter 6, page 154-169
COMPLETE
npm install knock-knock-jokes, cat-me, faker-js modules.
Install your first express server from scratch
Install or paste node_modules folder for the app mern-social found in chapter 05 in Full-Stack React Projects source code
REVIEW
From Node.js In Action:
Building RESTful web services, page 54
What is a framework? page 83
Example of RESTfull routes, page 121
From Full-Stack React Project review:
MERN stack, page 14
Social media platform, page 20

# Item-2 


### Reading Command-Line Arguments

```js
// args.js
const args = process.argv.slice(2); // [0]=node, [1]=script path, [2+]=your args
const yourName = args[0] || "stranger";
console.log(`Hello, ${yourName}!`);
```

```bash
node args.js Nelson
# → Hello, Nelson!
```

### Writing and Importing Modules (CommonJS — default in Node)

```js
// math.js — exporting
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

module.exports = { add, multiply };
```

```js
// app.js — importing
const { add, multiply } = require('./math');

console.log(add(3, 4));       // 7
console.log(multiply(3, 4));  // 12
```

### ES Module Syntax (Modern — requires `"type": "module"` in package.json)

```js
// math.mjs or with "type":"module" in package.json
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }
```

```js
import { add, multiply } from './math.js';
```

> ⚠️ **Common mistake #1:** Mixing `require()` and `import` in the same project. Pick one. Express v4 tutorials typically use CommonJS (`require`). We'll use CommonJS for consistency with Express v4.

---

## Tuesday — npm: The Package Ecosystem

### What is npm?

> npm = Node Package Manager. Over 2 million packages. You already know `jQuery` — npm is how JavaScript developers share reusable code.

### Initializing a Project

```bash
mkdir my-node-app
cd my-node-app
npm init -y        # creates package.json with defaults
```

> ⚠️ **Common mistake #2:** Running `npm install` before `npm init`. Always initialize first.

### Installing Fun Packages (Local Offline Registry via Verdaccio)

```bash
npm install knock-knock-jokes
npm install cat-me
npm install @faker-js/faker@10.3.0 //disregard the warning```

**Using them:**

```js
// jokes.js
const knockknock = require('knock-knock-jokes');

for (let i = 0; i < 3; i++) {
  console.log(knockknock());
  console.log('---');
}
```

```js
// cats.js
const catMe = require('cat-me');
console.log(catMe());
```

```js
// fakeData.js
// ESM

import { faker } from '@faker-js/faker';

// OR CJS
const { faker } = require('@faker-js/faker');

// Generate 5 fake users
const users = Array.from({ length: 5 }, () => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  city: faker.location.city(),
  job: faker.person.jobTitle(),
}));

console.table(users);
```

### Understanding `package.json`

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "knock-knock-jokes": "^1.0.0"
  }
}
```

```bash
npm run start   # runs node app.js
npm run dev     # runs with nodemon (auto-restart on save)
```

> ⚠️ **Common mistake #3:** Committing `node_modules/` to Git. Always add to `.gitignore`:
> ```
> node_modules/
> .env
> ```

### `package.json` vs `package-lock.json`

| File | Purpose |
|------|---------|
| `package.json` | Your intent ("I want express ~4.18") |
| `package-lock.json` | Exact versions installed (commit this!) |
| `node_modules/` | Actual code (never commit this) |

---

## Wednesday — Reusable Code + Mini Project

### Writing a Reusable Utility Module

```js
// utils/formatDate.js
function formatDate(date = new Date()) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function greetByTime() {
  const hour = new Date().getHours();
  if (hour < 12) return '🌅 Good morning!';
  if (hour < 18) return '☀️ Good afternoon!';
  return '🌙 Good evening!';
}

module.exports = { formatDate, greetByTime };
```

```js
// app.js
const { formatDate, greetByTime } = require('./utils/formatDate');
const { faker } = require('@faker-js/faker');

console.log(greetByTime());
console.log('Today is:', formatDate());

// Fake user greeter
const user = { name: faker.person.fullName() };
console.log(`Welcome, ${user.name}!`);
```

### 🔨 Week 2 Project: "Node Profile Generator"

Students build a CLI script that:
1. Accepts a `--count` argument for number of profiles
2. Uses `@faker-js/faker` to generate fake user objects
3. Outputs a formatted table to the console
4. Saves results to a `.json` file using `fs.writeFileSync`

```js
// profileGenerator.js
const { faker } = require('@faker-js/faker');
const fs = require('fs'); // built-in, no install needed

const count = parseInt(process.argv[2]) || 5;

const profiles = Array.from({ length: count }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  bio: faker.lorem.sentence(),
  avatar: faker.image.avatarGitHub(),
}));

console.table(profiles);

fs.writeFileSync('profiles.json', JSON.stringify(profiles, null, 2));
console.log(`\n✅ Saved ${count} profiles to profiles.json`);
```

```bash
node profileGenerator.js 10
```

### ⚠️ Week 2 Common Mistakes

| Mistake | Fix |
|---------|-----|
| `require` path without `./` | `require('./math')` not `require('math')` |
| Forgetting `npm init` before installing | Always `npm init -y` first |
| Editing files inside `node_modules/` | Never. Add it to `.gitignore` |
| Using `document` or `window` in Node | They don't exist. Node ≠ browser |
| `Cannot find module` error | Check spelling, check you installed it |

---

### 📚 Week 2 Resources

- **MDN:** [Introduction to server-side programming](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)
- **W3Schools:** [Node.js Tutorial](https://www.w3schools.com/nodejs/)
- **freeCodeCamp:** [Node.js and Express for Beginners](https://www.freecodecamp.org/news/free-nodejs-course/)
- **Video:** [Node.js Crash Course – Traversy Media (YouTube)](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
- **Node.js Docs:** [https://nodejs.org/en/docs](https://nodejs.org/en/docs)

---

---
# Item-5
## **Week 2 Readings & Other Materials: HTML no-markdown**

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

-   Explore: [https://fakerjs.dev/](https://fakerjs.dev/)
-   Explore: [https://fakerjs.dev/api/](https://fakerjs.dev/api/)
-   Explore: [https://expressjs.com](https://expressjs.com)
-   Explore: [https://expressjs.com/en/starter/hello-world.html](https://expressjs.com/en/starter/hello-world.html)
-   [https://expressjs.com/en/starter/basic-routing.html](https://expressjs.com/en/starter/basic-routing.html)
-   [https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html)

### **Listen**

# Item-6

# WEEK 2 EXERCISE SOLUTIONS WITH DETAILED COMMENTS FOR BEGINNERS

## DAY 1: MODERN JAVASCRIPT SYNTAX

```js
// Exercise 1.1: Modern Syntax Conversion
console.log("=== Exercise 1.1: Modern Syntax Conversion ===");

// OLD VERSION (ES5 style)
function getUserInfo(user) {
    var name = user.name;
    var email = user.email;
    var age = user.age || 18;
    return "User: " + name + " (" + email + ") - Age: " + age;
}

// NEW VERSION (ES6+ style) - SOLUTION
const getUserInfoModern = (user) => {
    // Destructuring: Extract properties directly from the object
    // The = 18 provides a default value if age is undefined
    const { name, email, age = 18 } = user;
// Template literal: Uses backticks (\`) and ${} for variable insertion
    // Much cleaner than string concatenation with +
    return \`User: ${name} (${email}) - Age: ${age}`;
};

// Test the function
const testUser = { name: "John Doe", email: "john@example.com" };
console.log(getUserInfoModern(testUser));
// Output: User: John Doe (john@example.com) - Age: 18

// Exercise 1.2: Destructuring Practice
console.log("\n=== Exercise 1.2: Destructuring Practice ===");

const company = {
    name: "TechCorp",
    location: {
        city: "San Francisco",
        state: "CA"
    },
    employees: ["Alice", "Bob", "Charlie"]
};

// SOLUTION: Multiple destructuring techniques
// 1. Basic object destructuring
const { name: companyName } = company;

// 2. Nested destructuring - extracting from nested objects
const { location: { city, state } } = company;

// 3. Array destructuring with default values
const { employees: [firstEmployee, secondEmployee, thirdEmployee = "No third employee"] } = company;

// Alternative: Direct array destructuring
const [employee1, employee2, employee3 = "Default Employee"] = company.employees;

console.log(\`Company: ${companyName}\`);
console.log(\`Location: ${city}, ${state}\`);
console.log(\`First Employee: ${firstEmployee}\`);
console.log(\`Second Employee: ${employee2}\`);
```

## DAY 2: ARRAY METHODS FUNDAMENTALS

```js
// Exercise 4.1: E-commerce Data Processing
console.log("\n=== Exercise 4.1: E-commerce Data Processing ===");

const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
    { id: 2, name: "Shirt", price: 29, category: "Clothing", inStock: false },
    { id: 3, name: "Phone", price: 699, category: "Electronics", inStock: true },
    { id: 4, name: "Jeans", price: 79, category: "Clothing", inStock: true }
];

// SOLUTION 1: Get all product names
console.log("1. All product names:");
const productNames = products.map(product => {
    // map() creates a new array by transforming each element
    // Here we're extracting just the name property from each product
    return product.name;
});
console.log(productNames);
// Output: ["Laptop", "Shirt", "Phone", "Jeans"]

// Alternative shorter syntax using arrow function
const productNamesShort = products.map(product => product.name);

// SOLUTION 2: Get products under $100
console.log("\n2. Products under $100:");
const affordableProducts = products.filter(product => {
    // filter() creates a new array with elements that pass the test
    // Return true to include the item, false to exclude it
    return product.price < 100;
});
console.log(affordableProducts);
// Output: Products with price < 100

// SOLUTION 3: Get in-stock electronics
console.log("\n3. In-stock electronics:");
const inStockElectronics = products.filter(product => {
    // Multiple conditions: both must be true
    return product.category === "Electronics" && product.inStock === true;
});
console.log(inStockElectronics);

// SOLUTION 4: Create discounted prices (20% off) for in-stock items
console.log("\n4. Discounted prices for in-stock items:");
const discountedProducts = products
    .filter(product => product.inStock) // First, filter in-stock items
    .map(product => {
        // Then, transform each item to include discounted price
        return {
            ...product, // Spread operator copies all existing properties
            originalPrice: product.price,
            discountedPrice: product.price * 0.8, // 20% off = multiply by 0.8
            savings: product.price * 0.2 // How much they save
        };
    });

console.log(discountedProducts);

// Exercise 4.2: User Data Transformation
console.log("\n=== Exercise 4.2: User Data Transformation ===");

const users = [
    { firstName: "John", lastName: "Doe", age: 28, city: "New York" },
    { firstName: "Jane", lastName: "Smith", age: 34, city: "Los Angeles" },
    { firstName: "Bob", lastName: "Johnson", age: 22, city: "Chicago" }
];

// SOLUTION 1: Return full names
console.log("1. Full names:");
const fullNames = users.map(user => {
    // Combine firstName and lastName with a space
    return \`${user.firstName} ${user.lastName}\`;
});
console.log(fullNames);
// Output: ["John Doe", "Jane Smith", "Bob Johnson"]

// SOLUTION 2: Filter users by minimum age
console.log("\n2. Users 25 and older:");
function filterUsersByAge(users, minAge) {
    return users.filter(user => {
        // Return true if user meets age requirement
        return user.age >= minAge;
    });
}

const adultUsers = filterUsersByAge(users, 25);
console.log(adultUsers);

// SOLUTION 3: Group users by city (using reduce - preview of Day 5)
console.log("\n3. Users grouped by city:");
const usersByCity = users.reduce((grouped, user) => {
    // If city doesn't exist in grouped object, create empty array
    if (!grouped[user.city]) {
        grouped[user.city] = [];
    }
    // Add current user to their city's array
    grouped[user.city].push(user);
    return grouped;
}, {}); // Start with empty object

console.log(usersByCity);

// SOLUTION 4: Create user profile summaries
console.log("\n4. User profile summaries:");
const userProfiles = users.map(user => {
    // Create a summary string for each user
    return {
        id: \`${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}`,
        fullName: \`${user.firstName} ${user.lastName}`,
        summary: \`${user.firstName} ${user.lastName} is ${user.age} years old and lives in ${user.city}`,
        ageGroup: user.age < 25 ? 'Young Adult' : user.age < 35 ? 'Adult' : 'Mature Adult'
    };
});

console.log(userProfiles);
```

## DAY 3: ADVANCED ARRAY METHODS

```js
// Exercise 5.1: Data Analytics with Reduce
console.log("\n=== Exercise 5.1: Data Analytics with Reduce ===");

const sales = [
    { product: "Laptop", amount: 999, date: "2024-01-15", salesperson: "Alice" },
    { product: "Phone", amount: 699, date: "2024-01-16", salesperson: "Bob" },
    { product: "Laptop", amount: 999, date: "2024-01-17", salesperson: "Alice" },
    { product: "Tablet", amount: 399, date: "2024-01-18", salesperson: "Charlie" }
];

// SOLUTION 1: Total sales amount
console.log("1. Total sales amount:");
const totalSales = sales.reduce((total, sale) => {
    // reduce() accumulates values into a single result
    // total is the accumulator, sale is the current item
    // Add current sale amount to running total
    return total + sale.amount;
}, 0); // Start with 0

console.log(\`Total sales: $${totalSales}`);
// Output: Total sales: $3096

// SOLUTION 2: Sales by product
console.log("\n2. Sales by product:");
const salesByProduct = sales.reduce((productSales, sale) => {
    // If product doesn't exist in our object, initialize it
    if (!productSales[sale.product]) {
        productSales[sale.product] = {
            totalAmount: 0,
            count: 0
        };
    }
    
// Add to existing totals
    productSales[sale.product].totalAmount += sale.amount;
    productSales[sale.product].count += 1;
    
    return productSales;
}, {}); // Start with empty object

console.log(salesByProduct);

// SOLUTION 3: Sales by salesperson
console.log("\n3. Sales by salesperson:");
const salesBySalesperson = sales.reduce((personSales, sale) => {
    // Similar pattern to product sales
    if (!personSales[sale.salesperson]) {
        personSales[sale.salesperson] = {
            totalAmount: 0,
            salesCount: 0,
            products: []
        };
    }
    
    personSales[sale.salesperson].totalAmount += sale.amount;
    personSales[sale.salesperson].salesCount += 1;
    personSales[sale.salesperson].products.push(sale.product);
    
    return personSales;
}, {});

console.log(salesBySalesperson);

// SOLUTION 4: Average sale amount
console.log("\n4. Average sale amount:");
const averageSale = sales.reduce((acc, sale, index, array) => {
    // Add current amount to accumulator
    acc += sale.amount;
    
    // If this is the last item, calculate average
    if (index === array.length - 1) {
        return acc / array.length;
    }
    
    return acc;
}, 0);

// Alternative simpler approach
const averageSaleSimple = totalSales / sales.length;

console.log(\`Average sale: $${averageSale}\`);
console.log(\`Average sale (simple): $${averageSaleSimple}\`);

// BONUS: Sort sales by amount (highest to lowest)
console.log("\n5. Sales sorted by amount (highest first):");
const sortedSales = sales.sort((a, b) => {
    // sort() arranges elements based on comparison function
    // Return negative if a should come before b
    // Return positive if a should come after b
    // Return 0 if they're equal
    return b.amount - a.amount; // Descending order
});

console.log(sortedSales);

// Sort by date (newest first)
console.log("\n6. Sales sorted by date (newest first):");
const sortedByDate = sales.sort((a, b) => {
    // Convert date strings to Date objects for comparison
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Newer dates first
});

console.log(sortedByDate);
```
# Item-8

Assign2-1: echo.js file
echo 

SUBMIT your code as text entry and upload your file after adding "txt" extension, otherwise canvas will disable your the javascript.

# Item-9


Assign2-2: average-grade
average grade

SUBMIT your source code in the text entry box and a file after you add the extension "txt".

# Item-10

Assign2-3: My shop
My shop

Make sure you install the version recommend in the instruction on "Week2: continuation". Try using syntax for old modules (CJS) and new modules (ESM). Type or copy/paste your code on the text entry box, and submit your file with your source code after adding the extension "txt" to your file. Remember to add you name at the top of your files.

# Item-11


