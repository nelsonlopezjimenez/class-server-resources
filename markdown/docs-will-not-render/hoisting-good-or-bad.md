**Hoisting is a JavaScript mechanism, not a choice** — it happens whether you want it or not. The question is whether you *rely on it intentionally*.

---

**What it does (briefly):**
- `var` declarations and `function` declarations are moved to the top of their scope at compile time
- `let`/`const` are hoisted but stay in a **temporal dead zone** (unusable until declared)

---

**The consensus: relying on it = bad practice**

```js
// Works, but confusing — function used before it's defined
greet();
function greet() { console.log("hi"); }

// This is why most style guides say: declare first, use second
```

**Why it's considered problematic:**
- Obscures code flow — readers expect top-to-bottom logic
- `var` hoisting is a famous source of bugs (value is `undefined`, not an error)
- Makes refactoring riskier

---

**The modern approach:**
- Use `const`/`let` exclusively — eliminates `var` hoisting surprises
- Declare functions before calling them, even though hoisting would allow otherwise
- Linters (ESLint `no-use-before-define`) catch accidental reliance on it

---

**One legitimate use:** some developers intentionally put `function` declarations at the *bottom* of a file for readability — main logic on top, helpers below. This leans on hoisting deliberately and is defensible if the team agrees on it.

> Bottom line: **understand hoisting deeply, but write code as if it doesn't exist.**