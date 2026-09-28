// Session 7: Anonymous Functions (unnamed / nameless functions)
// An anonymous function has no name. It is assigned to a variable,
// and the variable acts as its name.
// Run: tsx day07-anonymous-functions.ts

export {};   // makes this file a module, so its names do not clash with other .ts files in the folder

/* Syntax
let variable = function (parameters): returnType {
  // function body
};
variable();   // calling the function
*/

// Example 1: anonymous function with no parameters
let msg = function (): string {
  return "Hello TypeScript";
};
console.log(msg());                // Hello TypeScript

// Example 2: anonymous function with parameters
let multiply = function (a: number, b: number): number {
  return a * b;
};
console.log(multiply(10, 20));     // 200
