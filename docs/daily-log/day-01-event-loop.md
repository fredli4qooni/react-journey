# Day 1: Event Loop & Blocking the Main Thread

**Date:** 2025-11-29

**Focus:** Call Stack, Event Loop, and Runtime Performance

---

## Learning Target

Understand how JavaScript executes code and how heavy synchronous operations impact user experience (UX).

## Key Concepts

* **Single-Threaded:** JavaScript has only one “brain” (the Call Stack). If this brain is busy (e.g., heavy looping), it cannot respond to any other input.
* **Asynchronous (Web APIs):** A solution to keep the UI responsive. Heavy tasks (timers, fetch, etc.) are delegated to “assistants” (Web APIs), and the results are queued in the *Callback Queue*.
* **Event Loop:** The traffic controller that only allows queued callbacks to enter the Call Stack when the stack is empty.

---

## Code Experiments

I tested blocking the browser using a `while` loop for 3 seconds:

```javascript
// Blocking the Main Thread
const start = Date.now();
while (Date.now() - start < 3000) {
    // The browser is stuck here
}
```

---

## Challenges & Insights

**Interesting Insight:**
At first, I expected the blue box animation to freeze when running the blocking code. Surprisingly, the animation kept running — but the button became completely unclickable.

**Analysis:**

* **User interactions (click events)** are processed in the Main Thread → which was blocked → resulting in a total freeze.
* **CSS animations (rotation)** are handled by the **Compositor Thread (GPU)** → so they continued smoothly.

This is an important lesson:
An application may *look* like it's working, but it can still be logically frozen or unresponsive.
**Never block the Main Thread!**

---

## 🔗 References

MDN Web Docs — Event Loop
([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model))

---

*Author: Fredli Fourqoni*