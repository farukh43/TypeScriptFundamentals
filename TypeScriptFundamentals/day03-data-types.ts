// ============================================================
// Session 3: Data Types | Type Safety | Annotations & Type Inference
// Video:  TypeScript for Playwright | Data Types | Type Safety | Annotations & Type Inference (Session 3)
// File:   day02-data-types.ts
// Topic:  TypeScript primitive data types
// Run:    tsx day02-data-types.ts
// ============================================================
/*
1) Primitive Data Types (Built-in)
   Number, String, Boolean, Null, Undefined, Any, Union Type, Void

2) Non-Primitive Data Types (Objects)
   Array, Class, Function, Interface, Tuple etc.
*/

export {}; // makes this file a module, so its variable names do not clash with other files

// 1. NUMBER TYPE
// Represents both integers and floating-point numbers
let age: number = 25;
let price = 25.5;
let big = 4234234234;

console.log("Age:", age);            // Age: 25
console.log("Price:", price);        // Price: 25.5
console.log("Big Number:", big);     // Big Number: 4234234234
console.log(typeof (age));           // number
console.log(typeof age);             // number (brackets are optional)

// 2. STRING TYPE
// Represents textual data: single quote '', double quote "", backtick ``
let firstName: string = "John";
let lastName: string = 'Kenedy';
console.log("Hello", firstName, lastName);           // Hello John Kenedy

let greeting: string = `Hello ${firstName} ${lastName}`; // template literal
console.log(greeting);                                // Hello John Kenedy

// 3. BOOLEAN TYPE
// Represents true/false values
let isStudent: boolean = true;
let hasJob: boolean = false;
console.log("Is Student?", isStudent);  // Is Student? true
console.log("Has Job?", hasJob);        // Has Job? false

// 4. NULL & UNDEFINED
// Special types for absence of value
let emptyValue: null = null;
let notAssigned: undefined = undefined;
console.log(emptyValue);                // null
console.log(notAssigned);               // undefined

let salary: number;
// VS Code underlines the next line ("used before being assigned"), but tsx runs it
console.log(salary);                    // undefined

// 5. ANY TYPE
// Accepts any value, but loses TypeScript benefits (avoid when possible)
let value: any = "Welcome";
console.log(typeof (value));            // string
value = 100;
console.log(typeof (value));            // number
value = true;
console.log(typeof (value));            // boolean
console.log(value);                     // true

// 6. UNION TYPE
// Combine multiple types with |
let id: number | string | boolean;
id = "ABC123";
console.log(id);                        // ABC123
id = 12345;
console.log(id);                        // 12345
id = true;
console.log(id);                        // true
// id = null;                           // Error: null is not in the union

// 7. VOID TYPE
// Used for functions that don't return anything
function show(): void {
  console.log("Welcome");
}
show();                                 // Welcome

// Function that returns a number (return type annotation)
function sum(x: number, y: number): number {
  return x + y;
}
let res: number = sum(10, 20);
console.log(res);                       // 30
