**The `app.get('*')` wins — the error handler never runs.**

Express processes routes and middleware **in registration order**, top to bottom, first match wins.

```js
app.use(express.json());
app.use(logger);

app.get('/users', (req, res) => { ... });
app.post('/users', (req, res) => { ... });

// registered first — catches GET /anything unmatched above
app.get('*', (req, res) => {
  res.status(404).json({ error: 'caught by wildcard' });
});

// registered after — never reached for GET requests
// because app.get('*') already sent a response
app.use((req, res, next) => {
  next(new AppError('Route not found', 404));
});

app.use(errorHandler);
```

```
GET /nonexistent
      ↓
app.get('/users')     → no match
      ↓
app.get('*')          → MATCH — sends response here
      ↓
app.use() catch-all   → NEVER REACHED (response already sent)
      ↓
errorHandler          → NEVER REACHED
```

---

**For POST /nonexistent however:**

```
POST /nonexistent
      ↓
app.get('/users')     → no match (wrong method)
      ↓
app.get('*')          → no match (GET only, not POST)
      ↓
app.use() catch-all   → MATCH — calls next(err)
      ↓
errorHandler          → runs, sends response
```

So the behavior is **inconsistent** — GET 404s get one response format,
POST/PUT/DELETE 404s get another. This is exactly why `app.get('*')` is the
wrong tool for a REST API catch-all.

---

**What happens if you try to send a response after one was already sent:**

```js
app.get('*', (req, res) => {
  res.status(404).json({ error: 'wildcard caught it' });
  // response is sent and stream is closed
});

app.use((req, res, next) => {
  // if this somehow ran after the above — Node throws:
  // Error: Cannot set headers after they are sent to the client
});
```

Express is smart enough to skip middleware after a response is sent, but if
it does slip through you get that error in the console — another reason to
keep the pipeline clean with a single `app.use()` catch-all.

---

**The clean version with no conflict:**

```js
// all routes above this line

// catches ALL methods — no wildcard needed
app.use((req, res, next) => {
  next(new AppError(`Route not found: ${req.url}`, 404));
});

// one place handles all errors regardless of where they came from
app.use(errorHandler);
```

> Think of `app.get('*')` and `app.use()` as two bouncers at the door.
> If `app.get('*')` is first, it handles all guests arriving by car (GET).
> Guests arriving by bus (POST, PUT, DELETE) walk right past it to the
> second bouncer. Having two bouncers with different rules creates
> inconsistent behavior — one bouncer (`app.use`) who handles everyone is simpler.

**Correct — but for a slightly different reason than you might think.**

The error handler is invisible to normal request flow. It only activates when `next(err)` is called. A regular unmatched request never calls `next(err)` on its own — it just keeps falling through looking for a match.

```js
app.get('/users', (req, res) => { ... });

// error handler registered "first" after routes
// but it is INVISIBLE to normal requests
// it only wakes up when next(err) is called
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

// wildcard registered last
app.get('*', (req, res) => {
  res.status(404).json({ error: 'wildcard caught it' });
});
```

```
GET /nonexistent
      ↓
app.get('/users')     → no match
      ↓
errorHandler          → SKIPPED — not an error, next(err) was never called
      ↓
app.get('*')          → MATCH — sends response
```

---

**So the wildcard DOES get reached** — the error handler is not an obstacle
because it lives on a completely separate track:

```
Normal request flow:
  middleware → middleware → route → route → catch-all → done

Error flow (only activated by next(err)):
  → → → → → → → → → → → → → errorHandler → done
```

They are parallel tracks, not sequential. A normal request physically cannot
trigger the error handler unless something explicitly calls `next(err)`.

---

**The only way the wildcard would never be reached:**

```js
app.get('/users', (req, res) => { ... });

// this is a NORMAL middleware (3 params) — not an error handler
// it DOES intercept all requests
app.use((req, res, next) => {
  res.status(404).json({ error: 'caught here' }); // sends response
  // wildcard below never reached because response is already sent
});

app.get('*', (req, res) => {
  // never runs
});
```

A 3-parameter `app.use()` is on the normal track and blocks everything below it.
A 4-parameter error handler is on the error track and is invisible to normal requests.

---

**Summary:**

| Registered before wildcard | Blocks wildcard? | Why |
|---|---|---|
| Error handler `(err,req,res,next)` | ❌ No | Lives on error track, invisible to normal flow |
| Normal middleware `(req,res,next)` that calls `next()` | ❌ No | Passes control forward |
| Normal middleware `(req,res,next)` that sends a response | ✅ Yes | Response sent, stream closed |
| `app.use()` catch-all without `next()` | ✅ Yes | Same as above |

> The 4-parameter signature is not just a convention — it is how Express
> physically routes the request to a different pipeline. Getting that wrong
> (using 3 params when you mean an error handler, or 4 when you mean normal
> middleware) is one of the most common and confusing Express bugs.

## PROMPT: wild card only ligitimate use: serving a React SPA
**Correct — with one exception already mentioned.**

---

**In a REST API: avoid `app.get('*')`**

```js
// problematic in a REST API
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});
```

Problems:
- Only catches GET — POST/PUT/DELETE 404s get no response or a different one
- Inconsistent behavior across HTTP methods
- Bypasses the centralized error handler — 404s are formatted differently than other errors
- Harder to add logging, monitoring, or custom error shapes later

---

**The clean REST API pattern:**

```js
// all routes defined above

// catches ALL methods uniformly
app.use((req, res, next) => {
  next(new AppError(`Route not found: ${req.url}`, 404));
});

// one place formats ALL errors — 404s, 500s, validation errors, everything
app.use(errorHandler);
```

Every error — whether it's a missing route, a bad request, a database crash,
or a missing field — flows through one place. Consistent format, one place
to maintain.

---

**The ONE legitimate use: serving a React SPA**

```js
// serve React build folder
app.use(express.static(path.join(__dirname, 'client/build')));

// ALL unmatched GET requests get index.html
// React Router takes over client-side navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});
```

This is intentional and correct because:
- There are no REST routes here — this is purely serving HTML
- You WANT every GET to return `index.html` so React Router handles `/about`, `/users`, `/dashboard` on the client
- POST/PUT/DELETE would never hit this in a properly structured MERN app because API routes are defined above it

---

**How a well-structured MERN server separates the two concerns:**

```js
// ── API ROUTES (REST) ──────────────────────────────────────
app.use('/api/users',    usersRouter);
app.use('/api/products', productsRouter);

// ── API 404 CATCH-ALL ──────────────────────────────────────
// only triggers for unmatched /api/* routes
app.use('/api/*', (req, res, next) => {
  next(new AppError(`API route not found: ${req.url}`, 404));
});

app.use(errorHandler);

// ── SPA FALLBACK (React) ───────────────────────────────────
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});
```

The two patterns coexist cleanly — API errors go through `errorHandler`,
React routes go through the wildcard. No overlap.

---

> **Rule of thumb:** if you find yourself reaching for `app.get('*')` in a
> REST API, it is a signal that the error handling architecture needs
> rethinking. If you are serving a React app, it is exactly the right tool.