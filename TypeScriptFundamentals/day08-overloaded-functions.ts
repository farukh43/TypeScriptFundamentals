// Session 8: Function Overloading
// Step 1: write the signatures of the function (no body)
// Step 2: implement the function once (must be compatible with every signature)
// Step 3: call the function
// Run: tsx day08-overloaded-functions.ts

export {};   // makes this file a module, so its names do not clash with other .ts files in the folder

// Example 1: different parameter types (data types)
function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(param: number | string): string {
  if (typeof param === "number") {
    return `User ID is ${param}`;
  } else {
    return `User Name is ${param}`;
  }
}

console.log(getInfo(101));               // User ID is 101
console.log(getInfo("John"));            // User Name is John

// Example 2: different number of parameters
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number): number {
  if (c !== undefined) {
    return a + b + c;
  }
  return a + b;
}

console.log(add(10, 20));                // 30
console.log(add(10, 20, 30));            // 60

// Example 3 (class notes): different return types
function processInput(input: string): string;
function processInput(input: number): number;

function processInput(input: string | number): string | number {
  return typeof input === "string" ? input.toUpperCase() : input * 2;
}

console.log(processInput("hello"));      // HELLO
console.log(processInput(10));           // 20

// Example 4: three parameter types
function greet(name: string): string;
function greet(age: number): string;
function greet(isMarried: boolean): string;

function greet(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `Hello ${value}`;
  } else if (typeof value === "number") {
    return `You are ${value} years old`;
  } else {
    let res: string = value ? "married" : "single";
    return res;
  }
}

console.log(greet("John"));              // Hello John
console.log(greet(30));                  // You are 30 years old
console.log(greet(true));                // married
console.log(greet(false));               // single

// Invalid example (do NOT uncomment): implementation returns number, overloads promise string
// function fetchData(url: string): string;
// function fetchData(url: number): string;
// function fetchData(url: string | number): number {
//   return 42;   // Error: This overload signature is not compatible with its implementation signature.
// }
