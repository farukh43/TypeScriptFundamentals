// ============================================================
// Session 4: Operators | Equal Vs Strict Equality
// Video:  TypeScript for Playwright | Operators | Equal Vs Strict Equality (Session 4)
// File:   day03-ternary-operator.ts
// Topic:  Ternary (conditional) operator
// Run:    tsx day03-ternary-operator.ts
// ============================================================

export {}; // makes this file a module, so its variable names do not clash with other files

// Ternary / conditional operator:  ?:
// Syntax:  condition ? resultIfTrue : resultIfFalse;

// Example 1: find the bigger number
let a: number = 100, b: number = 200;
let bigger: number = (a > b) ? a : b;
console.log(bigger);           // 200

// Example 2: Adult or Minor
let personAge: number = 30;
let res: string = (personAge >= 18) ? "Adult" : "Minor";
console.log(res);              // Adult
