# Day 2: Scope & Closures

**Date:** 2025-11-30

**Focus:** Lexical Scope, Closures, and var vs let Differences

---

## Learning Target

Understand how variables are stored in JavaScript’s memory model and how to avoid common bugs when using asynchronous loops.

---

## Key Concepts

* **Closure:**
  The ability of a function to “remember” the variables from its lexical environment, even after the outer function has finished executing.

* **Scope:**

  * `var` → *Function Scope*:
    The variable is shared across all loop iterations.
  * `let` → *Block Scope*:
    Each iteration creates a new, separate variable instance.

---

## Code Experiments

I tested the classic “Loop Problem”:

```javascript
// The problem with var
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000); // Output: 4, 4, 4
}
```

---

## 🚧 Challenges & Insights

**Challenge:**
I was initially confused about why `var` resulted in all outputs being `4`.

**Insight / Analysis:**
`setTimeout` executes *after* the loop finishes.
By the time the callbacks run, the loop has already ended and `i` has been incremented to `4` (the exit condition).

Because `var` does not create block-scoped variables, all three callbacks reference **the same shared `i`** in memory.

Meanwhile, using `let` creates a **new memory binding** for each iteration, so the outputs become `1, 2, 3`.

---

## 🔗 References

MDN — Closures
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)

---

*Author: Fredli Fourqoni*