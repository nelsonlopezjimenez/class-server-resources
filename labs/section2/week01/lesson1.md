# CIS 242 Lesson 01
## Prompt: Refactor date.html to use Temporal new syntax
Key teaching moments built into the comments:

**Top of script block** — a full conceptual intro covering why `Date` is broken and how Temporal fixes each issue, plus definitions of `PlainDate`, `PlainTime`, `ZonedDateTime`, `Instant`, and immutability.

**Per-button comments explain:**
- Starter — `ZonedDateTime` vs `Date().toString()` locale variance
- Year — property access (`today.year`) vs method call (`getFullYear()`)
- Month — the big fix gets a box comment; also renders the old vs new value live in the page so students see the difference without reading code
- Day — `today.day` vs `today.dayOfWeek` distinction (mirrors the old `getDate()` vs `getDay()` confusion)
- Full date — explains `today.toString()` ISO shortcut vs manual MM/DD/YYYY
- Full time — explains `time.toString()` shortcut as a bonus comment

**One line worth pointing out in class:**
```javascript
const { Temporal } = temporalPolyfill;
```
This is destructuring — worth a brief mention since students will see that pattern throughout modern JS.

