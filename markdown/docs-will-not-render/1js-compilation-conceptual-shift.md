## Compilation — Definition & Evolution

### Original Definition
Compilation is the process of **translating source code into another form** before execution. Traditionally that meant one thing: source → binary. Done before runtime, never again.

---

### The Evolution

**Stage 1 — Pure AOT (1950s–80s)**
The original model. One job, done once:
```
Source code → [Compiler] → Binary executable → CPU runs it
```
The compiler is a separate program that exits. The binary has no knowledge of where it came from.

---

**Stage 2 — Bytecode Compilation (1990s)**
Java introduced a middle layer — compile to a portable intermediate form, not native binary:
```
Source → [Compiler] → Bytecode → [VM interprets it] → CPU
```
"Compile once, run anywhere" — the binary is virtual, not hardware-specific.

---

**Stage 3 — JIT Added to VMs (late 90s–2000s)**
The VM got smarter. Why *interpret* bytecode forever when hot paths could be compiled to real machine code *during* execution?
```
Source → Bytecode → VM runs it → [JIT watches] → hot code → Machine code
```
Compilation is now **a background process happening at runtime**.

---

**Stage 4 — JIT in "Interpreted" Languages (2000s–present)**
V8 (2008) brought this to JavaScript — a language with no bytecode step at all originally:
```
JS Source → AST → Bytecode (Ignition) → JIT (Turbofan) → Machine code
           ↑                                    ↓
           └──────── deoptimize if wrong ───────┘
```
The radical addition: **deoptimization** — the compiler can *undo* its work if runtime evidence contradicts its assumptions.

---

### How the Definition Changed

| Era | What "compilation" meant |
|---|---|
| 1950s–80s | Translate once, ahead of time, to native binary |
| 1990s | Translate to portable intermediate bytecode |
| 2000s | Translate *during* execution, selectively |
| Today | Continuous, speculative, reversible translation |

---

### The Key Conceptual Shift

Traditional compilation has **complete information** — all types, all sizes, known at compile time.

JIT compilation is **speculative** — it makes educated guesses based on runtime behavior and bets machine code on them:

> *"This variable has always been an integer — I'll compile it as one. If that changes, I'll throw away the compiled code and start over."*

---

> **The bottom line:** Compilation started as a one-time translation step that happened before your program existed. It evolved into an ongoing, adaptive process happening *inside* your running program — blurring the line between compiler and runtime until they are essentially the same thing in modern JS engines.: