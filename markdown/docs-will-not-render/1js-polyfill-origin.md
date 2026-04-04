**Beginner:**
A polyfill is a piece of JavaScript that teaches an older browser a new trick. If a browser doesn't support a feature yet, the polyfill fakes it — so your code works today without waiting for browsers to catch up.

---

**Advanced:**
A polyfill is a library that implements a standard API in userland when the runtime doesn't provide it natively. It patches the global scope (or exports a compatible interface) to match the spec exactly — so consuming code is runtime-agnostic and can drop the polyfill with zero changes once native support ships.

The name comes from **Polyfilla** — a British brand of wall spackle. Remy Sharp coined it in 2009: you fill the gaps in browsers the same way spackle fills gaps in walls.