**Beginner:**
A magic number is a raw number written directly in code with no explanation of what it means. It's "magic" because anyone reading it has no idea where it came from.

```javascript
// magic number — what does 3 mean?
if (error.code === 3) {
  console.log("timed out");
}

// not magic — the name explains it
if (error.code === error.TIMEOUT) {
  console.log("timed out");
}
```

The fix is always to give the number a name — either a constant or a named property.

---

**Advanced:**
A magic number is an unnamed literal value embedded in logic whose meaning, origin, or unit cannot be determined from context alone. The problem is not the number itself but the loss of semantic intent at the call site.

```javascript
// three separate magic number problems:
setTimeout(fn, 86400000);   // what unit? what does this duration represent?
array.slice(0, 25);         // why 25? a page size? an API limit? arbitrary?
if (status === 2)           // which status? from what enum? what does 2 mean?
```

Better:

```javascript
const MS_PER_DAY    = 24 * 60 * 60 * 1000;  // unit is now self-documenting
const PAGE_SIZE     = 25;                     // intent is named
const STATUS_ACTIVE = 2;                      // origin is explicit
```

The deeper issue is **fragility** — if the value needs to change, you have to find every occurrence and know they all refer to the same thing. A named constant changes in one place.

> The term comes from the early days of computing when unexplained values in binary code seemed to appear out of nowhere — as if by magic.