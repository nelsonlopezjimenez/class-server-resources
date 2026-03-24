**What Ollama is built on:**

- **Go** — the application layer (CLI, API server, model management)
- **llama.cpp** — the actual inference engine underneath (C++), which handles the heavy math of running models efficiently on consumer hardware
- **REST API** — how it exposes models locally (same pattern as OpenAI's API, intentionally)

> The browser metaphor holds well: Go = the browser shell, llama.cpp = the rendering engine (like Blink/WebKit), models = websites.

---

**Can JS replace Ollama?**

Partially, and it's already happening — but not fully:

| Approach | What it does | Gap vs Ollama |
|---|---|---|
| **Transformers.js** | Runs quantized models in-browser via WASM | Smaller models only, slower |
| **WebGPU + WebLLM** | GPU-accelerated inference in-browser | Still browser-sandboxed, no persistent server |
| **Node.js + llama-node** | Calls llama.cpp bindings from JS | Basically JS *wrapping* llama.cpp — same engine |

**The hard ceiling:** JS can orchestrate and interface, but the inference math is C++/CUDA territory. JS would still be calling llama.cpp underneath.

---

> **Verdict:** JS can *wear* Ollama's clothes (API layer, model management UI, client), but llama.cpp is the muscle no scripting language replaces — just as JS runs the browser but doesn't replace the rendering engine.