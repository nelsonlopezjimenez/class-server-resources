## HTML5 Date Inputs + JS Temporal API

I think you're asking about two related but separate things — let me cover both.

---

### HTML5 Date Input Types (replacing hacks)

**Before HTML5** — no native date input existed:
- Developers used text inputs + jQuery UI datepicker
- Or Flash-based pickers
- Manually validated date strings

**HTML5 introduced native inputs:**
```html
<input type="date">
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">
```
No JavaScript needed for basic date picking. The rationale was simple — dates are universal enough to deserve a native control.

---

### JavaScript `Temporal` API (replacing `Date`)

**`Date` was broken from the start:**

| Problem | Example |
|---|---|
| Months are 0-indexed | January = `0` |
| No timezone support | Everything collapses to local or UTC |
| Mutable by default | Side effects everywhere |
| No duration math | Calculate "3 months from now" — good luck |
| Parsing is inconsistent | Browser-dependent behavior |

```javascript
new Date(2024, 0, 1) // January — why 0?
new Date("2024-01-01") // Maybe UTC, maybe local — depends on browser
```

**`Temporal` fixes all of it:**
```javascript
Temporal.PlainDate.from('2024-01-15')  // Unambiguous
Temporal.Now.zonedDateTimeISO()        // Explicit timezone
date.add({ months: 3 })               // Immutable, returns new object
```

| Feature | `Date` | `Temporal` |
|---|---|---|
| Immutable | No | Yes |
| Timezone aware | No | Yes |
| Duration math | Manual | Built-in |
| Month indexing | 0-based | 1-based |
| Parsing consistency | Unreliable | Strict |

---

### Rationale for Replacement

`Date` was written in **10 days in 1995** copying Java's `java.util.Date` — which Java itself later deprecated for the same reasons. It survived 30 years purely on inertia.

> **Status:** `Temporal` is at Stage 3 TC39 proposal — shipping in browsers now behind flags. Libraries like `date-fns` and `Luxon` emerged specifically to paper over `Date`'s failures while the community waited.