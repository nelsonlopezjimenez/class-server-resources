# 📅 WEEK 3 — Express v4 from Scratch Item-1

## Learning Goals
- Understand the HTTP request/response cycle
- Install and configure Express v4
- Define GET, POST, PUT, DELETE routes
- Use middleware (built-in and custom)
- Serve static files
- Test routes with REST Client (VS Code extension)
- Introduction to Tailwind CSS for server-rendered HTML

---

## Monday — HTTP & The Request/Response Cycle

### How the Web Actually Works

```
Browser                          Server
  |                                |
  |  GET /api/users HTTP/1.1       |
  |  Host: localhost:3000          |
  | ─────────────────────────────> |
  |                                |
  |  HTTP/1.1 200 OK               |
  |  Content-Type: application/json|
  |  [{"name": "Alice"}, ...]      |
  | <───────────────────────────── |
```

### HTTP Methods — The Vocabulary of the Web

| Method | Meaning | Example |
|--------|---------|---------|
| `GET` | Read data | Get list of users |
| `POST` | Create data | Register new user |
| `PUT` | Replace data | Update entire user profile |
| `PATCH` | Partial update | Change only email |
| `DELETE` | Remove data | Delete a post |

### HTTP Status Codes You'll Use Most

| Code | Meaning |
|------|---------|
| `200` | OK |
| `201` | Created |
| `400` | Bad Request (client error) |
| `401` | Unauthorized (not logged in) |
| `403` | Forbidden (logged in but not allowed) |
| `404` | Not Found |
| `500` | Internal Server Error |

---

## Tuesday — Your First Express v4 Server

### Setup

```bash
mkdir express-intro
cd express-intro
npm init -y
npm install express
npm install --save-dev nodemon
```

Add to `package.json`:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### Minimal Express Server

```js
// server.js
const express = require('express');

const app = express();
const PORT = 3000;

// Built-in middleware: parse JSON request bodies
app.use(express.json());

// Your first route
app.get('/', (req, res) => {
  res.send('Hello from Express! 🚀');
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
```

```bash
npm run dev
# Open browser → http://localhost:3000
```

> ⚠️ **Common mistake #4:** Forgetting `app.use(express.json())`. Without this, `req.body` is `undefined` on POST requests.

### Understanding the Route Handler

```js
app.get('/about', (req, res) => {
  //  ↑              ↑    ↑
  // method        req  res
  // path
  
  res.status(200).json({ message: 'About page' });
  //  ↑             ↑
  // set status   send JSON
});
```

### Route Parameters and Query Strings

```js
// Route parameter — part of the URL path
// GET /users/42
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Getting user with id: ${id}` });
});

// Query string — ?key=value after the path
// GET /search?term=express&limit=10
app.get('/search', (req, res) => {
  const { term, limit = 5 } = req.query;
  res.json({ searching: term, limit: Number(limit) });
});
```

---

## Wednesday — Middleware + CRUD Routes

### What is Middleware?

```
Request → [middleware 1] → [middleware 2] → Route Handler → Response
```

Middleware is any function with the signature `(req, res, next)`. It runs **before** your route handler.

```js
// Custom logger middleware
function logger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next(); // MUST call next() or the request hangs forever
}

app.use(logger); // applies to ALL routes
```

> ⚠️ **Common mistake #5:** Forgetting to call `next()` in custom middleware. The request will hang and eventually time out.

### Building a Full CRUD API (In-Memory, No Database Yet)

```js
// server.js — complete in-memory CRUD example
const express = require('express');

const app = express();
app.use(express.json());

// Temporary in-memory store (Week 4 we replace with MongoDB)
let books = [
  { id: 1, title: 'The Pragmatic Programmer', author: 'Hunt & Thomas' },
  { id: 2, title: 'You Don\'t Know JS', author: 'Kyle Simpson' },
];
let nextId = 3;

// GET all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// GET one book
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

// POST — create a book
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required' });
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT — replace a book
app.put('/api/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  books[index] = { id: Number(req.params.id), ...req.body };
  res.json(books[index]);
});

// DELETE a book
app.delete('/api/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  const deleted = books.splice(index, 1);
  res.json({ message: 'Deleted', book: deleted[0] });
});

app.listen(3000, () => console.log('Server on http://localhost:3000'));
```

### Testing with REST Client (VS Code Extension)

Create `test.http` in your project root:

```http
### Get all books
GET http://localhost:3000/api/books

### Get one book
GET http://localhost:3000/api/books/1

### Create a book
POST http://localhost:3000/api/books
Content-Type: application/json

{
  "title": "Clean Code",
  "author": "Robert C. Martin"
}

### Update a book
PUT http://localhost:3000/api/books/1
Content-Type: application/json

{
  "title": "The Pragmatic Programmer (Updated)",
  "author": "Hunt & Thomas"
}

### Delete a book
DELETE http://localhost:3000/api/books/3
```

> Click **"Send Request"** above each block in VS Code — no Postman needed.

---

## Thursday — Static Files + Tailwind CSS + Server-Side Rendering

### Serving Static Files

```js
// Serve everything in /public as static files
app.use(express.static('public'));
```

```
project/
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js
└── package.json
```

### Modern Server-Side Rendering (No Pug/EJS)

We'll use **template literals** to build HTML strings — clean, modern, no extra dependencies.

```js
// server.js — SSR with template literals + Tailwind CDN
app.get('/books-page', (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book List</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen p-8">
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold text-indigo-600 mb-6">📚 Book List</h1>
    <ul class="space-y-3">
      ${books.map(book => `
        <li class="bg-white rounded-xl shadow p-4 flex justify-between items-center">
          <div>
            <p class="font-semibold text-gray-800">${book.title}</p>
            <p class="text-sm text-gray-500">${book.author}</p>
          </div>
          <span class="text-xs text-indigo-400 font-mono">id: ${book.id}</span>
        </li>
      `).join('')}
    </ul>
  </div>
</body>
</html>`;

  res.send(html);
});
```

> 💡 **Note on Tailwind in production:** The CDN script is for development/teaching only. In production you'd run the Tailwind CLI build step. For this course, CDN is fine.

### Express Router — Organizing Routes

As your app grows, keep routes in separate files:

```js
// routes/books.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { /* ... */ });
router.get('/:id', (req, res) => { /* ... */ });
router.post('/', (req, res) => { /* ... */ });

module.exports = router;
```

```js
// server.js
const booksRouter = require('./routes/books');
app.use('/api/books', booksRouter);
// Now router handles /api/books/* automatically
```

> ⚠️ **Common mistake #6:** Doubling the path prefix. If you mount at `/api/books`, your router's routes should be `/` and `/:id`, not `/api/books/` and `/api/books/:id`.

### 🔨 Week 3 Project: "Book Tracker API"

Students build and test a full CRUD REST API:

1. `GET /api/books` — list all books
2. `GET /api/books/:id` — get one (404 if not found)
3. `POST /api/books` — create (validate title + author)
4. `PUT /api/books/:id` — update
5. `DELETE /api/books/:id` — delete
6. `GET /books-page` — HTML page rendered server-side with Tailwind
7. Custom logger middleware on every request
8. All routes tested with `test.http`

**Stretch:** Add a `GET /api/books/search?author=Kyle` route using `.filter()`.

---

### ⚠️ Week 3 Common Mistakes

| Mistake | Fix |
|---------|-----|
| `req.body` is `undefined` | Add `app.use(express.json())` before routes |
| `next()` never called in middleware | Always call it unless sending a response |
| `Cannot GET /` in browser | Check route path matches exactly |
| Server doesn't restart on save | Make sure `nodemon` is installed, using `npm run dev` |
| Route `/books/:id` catches `/books/search` | Put `/books/search` route **before** `/books/:id` |
| Port already in use | `lsof -i :3000` then `kill -9 <PID>` or use a different port |

---

### 📚 Week 3 Resources

- **Express v4 Docs:** [https://expressjs.com/en/4x/api.html](https://expressjs.com/en/4x/api.html)
- **MDN:** [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- **W3Schools:** [Node.js HTTP Module](https://www.w3schools.com/nodejs/nodejs_http.asp)
- **freeCodeCamp:** [Express.js Crash Course](https://www.freecodecamp.org/news/express-explained-with-examples-installation-routing-middleware-and-more/)
- **Tailwind CSS Docs:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Video:** [Express JS Crash Course – Traversy Media](https://www.youtube.com/watch?v=L72fhGm1tfE)
- **REST Client extension:** [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

---

---

## 🔭 Preview: Weeks 3–12 Topics

> Full weekly breakdowns available on request.

- **Week 3:** Express Router (advanced), error-handling middleware, environment variables with `dotenv`
- **Week 4:** MongoDB local install, Compass GUI, `mongosh`, raw driver CRUD
- **Week 5:** Mongoose — schemas, models, validators, virtuals
- **Week 6:** MVC folder structure — `models/`, `controllers/`, `routes/`, `middleware/`
- **Week 7:** What is JWT? `jsonwebtoken` package, signing and verifying tokens
- **Week 8:** `bcryptjs` password hashing, POST `/auth/signup`, POST `/auth/login`, protected route middleware
- **Week 9:** Connecting React frontend — `axios`, storing tokens, React Router protected routes
- **Week 10:** Refresh tokens, `httpOnly` cookies, token expiration strategy
- **Week 11:** Intro to **Hono** — similarities/differences with Express, Hono on Node.js vs Bun/Deno
- **Week 12:** Capstone — Full MERN mini-app (topic TBD by class vote), code review, demo day

---

## ⚡ Hono Preview (Week 11)

Hono is a fast, lightweight web framework — similar to Express but with a modern API, TypeScript-first design, and multi-runtime support.

| Feature | Express v4 | Hono |
|---------|-----------|------|
| Syntax | `req, res` | `c` (context object) |
| TypeScript | Add-on | Built-in |
| Runs on | Node.js only | Node, Bun, Deno, Cloudflare Workers |
| Middleware | `app.use()` | `app.use()` (same concept) |
| Speed | Fast | Very fast (Bun runtime) |
| Maturity | Very mature (2010) | Newer (2022), growing fast |

```js
// Same route — Express vs Hono comparison

// Express v4
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Hono
app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' });
});
```

---

*Document generated for CIS 243 — Edmonds College Web Development Certificate Program*
*Stack: Node.js · Express v4 · MongoDB (local) · Mongoose · JWT · React · Tailwind CSS*

====================================
# Week 3 — CIS 243 Backend Development with Express Item-99

## Express, Routing, REST, Environment Variables, Modules

**Schedule:** 4 days × 3 hours | **Stack:** Node.js, Express, Nodemon, CORS, dotenv

---

---

# Day 1 — From Scratch: Node, NPM, and Express

## Hour 1 — What Is a Backend Server and Why Do We Need One?

### The Big Picture

Before writing a single line of code, understand what you are building and why.

```
CLIENT (browser)          NETWORK          SERVER (Node/Express)
     │                                           │
     │  GET /users  ──────────────────────────►  │
     │                                           │  reads database
     │  ◄──────────────────  JSON response  ────  │
     │                                           │
```

> **For beginners:** the browser is a customer at a restaurant. The server is
> the kitchen. The browser orders (request), the kitchen prepares and sends
> back food (response). You never see the kitchen — but it does all the real work.

> **For advanced students:** a backend server is a long-running process that
> listens on a TCP port, accepts HTTP requests, applies business logic, and
> returns responses. Express is a thin abstraction over Node's built-in `http`
> module — it adds routing, middleware, and convenience methods without
> hiding what is happening underneath.

---

### Node.js vs the Browser — Key Differences

```js
// IN THE BROWSER — these exist:
window.document          // the DOM
localStorage             // browser storage
fetch()                  // HTTP requests
alert()                  // UI dialogs

// IN NODE — these DO NOT exist.
// Instead Node has:
const fs      = require('fs');      // file system
const http    = require('http');    // raw HTTP server
const path    = require('path');    // file paths
const process = require('process'); // OS environment, argv, exit
```

> **Key insight:** JavaScript is the language. Node is a runtime that gives JS
> different superpowers than the browser does. Same language, different toolbox.

---

### Installing From Scratch — Every Step

```bash
# 1. verify Node is installed (need 18+ for this course)
node --version
npm --version

# 2. create a project folder
mkdir week3-express
cd week3-express

# 3. initialize npm — creates package.json
# -y accepts all defaults automatically
npm init -y

# 4. install Express (production dependency)
npm install express

# 5. install development-only tools
# --save-dev means these are NOT installed in production
npm install --save-dev nodemon

# 6. install other dependencies
npm install cors dotenv
```

> **For beginners:** `npm install` does two things — downloads the package into
> `node_modules/` and records it in `package.json` so anyone who clones your
> repo can run `npm install` and get the exact same packages.

```json
// package.json after installs — what it looks like
{
  "name": "week3-express",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev":   "nodemon server.js"
  },
  "dependencies": {
    "cors":    "^2.8.5",
    "dotenv":  "^16.0.0",
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

> **Why two script entries?** `npm start` runs the server once — for production.
> `npm run dev` runs it with nodemon — for development. Never use nodemon in
> production; it is a dev tool only.

---

### What Is Nodemon and Why Does It Exist?

```bash
# without nodemon — you must manually stop and restart after every change
node server.js
# change a file
# ctrl+C to stop
# node server.js again
# change a file... repeat forever

# with nodemon — watches files, restarts automatically
nodemon server.js
# change a file → nodemon detects it → restarts → you just refresh the browser
```

> **Analogy:** nodemon is like auto-save for your server. Without it you are
> saving manually after every sentence.

---

## Hour 2 — Your First Express Server

### The Minimum Viable Server

```js
// server.js — the absolute minimum to run an Express server

// require() imports a module — like import but CommonJS syntax
const express = require('express');

// express() creates an application instance
// think of it as the restaurant itself
const app = express();

// define a PORT — where the server listens
const PORT = 3000;

// define one route — GET request to the root path "/"
// req = request object (what the client sent)
// res = response object (what we send back)
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// start listening — server is now running and waiting for requests
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

```bash
# run it
npm run dev

# test it — open browser to http://localhost:3000
# or use curl in terminal
curl http://localhost:3000
# → Hello from Express!
```

---

### Understanding req and res

```js
app.get('/info', (req, res) => {

  // REQ — everything the client sent us
  console.log(req.method);      // "GET"
  console.log(req.url);         // "/info"
  console.log(req.headers);     // object with all HTTP headers
  console.log(req.query);       // URL query string parameters
  console.log(req.params);      // URL path parameters (covered later)
  console.log(req.body);        // request body (needs middleware)

  // RES — tools for sending a response
  res.status(200);              // set HTTP status code
  res.send('text response');    // send plain text
  res.json({ key: 'value' });   // send JSON (sets Content-Type automatically)
  res.redirect('/other');       // redirect to another URL
});
```

> **For beginners:** `req` is the envelope that arrived — you open it to read
> the message. `res` is the blank envelope you fill out and send back.

---

### Sending JSON — The Standard for APIs

```js
// res.json() converts a JS object to a JSON string
// and sets Content-Type: application/json automatically

app.get('/user', (req, res) => {
  const user = {
    id:    1,
    name:  'Ana Lopez',
    email: 'ana@example.com'
  };
  res.json(user);
});

// response the client receives:
// {
//   "id": 1,
//   "name": "Ana Lopez",
//   "email": "ana@example.com"
// }
```

---

## Hour 3 — Middleware: The Assembly Line

### What Is Middleware?

Middleware is a function that runs between the request arriving and the
response being sent. Think of it as checkpoints on an assembly line.

```
REQUEST
   │
   ▼
[middleware 1: parse JSON body]
   │
   ▼
[middleware 2: check authentication]
   │
   ▼
[middleware 3: log the request]
   │
   ▼
[route handler: do the actual work]
   │
   ▼
RESPONSE
```

```js
// middleware signature: (req, res, next)
// next() moves to the next middleware or route handler
// if you don't call next(), the request hangs forever

// custom logging middleware
function logger(req, res, next) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next(); // MUST call next() or the request stops here
}

// register middleware with app.use()
// this runs for EVERY request
app.use(logger);

// built-in middleware — parse JSON request bodies
// without this, req.body is undefined for POST/PUT requests
app.use(express.json());

// built-in middleware — parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));
```

> **For advanced students:** Express middleware is an implementation of the
> Chain of Responsibility pattern. Each middleware can read/modify req and res,
> short-circuit the chain by sending a response early, or pass control forward
> with `next()`. This is how authentication, rate limiting, CORS, and logging
> are all implemented.

---

### CORS — Why Your Frontend Can't Talk to Your Backend

```bash
# CORS = Cross-Origin Resource Sharing
# Browser security rule: a page on origin A cannot fetch from origin B
# unless origin B explicitly allows it

# your React frontend runs on:  http://localhost:5173
# your Express server runs on:  http://localhost:3000
# these are different origins — browser BLOCKS the request by default
```

```js
const cors = require('cors');

// allow ALL origins — fine for development and learning
app.use(cors());

// allow SPECIFIC origins — better for production
app.use(cors({
  origin: 'http://localhost:5173',  // only your React app
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
```

> **For beginners:** CORS is a bouncer at a club. Without CORS enabled, the
> bouncer turns away your frontend because it's from a different address.
> `app.use(cors())` tells the bouncer to let everyone in.

---

### Day 1 Lab

**Beginner:** create a server with three GET routes:
- `/` → responds with your name
- `/date` → responds with the current date/time
- `/random` → responds with a random number between 1 and 100

**Intermediate:** add a custom middleware that logs every request in this
format: `[METHOD] /path — 200 OK`. Apply it to all routes.

**Advanced:** research what happens when you call `next('error')` vs `next()`.
Create an error-handling middleware (4 parameters: `err, req, res, next`) and
trigger it from one of your routes.

---

---

# Day 2 — Routing, REST, and HTTP Methods

## Hour 1 — REST: What It Is and Why It Matters

### The Problem REST Solves

Before REST (pre-2000s), APIs had no standard. Everyone invented their own
conventions:

```
# No standard — everyone did it differently
GET  /getUser?id=1
GET  /fetchAllUsers
POST /doCreateUser
GET  /deleteUser?id=1    ← DELETE via GET — catastrophic
POST /updateUserEmail
```

This made APIs unpredictable, hard to document, and easy to misuse.
Roy Fielding defined REST in 2000 to solve this.

---

### REST: Six Constraints, One Mental Model

REST stands for **RE**presentational **S**tate **T**ransfer. At its core:

```
1. Resources are nouns (users, products, orders — not verbs)
2. HTTP methods express the action (GET, POST, PUT, DELETE)
3. URLs identify resources, methods express what to do with them
4. Responses are stateless (server remembers nothing between requests)
5. Responses use standard HTTP status codes to communicate outcome
```

```
# RESTful — clean, predictable, self-documenting
GET    /users          → get all users
GET    /users/1        → get user with id 1
POST   /users          → create a new user
PUT    /users/1        → replace user 1 entirely
PATCH  /users/1        → update specific fields of user 1
DELETE /users/1        → delete user 1
```

> **The noun/verb rule is the most important REST concept to memorize.**
> The URL is the WHAT (the resource). The HTTP method is the HOW (the action).

---

### HTTP Methods and Their Meaning

| Method | Meaning | Has Body? | Safe? | Idempotent? |
|---|---|---|---|---|
| GET | Read | No | Yes | Yes |
| POST | Create | Yes | No | No |
| PUT | Replace | Yes | No | Yes |
| PATCH | Partial update | Yes | No | No |
| DELETE | Delete | No | No | Yes |

> **Safe** = does not change server state (GET never modifies data)
> **Idempotent** = calling it multiple times has the same result as calling once
> (DELETE /users/1 twice → user is deleted, same as once)

> **For advanced students:** idempotency matters for retry logic. If a DELETE
> request times out, you can safely retry it — either the first or second
> attempt succeeded, the outcome is identical. POST is not idempotent —
> retrying a POST to create a user might create two users.

---

### Alternatives to REST

REST is dominant but not universal. Knowing the alternatives helps you
understand when REST is the wrong tool.

```
REST
  - Standard since ~2000
  - Uses HTTP verbs + URL structure
  - Response format: usually JSON
  - Best for: CRUD operations, public APIs, browser-to-server
  - Weakness: over-fetching (get whole user object when you only need name)

GraphQL (Facebook, 2015)
  - Client specifies exactly what data it wants
  - Single endpoint: POST /graphql
  - Best for: complex data requirements, mobile apps (bandwidth-sensitive)
  - Weakness: more complex to set up, caching is harder
  - Example: { user(id: 1) { name email } } — gets ONLY name and email

gRPC (Google, 2016)
  - Uses Protocol Buffers (binary, not JSON)
  - Much faster than REST for server-to-server communication
  - Best for: microservices, high-performance internal APIs
  - Weakness: not browser-friendly without a proxy layer

WebSockets
  - Persistent two-way connection
  - Best for: real-time (chat, live scores, collaborative editing)
  - Weakness: stateful — breaks REST's stateless constraint

TRPC (2021)
  - Type-safe API calls in TypeScript — no separate API layer
  - Best for: full-stack TypeScript (Next.js)
  - Weakness: TypeScript-only, not for public APIs
```

> **For your MERN stack:** REST is the right choice. Your Express server
> exposes a REST API. Your React frontend calls it with `fetch()`. This is
> the most widely used pattern in the industry today.

---

## Hour 2 — Express Routing in Depth

### Route Parameters

```js
// :id is a route parameter — a named placeholder
// matches /users/1, /users/42, /users/abc
app.get('/users/:id', (req, res) => {
  const id = req.params.id;  // extract the value from the URL
  console.log('Requested user id:', id);
  res.json({ message: `Fetching user ${id}` });
});

// multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
  const { userId, postId } = req.params;  // destructure
  res.json({ userId, postId });
});
```

---

### Query String Parameters

```js
// query strings come after ? in the URL
// GET /search?term=express&limit=10

app.get('/search', (req, res) => {
  const term  = req.query.term  || '';   // "express"
  const limit = req.query.limit || 10;   // "10" (always a string)

  console.log('Searching for:', term, 'limit:', limit);
  res.json({ term, limit: Number(limit) });
});
```

> **Route params vs Query strings:**
> - Route params (`/users/:id`) — identify a specific resource
> - Query strings (`/search?term=x`) — filter, sort, or paginate

---

### Full CRUD Example — In-Memory Users

```js
// server.js — complete CRUD with in-memory array
// (no database yet — we use an array as stand-in)

const express = require('express');
const cors    = require('cors');
const app     = express();

app.use(cors());
app.use(express.json()); // REQUIRED to read req.body on POST/PUT

// in-memory data store — resets every time server restarts
// in CIS 243 week 5+ this becomes MongoDB
let users = [
  { id: 1, name: 'Ana Lopez',   email: 'ana@example.com'  },
  { id: 2, name: 'Leo Smith',   email: 'leo@example.com'  },
  { id: 3, name: 'Maya Patel',  email: 'maya@example.com' }
];

let nextId = 4; // simple auto-increment counter

// ─── GET ALL ─────────────────────────────────────────────────
// GET /users → return all users
app.get('/users', (req, res) => {
  res.json(users);
});

// ─── GET ONE ─────────────────────────────────────────────────
// GET /users/2 → return user with id 2
app.get('/users/:id', (req, res) => {
  const id   = Number(req.params.id); // params are always strings — convert
  const user = users.find(u => u.id === id);

  if (!user) {
    // 404 = Not Found — standard HTTP code for missing resource
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// ─── CREATE ──────────────────────────────────────────────────
// POST /users → create a new user
// body: { "name": "...", "email": "..." }
app.post('/users', (req, res) => {
  const { name, email } = req.body; // read from request body

  // basic validation — never trust client data
  if (!name || !email) {
    // 400 = Bad Request — client sent incomplete data
    return res.status(400).json({ error: 'name and email are required' });
  }

  const newUser = { id: nextId++, name, email };
  users.push(newUser);

  // 201 = Created — standard code for successful resource creation
  res.status(201).json(newUser);
});

// ─── UPDATE (full replace) ────────────────────────────────────
// PUT /users/2 → replace all fields of user 2
app.put('/users/:id', (req, res) => {
  const id    = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' });
  }

  // replace the object entirely, keeping the same id
  users[index] = { id, name, email };
  res.json(users[index]);
});

// ─── UPDATE (partial) ─────────────────────────────────────────
// PATCH /users/2 → update only the fields provided
app.patch('/users/:id', (req, res) => {
  const id    = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // spread existing user, then override with whatever was sent
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

// ─── DELETE ──────────────────────────────────────────────────
// DELETE /users/2 → remove user 2
app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const before = users.length;
  users = users.filter(u => u.id !== id);

  if (users.length === before) {
    return res.status(404).json({ error: 'User not found' });
  }

  // 204 = No Content — success but nothing to return
  res.status(204).send();
});

app.listen(3000, () => console.log('Server on http://localhost:3000'));
```

---

### Testing Your Routes — Without a Frontend

```bash
# curl — command line HTTP client (built into Mac/Linux, available on Windows)

# GET all
curl http://localhost:3000/users

# GET one
curl http://localhost:3000/users/1

# POST — create
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"New User","email":"new@example.com"}'

# PUT — full update
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name","email":"updated@example.com"}'

# PATCH — partial update
curl -X PATCH http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Just the name changed"}'

# DELETE
curl -X DELETE http://localhost:3000/users/1
```

> **Thunderclient / Postman:** install the Thunderclient VS Code extension.
> It gives you a GUI to send requests without writing curl commands.
> This is what most developers use in practice.

---

## Hour 3 — HTTP Status Codes

### The Status Code Language

Every HTTP response has a status code. These are not arbitrary numbers —
they carry precise meaning that clients rely on.

```
1xx — Informational  (rare, not used in typical APIs)
2xx — Success
3xx — Redirection
4xx — Client error   (the REQUEST is wrong)
5xx — Server error   (the SERVER crashed or failed)
```

```js
// The codes you will use most in a REST API:

// 200 OK — generic success
res.status(200).json(data);
// (Express default — you can omit .status(200))
res.json(data);

// 201 Created — resource was created successfully
res.status(201).json(newResource);

// 204 No Content — success but nothing to return (DELETE)
res.status(204).send();

// 400 Bad Request — client sent invalid or incomplete data
res.status(400).json({ error: 'name is required' });

// 401 Unauthorized — not logged in (authentication missing)
res.status(401).json({ error: 'Please log in' });

// 403 Forbidden — logged in but not allowed (authorization failed)
res.status(403).json({ error: 'You do not have permission' });

// 404 Not Found — resource does not exist
res.status(404).json({ error: 'User not found' });

// 409 Conflict — request conflicts with current state (duplicate email)
res.status(409).json({ error: 'Email already in use' });

// 500 Internal Server Error — something crashed on the server
res.status(500).json({ error: 'Something went wrong' });
```

> **For beginners:** status codes are like the expression on the waiter's face
> when they bring your order. 200 = here's your food. 404 = we don't have
> that dish. 500 = the kitchen is on fire.

> **For advanced students:** frontend code should always check status codes
> before using the response body. A `fetch()` call does not throw on 4xx/5xx —
> you must check `response.ok` or `response.status` yourself.

---

### Day 2 Lab

**Beginner:** using the CRUD server from the lecture, test every route with
Thunderclient. Document each request and response in a text file. What status
code do you get when you request a user that doesn't exist?

**Intermediate:** add a `/products` resource (alongside `/users`) with the
same full CRUD. Products have: `id`, `name`, `price`, `inStock` (boolean).
Add validation: price must be a positive number.

**Advanced:** what is the difference between PUT and PATCH? Create a test that
demonstrates it: send a PUT with only `{ name: "new name" }` (no email). What
happens to the email field? Now do the same with PATCH. Explain why they behave
differently.

---

---

# Day 3 — Environment Variables, Modules, and Project Structure

## Hour 1 — Environment Variables with dotenv

### Why Environment Variables?

```js
// BAD — hardcoding sensitive data in source code
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:MyS3cr3tP@ssw0rd@cluster.mongodb.net/mydb');

// this password is now in your git history FOREVER
// if you push to GitHub, anyone can see it
// if you change the password, you have to edit the code
```

Environment variables solve this by storing config **outside** the code.

---

### Using dotenv

```bash
# .env — never commit this file to git
# one key=value pair per line, no spaces around =, no quotes needed

PORT=3000
MONGO_URI=mongodb+srv://admin:password@cluster.mongodb.net/mydb
JWT_SECRET=mySuperSecretKeyThatNobodyShouldSee
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

```bash
# .gitignore — add this line to keep .env out of git
.env
node_modules/
```

```js
// server.js

// dotenv reads .env and adds values to process.env
// MUST be called before any other code that uses process.env
require('dotenv').config();

const express = require('express');
const app     = express();

// process.env is a Node global — always an object of strings
const PORT         = process.env.PORT         || 3000;   // fallback default
const MONGO_URI    = process.env.MONGO_URI;
const JWT_SECRET   = process.env.JWT_SECRET;
const NODE_ENV     = process.env.NODE_ENV     || 'development';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

console.log(`Running in ${NODE_ENV} mode on port ${PORT}`);

// use the values — no hardcoded secrets in code
const cors = require('cors');
app.use(cors({ origin: FRONTEND_URL }));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

> **For beginners:** `.env` is a configuration file — like settings in your
> phone. The app reads the settings at startup. When you move to a different
> environment (staging, production), only the `.env` file changes, not the code.

> **For advanced students:** `process.env` values are always strings. If you
> store `PORT=3000`, `process.env.PORT === "3000"` — a string, not a number.
> This is why you often see `Number(process.env.PORT)` or `+process.env.PORT`.

---

### Environment-Specific Behavior

```js
require('dotenv').config();

const isDev  = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

// show detailed errors in development, hide them in production
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (isDev) {
    // full error details — helpful for debugging
    res.status(500).json({
      error:   err.message,
      stack:   err.stack
    });
  } else {
    // generic message — never expose internals to production users
    res.status(500).json({ error: 'Something went wrong' });
  }
});
```

---

## Hour 2 — CommonJS Modules: Export and Import

### Why Split Code Into Modules?

A single 500-line `server.js` file is hard to read, maintain, and debug.
Modules let you split code into focused files with clear responsibilities.

```
# Before modules — everything in one file
server.js  (500+ lines of routes, logic, middleware, config)

# After modules — each file has one job
server.js          (starts the server, wires everything together)
routes/
  users.js         (all /users routes)
  products.js      (all /products routes)
middleware/
  logger.js        (logging middleware)
  errorHandler.js  (error handling middleware)
config/
  db.js            (database connection)
```

---

### CommonJS: require / module.exports

Node uses CommonJS modules by default (unless you use `"type": "module"` in
package.json).

```js
// math.js — exporting a single function
function add(a, b) {
  return a + b;
}

// module.exports is what the file exposes to the outside world
module.exports = add;
```

```js
// app.js — importing it
const add = require('./math');  // ./ means same directory

console.log(add(2, 3));  // → 5
```

---

### Exporting Multiple Things

```js
// helpers.js — exporting multiple functions

function add(a, b)      { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }

// export as an object
module.exports = {
  add,
  subtract,
  multiply
};
```

```js
// app.js — importing multiple functions

// option 1: import the whole object
const helpers = require('./helpers');
helpers.add(2, 3);
helpers.subtract(5, 2);

// option 2: destructure what you need
const { add, multiply } = require('./helpers');
add(2, 3);
multiply(4, 5);
```

---

### Splitting Routes Into Separate Files

```js
// routes/users.js — all /users routes in one file

const express = require('express');
const router  = express.Router(); // mini-app for routing

// routes here are RELATIVE to whatever path they are mounted at
// if mounted at /users, these become /users/, /users/:id, etc.

let users  = [
  { id: 1, name: 'Ana',  email: 'ana@example.com' },
  { id: 2, name: 'Leo',  email: 'leo@example.com'  }
];
let nextId = 3;

// GET /users
router.get('/', (req, res) => {
  res.json(users);
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

// POST /users
router.post('/', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email required' });
  }
  const newUser = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// export the router — server.js will import and mount it
module.exports = router;
```

```js
// server.js — clean, minimal, just wires things together

require('dotenv').config();
const express      = require('express');
const cors         = require('cors');
const usersRouter  = require('./routes/users');    // import router
const app          = express();
const PORT         = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// mount the router at /users
// all routes in users.js are now prefixed with /users
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
```

> **For advanced students:** `express.Router()` creates a mini Express
> application. It has its own middleware stack and routes, but no `listen()`.
> This lets you compose large applications from small, focused pieces — the
> same idea behind microservices at a smaller scale.

---

## Hour 3 — Full Project Structure

### Professional Folder Layout

```
project/
├── server.js              ← entry point — start here
├── package.json
├── .env                   ← secrets — never commit
├── .gitignore
│
├── routes/
│   ├── users.js           ← /users routes
│   └── products.js        ← /products routes
│
├── middleware/
│   ├── logger.js          ← request logging
│   └── errorHandler.js    ← centralized error handling
│
└── config/
    └── env.js             ← export validated env variables
```

---

### config/env.js — Validate Env Variables at Startup

```js
// config/env.js
// validate that required env vars exist before the server starts
// this prevents mysterious crashes 30 minutes into a demo

require('dotenv').config();

const required = ['PORT', 'MONGO_URI', 'JWT_SECRET'];

required.forEach(key => {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1); // crash immediately with a useful message
  }
});

// export validated, typed values
module.exports = {
  PORT:    Number(process.env.PORT) || 3000,
  MONGO_URI:  process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV:   process.env.NODE_ENV || 'development',
  isDev:      process.env.NODE_ENV !== 'production'
};
```

---

### middleware/logger.js

```js
// middleware/logger.js

function logger(req, res, next) {
  const start = Date.now();

  // res.on('finish') fires after the response is sent
  // lets us measure how long the request took
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(
      `${new Date().toISOString()} | ${req.method} ${req.url} | ` +
      `${res.statusCode} | ${duration}ms`
    );
  });

  next();
}

module.exports = logger;
```

---

### middleware/errorHandler.js

```js
// middleware/errorHandler.js
// Express recognizes a 4-parameter middleware as an error handler
// it only runs when next(error) is called from a route or middleware

const { isDev } = require('../config/env');

function errorHandler(err, req, res, next) {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: err.message || 'Internal Server Error',
    // only include stack trace in development
    ...(isDev && { stack: err.stack })
  });
}

module.exports = errorHandler;
```

---

### Complete server.js

```js
// server.js — the fully assembled server

const { PORT } = require('./config/env'); // validates env at startup
const express       = require('express');
const cors          = require('cors');
const logger        = require('./middleware/logger');
const errorHandler  = require('./middleware/errorHandler');
const usersRouter   = require('./routes/users');

const app = express();

// ─── GLOBAL MIDDLEWARE ────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(logger);

// ─── ROUTES ───────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({ message: 'API is running', version: '1.0' });
});

app.use('/users', usersRouter);

// ─── 404 HANDLER ─────────────────────────────────────────────
// catches any route that was not matched above
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.url} not found` });
});

// ─── ERROR HANDLER ────────────────────────────────────────────
// MUST be last — after all routes
app.use(errorHandler);

// ─── START ────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

### Day 3 Lab

**Beginner:** create a `.env` with `PORT`, `APP_NAME`, and `AUTHOR`. Log all
three values when the server starts. Try running the server without the `.env`
file — what happens?

**Intermediate:** split the CRUD server from Day 2 into the full project
structure: `server.js`, `routes/users.js`, `middleware/logger.js`. Verify
all routes still work after the split.

**Advanced:** add `config/env.js` with validation. Add a required env var that
you deliberately leave out of `.env`. Confirm the server crashes with a useful
message. Then add it back and verify the server starts correctly.

---

---

# Day 4 — Putting It All Together: Full REST API

## Hour 1 — Error Handling Patterns

### The Problem With Unhandled Errors

```js
// without error handling — one bad request crashes the server
app.get('/users/:id', (req, res) => {
  const user = findUserById(req.params.id);
  res.json(user.name.toUpperCase()); // if user is null → TypeError → crash
});

// every connected client is affected
// nodemon restarts the server but the request that caused the crash got no response
```

---

### try/catch in Routes

```js
// wrap route logic in try/catch
// pass errors to next() — the error handler middleware catches them
app.get('/users/:id', (req, res, next) => {
  try {
    const id   = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
      // create an error with a status code attached
      const err    = new Error('User not found');
      err.statusCode = 404;
      throw err; // caught by catch below
    }

    res.json(user);
  } catch (err) {
    next(err); // pass to error handler middleware
  }
});
```

---

### Creating a Custom Error Class

```js
// utils/AppError.js
// a custom error that carries an HTTP status code

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);          // call Error constructor
    this.statusCode = statusCode;
    this.name = 'AppError';
  }
}

module.exports = AppError;
```

```js
// using AppError in routes
const AppError = require('../utils/AppError');

router.get('/:id', (req, res, next) => {
  try {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) throw new AppError('User not found', 404);
    res.json(user);
  } catch (err) {
    next(err);
  }
});
```

---

## Hour 2 — Building a Complete Products API

### Full Working Example With Comments

```js
// routes/products.js — complete documented REST API

const express   = require('express');
const router    = express.Router();
const AppError  = require('../utils/AppError');

// sample data — in CIS 243 Week 5 this becomes a MongoDB collection
let products = [
  { id: 1, name: 'Oil Filter',   price: 12.99, inStock: true  },
  { id: 2, name: 'Brake Pads',   price: 45.00, inStock: true  },
  { id: 3, name: 'Spark Plugs',  price:  8.50, inStock: false }
];
let nextId = 4;

// ── HELPER ──────────────────────────────────────────────────
// small validation function — reuse instead of repeating
function validateProduct({ name, price }) {
  const errors = [];
  if (!name || typeof name !== 'string') errors.push('name must be a string');
  if (price === undefined || typeof price !== 'number' || price < 0) {
    errors.push('price must be a non-negative number');
  }
  return errors; // empty array = valid
}

// ── GET ALL — with optional filtering ───────────────────────
// GET /products            → all products
// GET /products?inStock=true → only in-stock products
router.get('/', (req, res) => {
  let result = [...products]; // copy — don't mutate the original

  // filter by query string if provided
  if (req.query.inStock !== undefined) {
    const filter = req.query.inStock === 'true'; // string → boolean
    result = result.filter(p => p.inStock === filter);
  }

  res.json(result);
});

// ── GET ONE ─────────────────────────────────────────────────
router.get('/:id', (req, res, next) => {
  try {
    const product = products.find(p => p.id === Number(req.params.id));
    if (!product) throw new AppError('Product not found', 404);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// ── CREATE ──────────────────────────────────────────────────
// POST /products  body: { name, price, inStock }
router.post('/', (req, res, next) => {
  try {
    const errors = validateProduct(req.body);
    if (errors.length > 0) {
      throw new AppError(errors.join(', '), 400);
    }

    const { name, price, inStock = true } = req.body;
    const newProduct = { id: nextId++, name, price, inStock };
    products.push(newProduct);

    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
});

// ── FULL UPDATE ─────────────────────────────────────────────
// PUT /products/1  body: { name, price, inStock }
router.put('/:id', (req, res, next) => {
  try {
    const index = products.findIndex(p => p.id === Number(req.params.id));
    if (index === -1) throw new AppError('Product not found', 404);

    const errors = validateProduct(req.body);
    if (errors.length > 0) throw new AppError(errors.join(', '), 400);

    const { name, price, inStock = true } = req.body;
    products[index] = { id: products[index].id, name, price, inStock };

    res.json(products[index]);
  } catch (err) {
    next(err);
  }
});

// ── PARTIAL UPDATE ──────────────────────────────────────────
// PATCH /products/1  body: any subset of fields
router.patch('/:id', (req, res, next) => {
  try {
    const index = products.findIndex(p => p.id === Number(req.params.id));
    if (index === -1) throw new AppError('Product not found', 404);

    // merge existing product with new fields
    products[index] = { ...products[index], ...req.body };

    res.json(products[index]);
  } catch (err) {
    next(err);
  }
});

// ── DELETE ──────────────────────────────────────────────────
router.delete('/:id', (req, res, next) => {
  try {
    const index = products.findIndex(p => p.id === Number(req.params.id));
    if (index === -1) throw new AppError('Product not found', 404);

    products.splice(index, 1);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
```

---

## Hour 3 — Connecting React to Express (Preview)

### The Full MERN Request Cycle

```
React (port 5173)              Express (port 3000)
       │                               │
       │  fetch('/users')              │
       │  ────────────────────────────►│
       │                               │  finds users in memory/DB
       │  ◄──────────────────────────── │
       │  JSON: [{id:1,name:'Ana'}...]  │
       │                               │
       │  renders list in the DOM       │
```

---

### Fetching From Express in React

```jsx
// React component — fetches users from Express server
// This is a preview of what you will build in Week 6+

import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    // fetch from Express server
    // CORS must be enabled on the server for this to work
    fetch('http://localhost:3000/users')
      .then(res => {
        // fetch does NOT throw on 4xx/5xx — check manually
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // [] = run once on mount

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} — {user.email}</li>
      ))}
    </ul>
  );
}
```

---

### POST From React to Express

```jsx
// creating a user from a React form

async function createUser(name, email) {
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  // REQUIRED — tells Express to parse body
    },
    body: JSON.stringify({ name, email }) // object → JSON string
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error);
  }

  return response.json(); // returns the newly created user
}
```

> **Most common beginner mistake:** forgetting `Content-Type: application/json`
> in the fetch headers. Without it, `express.json()` middleware cannot parse
> the body, and `req.body` is `undefined`.

---

### Day 4 Lab

**Beginner:** using the complete server from the lecture, use Thunderclient to:
1. Get all products
2. Get only in-stock products (`?inStock=true`)
3. Create a new product
4. Try to create a product with a negative price — what error do you get?

**Intermediate:** add a `/orders` resource. An order has: `id`, `userId`,
`productId`, `quantity`, `status` (pending/complete). Implement GET all,
GET one, POST (create), PATCH (update status only). Validate that userId
and productId exist in their respective arrays.

**Advanced:** write a simple fetch-based test script (`test.js`) that runs
with `node test.js` and tests every endpoint automatically — logs PASS or
FAIL for each one. No testing library needed, just fetch and console.log.

---

---

# Week 3 Summary

## What We Built

By the end of this week you have a working REST API with:
- Express server with nodemon hot-reloading
- Full CRUD routes (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`)
- Route parameters and query strings
- Request body parsing middleware
- CORS enabled for frontend connections
- Environment variables via dotenv
- Modular project structure (routes, middleware, config)
- Centralized error handling
- Custom error class with HTTP status codes

---

## Key Concepts

| Concept | One-Line Summary |
|---|---|
| Express | Minimal web framework — adds routing and middleware to Node's http module |
| Nodemon | Dev tool — watches files and restarts server automatically |
| Middleware | Functions that run between request and response; called with `(req, res, next)` |
| CORS | Browser security policy; use `cors()` middleware to allow cross-origin requests |
| dotenv | Reads `.env` file into `process.env` — keeps secrets out of source code |
| REST | URL = resource (noun), HTTP method = action (verb) |
| Route parameter | Named placeholder in URL: `/users/:id` |
| Query string | Filter/sort parameters after `?`: `/users?role=admin` |
| module.exports | What a Node module exposes to other files |
| require() | Imports a module — built-in, npm package, or local file |
| express.Router() | Mini Express app — groups related routes into one file |
| Status codes | 2xx=success, 4xx=client error, 5xx=server error |

---

## Common Mistakes Reference

```js
// 1. forgetting express.json() — req.body is undefined
app.use(express.json()); // must be before routes

// 2. params are strings — always convert before comparing
const id = Number(req.params.id);  // not req.params.id directly

// 3. not calling next() in middleware — request hangs forever
function myMiddleware(req, res, next) {
  doSomething();
  next(); // do not forget this

// 4. error handler must have 4 params — Express identifies it by arity
app.use((err, req, res, next) => { ... }); // not (req, res, next)

// 5. require('dotenv').config() must be first
require('dotenv').config(); // line 1 of server.js — before anything else

// 6. Content-Type missing in fetch POST
headers: { 'Content-Type': 'application/json' } // required for req.body to work
```

---

## Looking Ahead — Week 4

Next week: **MongoDB and Mongoose**. The in-memory arrays you used this week
will be replaced with a real database. You will learn:
- Connecting to MongoDB Atlas with Mongoose
- Defining schemas and models
- Replacing array operations with async/await database queries
- Handling async errors with try/catch

Everything you built this week — the route structure, middleware, error
handling, env variables — carries forward unchanged. The only thing that
changes is where the data lives.