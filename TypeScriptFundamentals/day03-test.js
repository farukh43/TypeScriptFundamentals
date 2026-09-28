// ============================================================
// Session 3: Data Types | Type Safety | Annotations & Type Inference
// Video:  TypeScript for Playwright | Data Types | Type Safety | Annotations & Type Inference (Session 3)
// File:   day02-test.js
// Topic:  JavaScript is dynamically typed, not type-safe
// Run:    node day02-test.js
// ============================================================

let age = 30;                // age is a number
console.log(typeof age);     // number

age = "Thirty";              // type changes to string, no error in JS
console.log(typeof age);     // string
console.log(age);            // Thirty

// Type Safety: JS is NOT type-safe
let message = "Hello";       // string
let count = 30;              // number
message = 100;               // allowed in JS, no error

let result = "5" + 3;        // JS converts 3 to a string
console.log(result);         // 53 (not 8)
