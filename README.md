![Banner](assets/logo.png)

# tapmach

**tapmach**, a list-based programming language designed for visual execution and extreme simplicity. It focuses on manipulating a dynamic array of cells through a clean interface. It is also quite performant.

>[!note]
> All the claims of performance are restrained by the execution speed of javascript. So don't assume this can beat C or other high performance programming languages.


## 🚀 Getting Started

To run the Tapmach environment, ensure you have **Bun** installed, then execute:

```bash
bun add -g tapmach
```

This will install tapmach on your system. To run the server just type `tapmach` on the command line.

The server will start at `http://localhost:3000`. Use the built-in editor to write your code and hit the **Run** button to see the your program come to life. To stop the server, press `q` in your terminal.

>[!note]
> I am quite sorry but `Ctrl+C` doesn't work if you want to exit the program.


## 📜 Language Reference

Tapmach operates on a **Tape** (a sequence of cells). You interact with the "current" cell by creating, modifying, or destroying it.

The tape can be understood as the memory of the program in the form of a list. Also it is the only type of data-structure you can use in this programming language.

There are currently 3 instruction sets to suit different tastes.
You can switch to a different instruction set using the `Modes` dropdown menu.

Now lets understand the syntax of all the 3 instruction sets.

### `Default` Instruction Set

It has the following instruction set -


| Instruction | Description |
| :--- | :--- |
| `create_cell` | Appends a new cell to the end of the tape/memory with an initial value of `0`. |
| `add <number>` | Adds the specified integer to the value of the currently active cell. |
| `destroy_cell`| Removes the current cell from the tape/memory. |
| `move <number>` | Moves through the tape/memory with the specified integer. |


Now one important thing to note here is that the `add` and `move` instructions can receive negative integers.


### `Shortcodes` Instruction Set

The instruction set of this is similar to the `Default` Instruction Set and is just composed of shortcodes.


| Instruction | Description |
| :--- | :--- |
| `cc` | Appends a new cell to the end of the tape/memory with an initial value of `0`. |
| `add <number>` | Adds the specified integer to the value of the currently active cell. |
| `dc`| Removes the current cell from the tape/memory. |
| `mov <number>` | Moves through the tape/memory with the specified integer. |


### `Numberless Shortcodes` Instruction Set

>[!note]
> Actual meaning of numberless is countless, but sometimes it can refer to absence of numbers.

This instruction set has a little more keywords. Since there are no numbers.


| Instruction | Description |
| :--- | :--- |
| `cc` | Appends a new cell to the end of the tape/memory with an initial value of `0`. |
| `add` | Adds 1 to the value of the currently active cell. |
| `sub` | Subtracts 1 to the value of the currently active cell. |
| `dc` | Removes the current cell from the tape/memory. |
| `mov` | Moves forward in the tape/memory with a value of 1. |
| `vom` | Moves backward in the tape/memory with a value of a value of 1. |


## 🎨 Design Goals

* **Minimalist UI:** No clutter, just the code and output.
* **Performance:** Lightweight execution with minimal dependencies.

