// ============================================================
// Session 4: Operators | Equal Vs Strict Equality
// Video:  TypeScript for Playwright | Operators | Equal Vs Strict Equality (Session 4)
// File:   day03-operators.ts
// Topic:  Arithmetic, assignment, relational, equality and logical operators
// Run:    tsx day03-operators.ts
// ============================================================

export {}; // makes this file a module, so its variable names do not clash with other files

let a: number = 10, b: number = 20;

// ---------------- Arithmetic Operators ----------------
console.log("******* Arithmetic Operators *******");
console.log(a + b);   // 30
console.log(b - a);   // 10
console.log(a * b);   // 200
console.log(b / a);   // 2
console.log(a % b);   // 10 (remainder of 10 / 20)
console.log(5 ** 2);  // 25 (5 to the power 2)

// ---------------- Assignment Operators ----------------
// =  +=  -=  *=  /=  %=
console.log("******* Assignment Operators *******");
a = 10;
b = 5;

console.log(a += b);  // a = a + b  ---> 15
console.log(a -= b);  // a = a - b  ---> 10
console.log(a *= b);  // a = a * b  ---> 50
console.log(a /= b);  // a = a / b  ---> 10
console.log(a %= b);  // a = a % b  ---> 0

// ---------------- Relational / Comparison Operators ----------------
// Returns boolean: true / false
// >  <  >=  <=  ==  !=  ===(strict equality)
console.log("******* Relational Operators *******");
a = 10;
b = 20;

console.log(a > b);   // false
console.log(a < b);   // true
console.log(a <= b);  // true
console.log(a >= b);  // false
console.log(a == b);  // false
console.log(a != b);  // true

// ---------------- Difference between == and === ----------------
console.log("******* Difference between == and === *******");
let num1: any = 10;    // number value
let num2: any = "10";  // string value
// "any" is used here only because TS blocks comparing number with string directly

console.log(num1 == num2);   // true  (compares only values)
console.log(num1 === num2);  // false (compares values and type)

// ---------------- Logical Operators ----------------
// &&  ||  !     returns true/false (boolean), works between boolean values
//
//  b1      b2      b1 && b2   b1 || b2   !b1
//  --------------------------------------------
//  true    true    true       true       false
//  true    false   false      true       false
//  false   true    false      true       true
//  false   false   false      false      true
console.log("******* Logical Operators *******");
let b1: boolean = true;
let b2: boolean = false;

console.log(b1 && b2);  // false
console.log(b1 || b2);  // true
console.log(!b1);       // false
console.log(!b2);       // true

// ---------------- Mixing Logical & Relational Operators ----------------
console.log("******* Mixing Logical & Relational Operators *******");
console.log(20 > 10 && 10 > 5);  // true
console.log(10 < 20 || 5 > 10);  // true
