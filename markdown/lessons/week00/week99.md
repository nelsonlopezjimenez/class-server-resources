## Python Backend Options for Teaching

Given Python is allowed, here are your realistic options ranked by teaching fit:

**Flask** — best choice for a web dev course
- Minimal boilerplate, maps well to Express concepts
- Routes, middleware, templates, REST APIs — all covered cleanly
- `pip install flask` — low friction, unlikely to raise flags

**FastAPI** — strong second if you want modern patterns
- Async-first, automatic docs (Swagger UI built in)
- Great for teaching REST + type hints simultaneously
- `pip install fastapi uvicorn`

**Django** — only if you want a full MVC framework
- More opinionated, better for a dedicated backend course
- Overkill if you're bridging from frontend

**Built-in `http.server`** — zero install fallback
- Good for demonstrating raw HTTP concepts before introducing a framework
- Not production-grade but useful pedagogically

---

## PHP Likelihood

Your instinct is right — if Node.js was rejected for security reasons, PHP on a shared classroom environment is likely to get the same treatment or worse (attack surface concerns). Flask is a much cleaner ask to IT.

---

## Relay.js

You mean [Relay](https://relay.dev/) (Meta's GraphQL client)? It **is** still maintained and used — but it's niche, Meta-ecosystem-heavy, and has a steep learning curve. For teaching, **Apollo Client** dominates the GraphQL space. If you're not already teaching GraphQL, Relay is not worth the investment.

---

**Bottom line for your course:** Flask + a bit of FastAPI is the practical path. Want me to sketch out a Flask-based syllabus structure that maps to what you'd normally do in Express?