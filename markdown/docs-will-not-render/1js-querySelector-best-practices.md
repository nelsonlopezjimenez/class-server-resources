## DOM Selection — Modern Best Practices

### The methods available

| Method | Returns | Live? |
|---|---|---|
| `getElementById('id')` | Single element | No |
| `querySelector('css')` | First match | No |
| `querySelectorAll('css')` | NodeList (all matches) | No |
| `getElementsByClassName` | HTMLCollection | Yes (avoid) |
| `getElementsByTagName` | HTMLCollection | Yes (avoid) |

**Live** means the collection auto-updates as the DOM changes — sounds useful, is usually a bug source.

---

### Current best practice: `querySelector` / `querySelectorAll`

```javascript
// preferred — consistent, CSS-based, flexible
const btn    = document.querySelector('#submit');
const items  = document.querySelectorAll('.menu-item');
const first  = document.querySelector('ul > li');

// older — still works, just more limited
const btn = document.getElementById('submit');
```

---

### Why `querySelector` won

- One API to learn instead of four
- Takes any CSS selector — IDs, classes, attributes, combinators
- Consistent return type — no surprise live collections
- Works on any element, not just `document`

```javascript
// scope to a container — huge for components
const nav  = document.querySelector('.navbar');
const link = nav.querySelector('a.active'); // searches inside nav only
```

---

### Common mistakes to avoid

**1. Forgetting `querySelectorAll` returns a NodeList, not an Array**
```javascript
const items = document.querySelectorAll('li');
items.map(...)    // TypeError — NodeList has no .map()

// fix
[...items].map(...)          // spread to array
Array.from(items).map(...)   // explicit conversion
```

**2. Selecting too broadly**
```javascript
// bad — grabs ALL buttons on the page
document.querySelectorAll('button')

// better — scope it
form.querySelectorAll('button[type="submit"]')
```

**3. Not checking for null**
```javascript
const btn = document.querySelector('#missing');
btn.addEventListener('click', ...)  // TypeError if not found

// fix
btn?.addEventListener('click', ...) // optional chaining
```

**4. Selecting inside a loop**
```javascript
// bad — hits the DOM every iteration
items.forEach(i => document.querySelector('.total').textContent = ...)

// good — cache it
const total = document.querySelector('.total');
items.forEach(i => total.textContent = ...)
```

---

### When `getElementById` is still acceptable

- Legacy codebases — no reason to rewrite working code
- Performance-critical loops — `getElementById` is marginally faster (direct hash lookup vs CSS parse)
- Teaching beginners the concept of IDs before CSS selectors

---

### The real modern answer: frameworks abstract this away

In React, Vue, Svelte — you rarely touch the DOM directly at all:

```javascript
// React — refs instead of querySelector
const btnRef = useRef(null);
<button ref={btnRef}>Click</button>

// Vue — template refs
<button ref="btn">Click</button>
```

> **Rule of thumb:** Use `querySelector`/`querySelectorAll` for vanilla JS. Scope selections to the smallest container possible. Cache results. If you find yourself selecting the same element repeatedly, you're probably managing state manually — consider whether a framework fits the project.