# React useEffect Cleanup Function Error

This repository demonstrates a common error in React's `useEffect` hook: an incorrectly implemented cleanup function that leads to memory leaks and unexpected behavior.

## Bug Description
The `MyComponent` uses `useEffect` to add an event listener for window resize events.  However, the cleanup function adds *another* event listener instead of removing the existing one. This results in an accumulating number of event listeners on each resize, causing performance issues and potential memory leaks.

## How to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Resize the browser window. Observe the count increasing rapidly due to multiple event listeners.

## Solution
The solution is to correctly remove the existing event listener within the cleanup function.