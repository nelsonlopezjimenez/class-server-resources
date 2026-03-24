**Short answer: always prefer `addEventListener`.**

---

**`onclick` (avoid):**
```html
<button onclick="doSomething()">Click</button> <!-- HTML and JS mixed -->
```
```js
button.onclick = doSomething; // only one handler allowed — second overwrites first
```

---

**`addEventListener` (preferred):**
```js
button.addEventListener('click', doSomething);  // multiple handlers, no conflict
button.addEventListener('click', logAnalytics); // both run fine
```

---

**Why `addEventListener` wins:**

| | `onclick` | `addEventListener` |
|---|---|---|
| Multiple handlers | ❌ one only | ✅ unlimited |
| Separation of concerns | ❌ mixes HTML/JS | ✅ JS stays in JS |
| Can be removed | ❌ messy | ✅ `removeEventListener` |
| Other events | ❌ limited | ✅ any event |

---

**One legitimate use of `onclick`** — quick prototyping or teaching demos where brevity matters more than architecture.

---

**Common mistake to avoid** — anonymous functions break `removeEventListener`:
```js
// Can't remove this later
button.addEventListener('click', () => doSomething());

// Can remove this
button.addEventListener('click', doSomething);
button.removeEventListener('click', doSomething); // ✅
```

> `onclick` is a **single-occupancy apartment**. `addEventListener` is an **apartment building** — as many tenants as you need.