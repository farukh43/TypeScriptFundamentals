// ============================================================
// Session 2: TypeScript Variables var | let | const
// Video:  TypeScript for Playwright | TypeScript Variables var | let | const (Session 2)
// File:   day01-variables.ts
// Topic:  Variables: var vs let vs const
// Run:    tsx day01-variables.ts
// ============================================================
// Variable: a container which can hold/store some data.
// Syntax:  keyword variableName: dataType(optional) = value
// Lines marked "Error" are commented out. Uncomment one to see the error in VS Code.

export {}; // makes this file a module, so its variable names do not clash with other files

var age: number = 30;
var age2 = 30; // type inferred as number
console.log(age, age2);

/*
 var vs let vs const
 1) Scope
 2) Declaration / Value Assignment
 3) Re-declaration
 4) Re-initialization / Re-assignment
 5) Hoisting

 var   : Avoid in modern JS/TS (function scope, unexpected behaviour)
 let   : Use when the value needs to change
 const : Use when the value should not change
*/

// ---------------- 1) Scope ----------------
// var = Function scope, let/const = Block scope

// Example 1: var (function scope)
function varScope() {
  if (true) {
    var msg = "Hello World";
  }
  console.log(msg); // Works: accessible anywhere in the function
}
varScope();

// Example 2: let and const (block scope)
function blockScope() {
  if (true) {
    let msg = "Hello let";
    const greet = "Hello const";
    console.log(msg);   // Works inside the block
    console.log(greet); // Works inside the block
  }
  // console.log(msg);   // Error: cannot access outside the block
  // console.log(greet); // Error: cannot access outside the block
}
blockScope();

// Example 3: all three together
function scopeDiff() {
  if (true) {
    var num1 = 10;
    let num2 = 20;
    const num3 = 30;
    console.log(num2, num3);
  }
  console.log(num1);    // Works: function scope
  // console.log(num2); // Error: block scope
  // console.log(num3); // Error: block scope
}
scopeDiff();

// ---------------- 2) Declaration / Value Assignment ----------------
// Example 1: var can be declared without initialization
var x;          // declaration
x = 30;         // initialization
console.log(x);

// Example 2: let can be declared without initialization
let y;          // declaration
y = 30;
console.log(y);

// Example 3: const must be initialized at the time of declaration
// const z;     // Error: incorrect
const z = 50;   // correct
console.log(z);

// ---------------- 3) Re-declaration ----------------
// var allows re-declaration, let and const do not (safer code)

var city = "New York";
var city = "Los Angeles"; // Allowed
console.log(city);

let country = "India";
// let country = "US";    // Error: cannot redeclare
console.log(country);

const planet = "Earth";
// const planet = "Mars"; // Error: cannot redeclare
console.log(planet);

// ---------------- 4) Re-initialization / Re-assignment ----------------
// var and let allow re-assignment, const does not

var score = 25;
score = 30;       // Allowed
console.log(score);

let marks = 25;
marks = 30;       // Allowed
console.log(marks);

const pi = 3.14;
// pi = 3.14159;  // Error: cannot change a constant
console.log(pi);

// ---------------- 5) Hoisting ----------------
// var: hoisted with undefined, let and const: hoisted but not initialized

// Note: VS Code may underline this in strict mode, but it runs with tsx and prints undefined
console.log(a);   // undefined
var a = 10;
console.log(a);   // 10

// console.log(b); // Error: cannot access 'b' before initialization
let b = 20;
console.log(b);

// console.log(c); // Error: cannot access 'c' before initialization
const c = 30;
console.log(c);

// ---------------- Best Practices ----------------
// Avoid var  : function scope can cause unexpected bugs
// Use let    : when a variable needs to change later
// Use const  : for values that should never change (default choice)
