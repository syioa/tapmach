# tapmach

**tapmach** tape-based programming language designed for visual execution and extreme simplicity. It focuses on manipulating a dynamic array of cells through a clean, terminal-inspired interface.

>[!note]
> All the claims of performance are restrained by the execution speed of javascript. So don't really think this can beat C or other high performance programming languages.

---

### 🚀 Getting Started

To run the Tapmach environment, ensure you have **Bun** installed, then execute:

```bash
bun run index.ts
```

The server will start at `http://localhost:3000`. Use the built-in editor to write your code and hit the **Run** button to see the tape come to life. To stop the server, press `q` in your terminal.

---

### 📜 Language Reference

Tapmach operates on a **Tape** (a sequence of cells). You interact with the "current" cell by creating, modifying, or destroying it.

| Instruction | Description |
| :--- | :--- |
| `create_cell` | Appends a new cell to the end of the tape with an initial value of `0`. |
| `add <number>` | Adds the specified integer to the value of the currently active cell. |
| `destroy_cell`| Removes the current cell from the tape with a visual collapse animation. |

>[!note]
> Every line in Tapmach is treated as a distinct operation followed by a 1-second delay to allow the visual animations to complete.

---

### 🛠 Technical Architecture

The project is built with a high-performance, "HTML-First" mindset:

* **Runtime:** Powered by **Bun** for fast I/O and dev-server capabilities.
* **Frontend:** Pure HTML/CSS/JS.
* **Styling:** Features a minimalist UI.
* **State:** Code is automatically persisted to `localStorage` using a debounced saving mechanism, ensuring you never lose your work.

---

### 🎨 Design Goals

* **Minimalist UI:** No clutter, just the tape and the code.
* **Performance:** Lightweight execution with minimal dependencies (`ansis` for terminal styling and `Bun.serve` for the backend).
