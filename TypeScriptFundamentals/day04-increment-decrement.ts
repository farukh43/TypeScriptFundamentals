// ============================================================
// Session 4: Operators | Equal Vs Strict Equality
// Video:  TypeScript for Playwright | Operators | Equal Vs Strict Equality (Session 4)
// File:   day03-increment-decrement.ts
// Topic:  Increment (++) and decrement (--) operators
// Run:    tsx day03-increment-decrement.ts
// ============================================================

export {}; // makes this file a module, so its variable names do not clash with other files

// Increment  ++   (increase by 1)
// Decrement  --   (decrease by 1)
// Post (x++ / x--): use the value first, then change it
// Pre  (++x / --x): change the value first, then use it

// ---------------- Increment ----------------
let x: number = 10;
x++;                           // post-increment, same as x = x + 1
console.log(x);                // 11

x = 10;
++x;                           // pre-increment
console.log(x);                // 11 (same result when used alone)

// The difference shows when the result is assigned
x = 10;
let res1: number = x++;        // assign first (10), then x becomes 11
console.log(res1);             // 10
console.log(x);                // 11

x = 10;
let res2: number = ++x;        // x becomes 11 first, then assign
console.log(res2);             // 11
console.log(x);                // 11

// ---------------- Decrement ----------------
x = 10;
x--;                           // post-decrement
console.log(x);                // 9

x = 10;
--x;                           // pre-decrement
console.log(x);                // 9

x = 10;
let res3: number = x--;        // assign first (10), then x becomes 9
console.log(res3);             // 10
console.log(x);                // 9

x = 10;
let res4: number = --x;        // x becomes 9 first, then assign
console.log(res4);             // 9
console.log(x);                // 9
