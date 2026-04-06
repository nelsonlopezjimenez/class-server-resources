In practice for your use case — no meaningful difference. But the details are worth knowing:

---

## Same `<script>` block, top of code

```html
<script>
  // fake override — runs first
  navigator.geolocation.getCurrentPosition = function(...) { ... };

  // student code below — sees the fake
  document.getElementById("btn-geo").addEventListener("click", ...);
</script>
```

JavaScript executes top to bottom within a script block. The override lands before the button handler is registered, so it works.

---

## Separate `<script>` tag before the existing one

```html
<script>
  // fake override
  navigator.geolocation.getCurrentPosition = function(...) { ... };
</script>

<script>
  // student code — sees the fake
  document.getElementById("btn-geo").addEventListener("click", ...);
</script>
```

Same result. The browser executes script tags in document order, each blocking until complete before the next runs.

---

## When it DOES matter

| Scenario | Use separate `<script>` |
|---|---|
| Polyfill or library must load first | `<script src="polyfill.js">` before your code |
| You want to keep instructor code clearly separated from student code | Cleaner for grading |
| External file loaded with `src=` | Can't mix inline code in the same tag |

```html
<!-- this is INVALID — src and inline code cannot coexist -->
<script src="fake-geo.js">
  console.log("this never runs");
</script>
```

---

## The one real gotcha — `defer` and `async`

```html
<script defer src="student-code.js"></script>
```

If a script uses `defer` or `async`, execution order is no longer guaranteed. A separate inline `<script>` without those attributes will still run immediately — potentially before or after a deferred script in unexpected ways.

> **For your classroom:** since you control the files and aren't using `defer`/`async`, either approach works. A separate `<script>` block at the top is slightly cleaner — it signals clearly "this is setup code, not student code."